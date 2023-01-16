import useAppSelector from './useAppSelector'

const useAppTheme = () => {
  const { themeMode } = useAppSelector(({ theme }) => theme)

  return {
    mode: themeMode,
    color: themeMode === 'dark' ? '#fff' : '#000',
    background: themeMode === 'dark' ? '#000' : '#fff',
  }
}

export default useAppTheme
