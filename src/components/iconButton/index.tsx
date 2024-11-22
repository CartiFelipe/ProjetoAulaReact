import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { FC, ReactNode } from "react";

type ButtonProps = {
  children?: ReactNode;
  size?: "small" | "medium" | "large";
};

const index: FC<ButtonProps> = ({ children = "+", size = "medium" }) => {
  return <IconButton size={size}>{children}</IconButton>;
};
export default index;
