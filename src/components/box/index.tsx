import { Box, SxProps } from "@mui/material";

type BoxProps = {
  children: React.ReactNode;
  sx?: SxProps;
};

const defaultSx: SxProps = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  width: "10vw",
  height: "10vh",
  border: "1px solid black",
};

const index: React.FC<BoxProps> = ({ children, sx = defaultSx }) => {
  return <Box sx={sx}>{children}</Box>;
};
export default index;
