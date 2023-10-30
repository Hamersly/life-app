import {Container, FormControl, InputLabel, Select} from "@mui/material";
import {SliderOpt} from "./sliderOpt.tsx";
import {FC} from "react";


interface IFormOptProps {
  params: { [key: string]: any }
  labelName: string
  min: number
  max: number
  step: number
}

export const FormOpt: FC<IFormOptProps> = ({params, labelName, min, max, step}) => {

  return (
    <FormControl fullWidth sx={{mt: 2}}>
      <InputLabel id="demo-simple-select-label">{labelName}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="Green gravitation"
      >
        <Container sx={{width: 150, m: 3, p: 0}}>
          <SliderOpt
            name={params.a_name}
            value={params.a_value}
            min={min}
            max={max}
            step={step}
            onChange={params.a_onChange}
          />
          <SliderOpt
            name={params.b_name}
            value={params.b_value}
            min={min}
            max={max}
            step={step}
            onChange={params.b_onChange}/>
          <SliderOpt
            name={params.c_name}
            value={params.c_value}
            min={min}
            max={max}
            step={step}
            onChange={params.c_onChange}/>
          <SliderOpt
            name={params.d_name}
            value={params.d_value}
            min={min}
            max={max}
            step={step}
            onChange={params.d_onChange}/>
        </Container>
      </Select>
    </FormControl>
  );
};