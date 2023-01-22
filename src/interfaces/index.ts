import { IDebt } from './debt'
import { IExpense, IMandatoryExpense, IPlannedExpense } from './expense'
import { IIncome } from './income'

export type themeModeType = 'light' | 'dark'

export type WithNotRequired<T, K extends keyof T> = T & { [P in K]?: T[P] }

export enum typingData {
  CATEGORY = 'category',
  DATE = 'date',
}

export interface IAppData {
  income: IIncome[]
  expense: IExpense[]
  debt: IDebt[]
  plannedExpense: IPlannedExpense[]
  mandatoryExpense: IMandatoryExpense[]
}
