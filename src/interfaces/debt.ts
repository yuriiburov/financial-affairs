import { typingData } from '.'
import { IExpense } from './expense'

export interface IDebt extends Omit<IExpense, typingData.DATE> {
  dueDate: Date
  endDate: Date | null
}
