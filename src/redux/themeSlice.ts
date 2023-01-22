import { themeModeType } from '@/interfaces'
import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

export interface ThemeState {
  themeMode: themeModeType
}

const initialState: ThemeState = {
  themeMode: 'light',
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setThemeMode: (state, { payload }: PayloadAction<typeof initialState.themeMode>) => {
      state.themeMode = payload
    },
  },
})

export const { setThemeMode } = themeSlice.actions

export default themeSlice.reducer
