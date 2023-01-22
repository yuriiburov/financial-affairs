import { typingData } from '.'
import { IIncome } from './income'

export interface IExpense extends IIncome {
  [typingData.CATEGORY]: string
}

export interface IPlannedExpense extends Omit<IExpense, typingData.DATE> {
  date: Date | null
}

export interface IMandatoryExpense extends Omit<IExpense, typingData.DATE> {}
