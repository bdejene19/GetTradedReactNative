import { configureStore } from '@reduxjs/toolkit'
import SettingSlice from './slices/settings'
import userSlice from "./slices/user"
export const store = configureStore({
  reducer: {
    settingStore: SettingSlice,
    userStore: userSlice
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
