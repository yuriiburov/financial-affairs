import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

export interface ThemeState {
  themeMode: 'light' | 'dark'
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

// Action creators are generated for each case reducer function
export const { setThemeMode } = themeSlice.actions

export default themeSlice.reducer
