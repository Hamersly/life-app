import {createSelector} from "@reduxjs/toolkit";

const settings = (state: any) => state;
export const getSpeedLevel = createSelector(
  settings, (state) => state.settings.speed
)

export const get_green_green = createSelector(
  settings, (state) => state.settings.green_green
)
export const get_green_red = createSelector(
  settings, (state) => state.settings.green_red
)
export const get_green_yellow = createSelector(
  settings, (state) => state.settings.green_yellow
)
export const get_green_blue = createSelector(
  settings, (state) => state.settings.green_blue
)

export const get_red_red = createSelector(
  settings, (state) => state.settings.red_red
)
export const get_red_green = createSelector(
  settings, (state) => state.settings.red_green
)
export const get_red_yellow = createSelector(
  settings, (state) => state.settings.red_yellow
)
export const get_red_blue = createSelector(
  settings, (state) => state.settings.red_blue
)

export const get_yellow_red = createSelector(
  settings, (state) => state.settings.yellow_red
)
export const get_yellow_green = createSelector(
  settings, (state) => state.settings.yellow_green
)
export const get_yellow_yellow = createSelector(
  settings, (state) => state.settings.yellow_yellow
)
export const get_yellow_blue = createSelector(
  settings, (state) => state.settings.yellow_blue
)
export const get_blue_red = createSelector(
  settings, (state) => state.settings.blue_red
)
export const get_blue_green = createSelector(
  settings, (state) => state.settings.blue_green
)
export const get_blue_yellow = createSelector(
  settings, (state) => state.settings.blue_yellow
)
export const get_blue_blue = createSelector(
  settings, (state) => state.settings.blue_blue
)

export const get_green_quantity = createSelector(
  settings, (state) => state.settings.green_quantity
)

export const get_red_quantity = createSelector(
  settings, (state) => state.settings.red_quantity
)

export const get_yellow_quantity = createSelector(
  settings, (state) => state.settings.yellow_quantity
)

export const get_blue_quantity = createSelector(
  settings, (state) => state.settings.blue_quantity
)