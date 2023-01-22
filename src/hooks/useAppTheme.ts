import { themeModeType } from '@/interfaces'
import useAppSelector from './useAppSelector'

export interface useAppThemeReturnedType {
  mode: themeModeType
  color: '#fff' | '#000'
  background: '#000' | '#fff'
}

const useAppTheme = (): useAppThemeReturnedType => {
  const { themeMode: mode } = useAppSelector(({ theme }) => theme)

  return {
    mode,
    color: mode === 'dark' ? '#fff' : '#000',
    background: mode === 'dark' ? '#000' : '#fff',
  }
}

export default useAppTheme
