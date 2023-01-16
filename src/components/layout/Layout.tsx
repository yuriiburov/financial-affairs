import useAppDispatch from '@/hooks/useAppDispatch'
import useAppTheme from '@/hooks/useAppTheme'
import { setThemeMode } from '@/redux/themeSlice'
import Head from 'next/head'
import { FC, memo, ReactNode, useEffect, useMemo } from 'react'
import classes from './Layout.module.scss'

interface Props {
  children: ReactNode
}

const Layout: FC<Props> = ({ children }) => {
  const { mode } = useAppTheme()
  const dispatch = useAppDispatch()

  const modeCondition = useMemo(() => (mode === 'dark' ? '_dark' : '_light'), [mode])

  useEffect(() => {
    const handleModeChange = (e: MediaQueryListEvent) => {
      dispatch(setThemeMode(e.matches ? 'dark' : 'light'))
    }

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', handleModeChange)

    dispatch(
      setThemeMode(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    )

    return () => {
      window
        .matchMedia('(prefers-color-scheme: dark)')
        .removeEventListener('change', handleModeChange)
    }
  }, [dispatch])

  return (
    <>
      <Head>
        <title>Wallet</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className={`${classes.background} ${classes[`background${modeCondition}`]}`}>
        <main>{children}</main>

        <div
          className={`${classes.background__item} ${classes.background__primary} ${
            classes[`background__primary${modeCondition}`]
          }`}
        />
        <div
          className={`${classes.background__item} ${classes.background__secondary} ${
            classes[`background__secondary${modeCondition}`]
          }`}
        />
      </div>
    </>
  )
}

export default memo(Layout)
