import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isDarkMode: false,
}

const darkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode
    },
    setSystemDarkMode: (state, action) => {
      state.isDarkMode = action.payload
    },
  },
})

export const { toggleDarkMode, setSystemDarkMode } = darkModeSlice.actions

export default darkModeSlice.reducer
