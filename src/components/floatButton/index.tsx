import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { FC, ReactNode } from "react";

type FloatButtonProps = {
  children?: ReactNode;
};

const index: FC<FloatButtonProps> = ({ children = <AddIcon /> }) => {
  return (
    <Fab color="primary" aria-label="add" variant="circular">
      {children}
    </Fab>
  );
};
export default index;
