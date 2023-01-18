import FinanceInShort from '@/components/financeInShort/FinanceInShort'
import Ripples from '@/components/ripples/Ripples'
import useAppTheme from '@/hooks/useAppTheme'
import { Typography } from '@mui/material'

const Index = () => {
  const { color } = useAppTheme()

  return (
    <>
      <div
        className='main__click-area'
        onClick={() => {
          console.log('click')
        }}
      />
      <FinanceInShort />
      <Ripples />
      <div className='main-hint'>
        <Typography color={color} fontSize={14}>
          Натисніть будь-де
        </Typography>
      </div>
    </>
  )
}

export default Index
