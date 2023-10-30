import {FC} from "react";
import {Box, Container} from "@mui/material";
import {FormOpt} from "./formOpt.tsx";
import {SliderOpt} from "./sliderOpt.tsx";
import {useDispatch, useSelector} from "react-redux";
import {
  get_blue_blue,
  get_blue_green, get_blue_quantity, get_blue_red, get_blue_yellow,
  get_green_blue,
  get_green_green, get_green_quantity,
  get_green_red,
  get_green_yellow,
  get_red_blue,
  get_red_green, get_red_quantity,
  get_red_red,
  get_red_yellow, get_yellow_blue,
  get_yellow_green, get_yellow_quantity,
  get_yellow_red,
  get_yellow_yellow,
  getSpeedLevel
} from "../../store/selectors.ts";
import {
  set_blue_blue,
  set_blue_green, set_blue_quantity,
  set_blue_red,
  set_blue_yellow,
  set_green_blue,
  set_green_green,
  set_green_quantity,
  set_green_red,
  set_green_yellow,
  set_red_blue,
  set_red_green,
  set_red_quantity,
  set_red_red,
  set_red_yellow,
  set_yellow_blue,
  set_yellow_green, set_yellow_quantity,
  set_yellow_red,
  set_yellow_yellow,
  setSpeedLevel
} from "../../store/sliсe.ts";
import {SpecButton} from "./SpecButton.tsx";


export const Settings: FC = () => {
  const speed: number = useSelector(getSpeedLevel);

  const dispatch = useDispatch();

  const green_green: number = useSelector(get_green_green);
  const green_red: number = useSelector(get_green_red);
  const green_yellow: number = useSelector(get_green_yellow);
  const green_blue: number = useSelector(get_green_blue);

  const red_green: number = useSelector(get_red_green);
  const red_red: number = useSelector(get_red_red);
  const red_yellow: number = useSelector(get_red_yellow);
  const red_blue: number = useSelector(get_red_blue);

  const yellow_green: number = useSelector(get_yellow_green);
  const yellow_red: number = useSelector(get_yellow_red);
  const yellow_yellow: number = useSelector(get_yellow_yellow);
  const yellow_blue: number = useSelector(get_yellow_blue);

  const blue_green: number = useSelector(get_blue_green);
  const blue_red: number = useSelector(get_blue_red);
  const blue_yellow: number = useSelector(get_blue_yellow);
  const blue_blue: number = useSelector(get_blue_blue);

  const green_quantity: number = useSelector(get_green_quantity);
  const red_quantity: number = useSelector(get_red_quantity);
  const yellow_quantity: number = useSelector(get_yellow_quantity);
  const blue_quantity: number = useSelector(get_blue_quantity);

  const quantity: {} = {
    a_name: "green_quantity",
    a_value: green_quantity,
    a_onChange: (value: number) => dispatch(set_green_quantity(value)),
    b_name: "red_quantity",
    b_value: red_quantity,
    b_onChange: (value: number) => dispatch(set_red_quantity(value)),
    c_name: "yellow_quantity",
    c_value: yellow_quantity,
    c_onChange: (value: number) => dispatch(set_yellow_quantity(value)),
    d_name: "blue_quantity",
    d_value: blue_quantity,
    d_onChange: (value: number) => dispatch(set_blue_quantity(value))
  }

  const green: {} = {
    a_name: "green_green",
    a_value: green_green,
    a_onChange: (value: number) => dispatch(set_green_green(value)),
    b_name: "green_red",
    b_value: green_red,
    b_onChange: (value: number) => dispatch(set_green_red(value)),
    c_name: "green_yellow",
    c_value: green_yellow,
    c_onChange: (value: number) => dispatch(set_green_yellow(value)),
    d_name: "green_blue",
    d_value: green_blue,
    d_onChange: (value: number) => dispatch(set_green_blue(value))
  }

  const red: {} = {
    a_name: "red_green",
    a_value: red_green,
    a_onChange: (value: number) => dispatch(set_red_green(value)),
    b_name: "red_red",
    b_value: red_red,
    b_onChange: (value: number) => dispatch(set_red_red(value)),
    c_name: "red_yellow",
    c_value: red_yellow,
    c_onChange: (value: number) => dispatch(set_red_yellow(value)),
    d_name: "red_blue",
    d_value: red_blue,
    d_onChange: (value: number) => dispatch(set_red_blue(value))
  }

  const yellow: {} = {
    a_name: "yellow_green",
    a_value: yellow_green,
    a_onChange: (value: number) => dispatch(set_yellow_green(value)),
    b_name: "yellow_red",
    b_value: yellow_red,
    b_onChange: (value: number) => dispatch(set_yellow_red(value)),
    c_name: "yellow_yellow",
    c_value: yellow_yellow,
    c_onChange: (value: number) => dispatch(set_yellow_yellow(value)),
    d_name: "yellow_blue",
    d_value: yellow_blue,
    d_onChange: (value: number) => dispatch(set_yellow_blue(value))
  }

  const blue: {} = {
    a_name: "blue_green",
    a_value: blue_green,
    a_onChange: (value: number) => dispatch(set_blue_green(value)),
    b_name: "blue_red",
    b_value: blue_red,
    b_onChange: (value: number) => dispatch(set_blue_red(value)),
    c_name: "blue_yellow",
    c_value: blue_yellow,
    c_onChange: (value: number) => dispatch(set_blue_yellow(value)),
    d_name: "blue_blue",
    d_value: blue_blue,
    d_onChange: (value: number) => dispatch(set_blue_blue(value))
  }

  const randomInteger = (min:number = -1, max:number = 1.01, fix:number = 2):void => {
    const randomFunc = (): number => {
      const random: number = Math.random() * (max - min) + min
      return Number(random.toFixed(fix))
    }

    dispatch(set_green_green(randomFunc()))
    dispatch(set_green_red(randomFunc()))
    dispatch(set_green_yellow(randomFunc()))
    dispatch(set_green_blue(randomFunc()))
    dispatch(set_red_green(randomFunc()))
    dispatch(set_red_red(randomFunc()))
    dispatch(set_red_yellow(randomFunc()))
    dispatch(set_red_blue(randomFunc()))
    dispatch(set_yellow_green(randomFunc()))
    dispatch(set_yellow_red(randomFunc()))
    dispatch(set_yellow_yellow(randomFunc()))
    dispatch(set_yellow_blue(randomFunc()))
    dispatch(set_blue_green(randomFunc()))
    dispatch(set_blue_red(randomFunc()))
    dispatch(set_blue_yellow(randomFunc()))
    dispatch(set_blue_blue(randomFunc()))
  }

  const resetStore = (): void => {
    dispatch(set_green_green(0))
    dispatch(set_green_red(0))
    dispatch(set_green_yellow(0))
    dispatch(set_green_blue(0))
    dispatch(set_red_green(0))
    dispatch(set_red_red(0))
    dispatch(set_red_yellow(0))
    dispatch(set_red_blue(0))
    dispatch(set_yellow_green(0))
    dispatch(set_yellow_red(0))
    dispatch(set_yellow_yellow(0))
    dispatch(set_yellow_blue(0))
    dispatch(set_blue_green(0))
    dispatch(set_blue_red(0))
    dispatch(set_blue_yellow(0))
    dispatch(set_blue_blue(0))
  }

  return (
    <div className="container" id="option-block">
      <h3>Settings:</h3>
      <Container sx={{width: 250, mt: 1, p: 0}}>
        <FormOpt
          params={green}
          labelName={"Green gravitation"} max={1} min={-1} step={0.01}/>
        <FormOpt
          params={red}
          labelName={"Red gravitation"} max={1} min={-1} step={0.01}/>
        <FormOpt
          params={yellow}
          labelName={"Yellow gravitation"} max={1} min={-1} step={0.01}/>
        <FormOpt
          params={blue}
          labelName={"Blue gravitation"} max={1} min={-1} step={0.01}/>
        <FormOpt
          params={quantity}
          labelName={"Quantity objects"} max={50} min={1} step={1}/>
        <Box sx={{mt: 3, ml: 2}}>
          <SliderOpt
            name={"Speed"}
            value={speed}
            min={0}
            max={3}
            step={0.1}
            onChange={(value: number) => dispatch(setSpeedLevel(value))}
          />
        </Box>
        <SpecButton onClick={randomInteger}>Random</SpecButton>
        <SpecButton onClick={resetStore}>Reset</SpecButton>
      </Container>
    </div>
  );
};