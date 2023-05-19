
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface SettingState {
    isDark: boolean;
    isLarge: boolean;
}

const initialState: SettingState = {
  isDark: false,
  isLarge: false
}

export const settingSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    toggleDark: (state) => {
        return {
            ...state,
            isDark: !state.isDark,
        } 
    },

    toggleLarge: (state) => {
        return {
            ...state,
            isLarge: !state.isLarge
        }
    }
  },
})

export const { toggleDark, toggleLarge } = settingSlice.actions;

export default settingSlice.reducer;