import { IAppData } from './interfaces'

const defaultAppData: IAppData = {
  income: [],
  expense: [],
  mandatoryExpense: [],
  plannedExpense: [],
  debt: [],
}

export const setAppData = (appDataKey?: keyof IAppData, newData?: any) => {
  if (typeof window === 'undefined') return
  const appData: IAppData =
    JSON.parse(
      localStorage.getItem('financialAffairs') ||
        JSON.stringify(localStorage.getItem('financialAffairs'))
    ) || defaultAppData

  if (!appDataKey) return appData

  if (newData && typeof newData === typeof defaultAppData[appDataKey]) {
    appData[appDataKey] = newData
    localStorage.setItem(appDataKey, JSON.stringify(appData))
  }

  return appData[appDataKey]
}
