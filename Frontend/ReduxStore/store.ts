import { configureStore } from '@reduxjs/toolkit'
import SettingSlice from './slices/SettingSlice'

export const store = configureStore({
  reducer: {
    settings: SettingSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
