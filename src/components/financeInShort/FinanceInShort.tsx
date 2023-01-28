import useAppDispatch from '@/hooks/useAppDispatch'
import useAppSelector from '@/hooks/useAppSelector'
import { setMainScreenIncome } from '@/redux/incomeSlice'
import { Typography } from '@mui/material'
import { useEffect } from 'react'
import classes from './FinanceInShort.module.scss'

const FinanceInShort = () => {
  const { mainScreenIncome } = useAppSelector(({ incomeData }) => incomeData)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setMainScreenIncome('month'))
  }, [dispatch])

  return (
    <div className={classes['finance-in-short__content']}>
      <Typography textAlign='center' color='green'>
        {mainScreenIncome === null ? mainScreenIncome : `+${mainScreenIncome.toLocaleString()} грн`}
      </Typography>
      <Typography textAlign='center' color='red'>
        {`-${3800} грн`}
      </Typography>
    </div>
  )
}

export default FinanceInShort
