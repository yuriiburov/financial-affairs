enum typingData {
  CATEGORY = 'category',
  DATE = 'date',
}

export interface IIncome {
  title: string
  description: string | null
  sum: number
  [typingData.DATE]: Date
}

export interface IExpense extends IIncome {
  [typingData.CATEGORY]: string
}

export interface IDebt extends Omit<IExpense, typingData.DATE> {
  dueDate: Date
  endDate: Date | null
}

export interface IPlannedExpense extends Omit<IExpense, typingData.DATE> {
  date: Date | null
}

export interface IMandatoryExpense extends Omit<IExpense, typingData.DATE> {}
