import { IIncome } from '@/interfaces/income'
import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuid } from 'uuid'
import { setAppData } from '../index'

export interface IncomeState {
  income: IIncome[]
}

const initialState: IncomeState = {
  income: [],
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
  },
})

export const { addIncome, removeIncome, changeIncome } = incomeSlice.actions

export default incomeSlice.reducer
