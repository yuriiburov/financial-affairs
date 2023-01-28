import { IMainScreenPeriod, IPeriod } from '@/interfaces'
import { IIncome } from '@/interfaces/income'
import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuid } from 'uuid'
import { setAppData } from '../index'

export interface IncomeState {
  income: IIncome[]
  periodIncome: IIncome[]
  mainScreenIncome: number | null
}

const initialState: IncomeState = {
  income: [],
  periodIncome: [],
  mainScreenIncome: null,
}

export const incomeSlice = createSlice({
  name: 'income',
  initialState,
  reducers: {
    addIncome: (state, { payload }: PayloadAction<IIncome>) => {
      if (!payload.description) {
        payload.description = null
      }
      payload.id = uuid()
      const income = [...state.income, payload].sort((a, b) => b.date.getTime() - a.date.getTime())

      setAppData('income', income)
      state.income = income
    },
    removeIncome: (state, { payload }: PayloadAction<Required<Pick<IIncome, 'id'>>>) => {
      const income = state.income.filter(({ id }) => id !== payload.id)

      setAppData('income', income)
      state.income = income
    },
    changeIncome: (state, { payload }: PayloadAction<Required<IIncome>>) => {
      const income = state.income
        .map(income => (income.id === payload.id ? payload : income))
        .sort((a, b) => b.date.getTime() - a.date.getTime())

      setAppData('income', income)
      state.income = income
    },
    setPeriodIncome: (state, { payload }: PayloadAction<IPeriod>) => {
      state.periodIncome = state.income.filter(
        ({ date }) =>
          date.getTime() >= payload.from.getTime() && date.getTime() <= payload.to.getTime()
      )
    },
    setMainScreenIncome: (state, { payload }: PayloadAction<IMainScreenPeriod>) => {
      const currentPeriodIncome = state.income.filter(({ date }) => {
        const isCurrentYear = date.getFullYear() === new Date().getFullYear()
        const isCurrentMonth = date.getMonth() === new Date().getMonth()
        const isToday = date.getDate() === new Date().getDate()
        const isCurrentWeek = () => {
          const current = new Date()
          const first = current.getDate() - current.getDay()
          const last = first + 6
          const firstDay = new Date(current.setDate(first))
          const lastDay = new Date(current.setDate(last))

          return date.getTime() >= firstDay.getTime() && date.getDate() <= lastDay.getTime()
        }

        switch (payload) {
          case 'day':
            return isCurrentYear && isCurrentMonth && isToday
          case 'week':
            return isCurrentYear && isCurrentMonth && isCurrentWeek()
          case 'month':
            return isCurrentYear && isCurrentMonth
          case 'year':
            return isCurrentYear
        }
      })
      state.mainScreenIncome = currentPeriodIncome.reduce((acc, income) => acc + income.sum, 0)
    },
  },
})

export const { addIncome, removeIncome, changeIncome, setPeriodIncome, setMainScreenIncome } =
  incomeSlice.actions

export default incomeSlice.reducer
