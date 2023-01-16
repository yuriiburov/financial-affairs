import useCommas from '@/hooks/useCommas'
import { Typography } from '@mui/material'
import classes from './FinanceInShort.module.scss'

const FinanceInShort = () => {
  return (
    <div className={classes['finance-in-short__content']}>
      <Typography textAlign='center' color='green'>
        {`+${useCommas(38000)} грн`}
      </Typography>
      <Typography textAlign='center' color='red'>
        {`-${useCommas(3800)} грн`}
      </Typography>
    </div>
  )
}

export default FinanceInShort
