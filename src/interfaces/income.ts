import { typingData } from '.'

export interface IIncome {
  id?: string
  title: string
  description: string | null
  sum: number
  [typingData.DATE]: Date
}
