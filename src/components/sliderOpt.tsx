import {FC} from "react";
import {Slider} from "@mui/material";


interface ISliderOptProps {
  name: string
  value: number
  min: number
  max: number
  step: number
  onChange: Function
}

export const SliderOpt: FC<ISliderOptProps> = ({name, value, min, max, step, onChange}) => {

  const marks = [
    {
      value: min,
      label: `${min}`,
    },
    {
      value: max,
      label: `${max}`,
    },

  ];
  const handleChange = (_event: Event, value: number | number[], _activeThumb: number) => {
    onChange(value)
  };

  // @ts-ignore
  return (
    <>
      <p>{name}</p>
      <Slider
        aria-label="Temperature"
        value={value}
        valueLabelDisplay="auto"
        onChange={handleChange}
        size="small"
        step={step}
        min={min}
        max={max}
        marks={marks}
      />
    </>
  );
};