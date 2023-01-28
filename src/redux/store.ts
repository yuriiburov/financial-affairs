import { configureStore } from '@reduxjs/toolkit'
import incomeReducer from './incomeSlice'
import themeReducer from './themeSlice'

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    incomeData: incomeReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
