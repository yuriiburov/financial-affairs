import { IAppData } from './interfaces'

const defaultAppData: IAppData = {
  income: [],
  expense: [],
  mandatoryExpense: [],
  plannedExpense: [],
  debt: [],
}

export const getAppData = () => {
  if (typeof window === 'undefined') return

  const appData: IAppData =
    JSON.parse(
      localStorage.getItem('financialAffairs') ||
        JSON.stringify(localStorage.getItem('financialAffairs'))
    ) || defaultAppData

  return appData
}

export const setAppData = (appDataKey?: keyof IAppData, newData?: any) => {
  const appData = getAppData()

  if (!appData) return
  if (!appDataKey) return appData

  if (newData && typeof newData === typeof defaultAppData[appDataKey]) {
    appData[appDataKey] = newData
    localStorage.setItem(appDataKey, JSON.stringify(appData))
  }

  return appData[appDataKey]
}
