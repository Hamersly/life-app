import {FC} from "react";
import {Box, Button} from "@mui/material";

interface ISpecButtonProps {
  children: string
  onClick: Function

}

export const SpecButton: FC<ISpecButtonProps> = ({children,onClick}) => {

  const handleClick = ():void => {
    onClick()
  }

  return (
    <Box sx={{display: 'flex', justifyContent: 'center', mt: 3, ml: 3}}>
      <Button
        variant="contained"
        onClick={handleClick}
      >
        {children}
      </Button>
    </Box>
  );
};