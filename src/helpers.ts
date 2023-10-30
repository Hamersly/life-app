import {useSelector} from "react-redux";
import {
  get_blue_blue,
  get_blue_green, get_blue_quantity, get_blue_red, get_blue_yellow,
  get_green_blue,
  get_green_green, get_green_quantity,
  get_green_red,
  get_green_yellow, get_red_blue,
  get_red_green, get_red_quantity,
  get_red_red, get_red_yellow, get_yellow_blue, get_yellow_green, get_yellow_quantity, get_yellow_red, get_yellow_yellow
} from "../store/selectors.ts";

export const green_green: number = useSelector(get_green_green);
export const green_red: number = useSelector(get_green_red);
export const green_yellow: number = useSelector(get_green_yellow);
export const green_blue: number = useSelector(get_green_blue);

export const red_green: number = useSelector(get_red_green);
export const red_red: number = useSelector(get_red_red);
export const red_yellow: number = useSelector(get_red_yellow);
export const red_blue: number = useSelector(get_red_blue);

export const yellow_green: number = useSelector(get_yellow_green);
export const yellow_red: number = useSelector(get_yellow_red);
export const yellow_yellow: number = useSelector(get_yellow_yellow);
export const yellow_blue: number = useSelector(get_yellow_blue);

export const blue_green: number = useSelector(get_blue_green);
export const blue_red: number = useSelector(get_blue_red);
export const blue_yellow: number = useSelector(get_blue_yellow);
export const blue_blue: number = useSelector(get_blue_blue);

export const green_quantity: number = useSelector(get_green_quantity);
export const red_quantity: number = useSelector(get_red_quantity);
export const yellow_quantity: number = useSelector(get_yellow_quantity);
export const blue_quantity: number = useSelector(get_blue_quantity);