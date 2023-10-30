import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface SettingsState {
  speed: number
  green_green: number
  green_red: number
  green_yellow: number
  green_blue: number
  red_red: number
  red_green: number
  red_yellow: number
  red_blue: number
  yellow_red: number
  yellow_green: number
  yellow_yellow: number
  yellow_blue: number
  blue_red: number
  blue_green: number
  blue_yellow: number
  blue_blue: number
  green_quantity: number
  red_quantity: number
  yellow_quantity: number
  blue_quantity: number
}

const initialState = {
  speed: 0.5,
  green_green: 0,
  green_red: 0,
  green_yellow: 0,
  green_blue: 0,
  red_red: 0,
  red_green: 0,
  red_yellow: 0,
  red_blue: 0,
  yellow_red: 0,
  yellow_green: 0,
  yellow_yellow: 0,
  yellow_blue: 0,
  blue_red: 0,
  blue_green: 0,
  blue_yellow: 0,
  blue_blue: 0,
  green_quantity: 10,
  red_quantity: 10,
  yellow_quantity: 10,
  blue_quantity: 10,
  } as SettingsState

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setSpeedLevel(state, action: PayloadAction<number>) {
      state.speed = action.payload
    },

    set_green_green(state, action: PayloadAction<number>) {
      state.green_green = action.payload
    },
    set_green_red(state, action: PayloadAction<number>) {
      state.green_red = action.payload
    },
    set_green_yellow(state, action: PayloadAction<number>) {
      state.green_yellow = action.payload
    },
    set_green_blue(state, action: PayloadAction<number>) {
      state.green_blue = action.payload
    },
    set_red_red(state, action: PayloadAction<number>) {
      state.red_red = action.payload
    },
    set_red_green(state, action: PayloadAction<number>) {
      state.red_green = action.payload
    },
    set_red_yellow(state, action: PayloadAction<number>) {
      state.red_yellow = action.payload
    },
    set_red_blue(state, action: PayloadAction<number>) {
      state.red_blue = action.payload
    },
    set_yellow_red(state, action: PayloadAction<number>) {
      state.yellow_red = action.payload
    },
    set_yellow_green(state, action: PayloadAction<number>) {
      state.yellow_green = action.payload
    },
    set_yellow_yellow(state, action: PayloadAction<number>) {
      state.yellow_yellow = action.payload
    },
    set_yellow_blue(state, action: PayloadAction<number>) {
      state.yellow_blue = action.payload
    },
    set_blue_red(state, action: PayloadAction<number>) {
      state.blue_red = action.payload
    },
    set_blue_green(state, action: PayloadAction<number>) {
      state.blue_green = action.payload
    },
    set_blue_yellow(state, action: PayloadAction<number>) {
      state.blue_yellow = action.payload
    },
    set_blue_blue(state, action: PayloadAction<number>) {
      state.blue_blue = action.payload
    },
    set_green_quantity(state, action: PayloadAction<number>) {
      state.green_quantity = action.payload
    },
    set_red_quantity(state, action: PayloadAction<number>) {
      state.red_quantity = action.payload
    },
    set_yellow_quantity(state, action: PayloadAction<number>) {
      state.yellow_quantity = action.payload
    },
    set_blue_quantity(state, action: PayloadAction<number>) {
      state.blue_quantity = action.payload
    },
  },
})

export const {
  setSpeedLevel,
  set_green_green,
  set_green_red,
  set_green_yellow,
  set_green_blue,
  set_red_red,
  set_red_green,
  set_red_yellow,
  set_red_blue,
  set_yellow_red,
  set_yellow_green,
  set_yellow_yellow,
  set_yellow_blue,
  set_blue_red,
  set_blue_green,
  set_blue_yellow,
  set_blue_blue,
  set_green_quantity,
  set_red_quantity,
  set_yellow_quantity,
  set_blue_quantity,
} = settingsSlice.actions

export default settingsSlice.reducer