import Head from 'next/head'
import { FC, memo, ReactNode, useEffect, useState } from 'react'
import classes from './Layout.module.scss'

interface Props {
  children: ReactNode
}

const Layout: FC<Props> = ({ children }) => {
  const [mode, setMode] = useState<'dark' | 'light'>('light')

  const modeCondition = mode === 'dark' ? '_dark' : '_light'

  useEffect(() => {
    const handleModeChange = (e: MediaQueryListEvent) => {
      setMode(e.matches ? 'dark' : 'light')
    }

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', handleModeChange)
    setMode(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')

    return () => {
      window
        .matchMedia('(prefers-color-scheme: dark)')
        .removeEventListener('change', handleModeChange)
    }
  }, [])

  return (
    <>
      <Head>
        <title>Wallet</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className={`${classes.background} ${classes[`background${modeCondition}`]}`}>
        {children}
        <div
          className={`${classes.background__item} ${classes.background__primary} ${
            classes[`background__primary${modeCondition}`]
          }`}></div>
        <div
          className={`${classes.background__item} ${classes.background__secondary} ${
            classes[`background__secondary${modeCondition}`]
          }`}></div>
      </div>
    </>
  )
}

export default memo(Layout)
