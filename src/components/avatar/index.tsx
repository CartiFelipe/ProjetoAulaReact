import { Avatar } from "@mui/material";

type AvatarProps = {
  src: string;
  width?: number;
  height?: number;
};
const index: React.FC<AvatarProps> = ({ src, width = 100, height = 100 }) => {
  return <Avatar src={src} alt="Avatar" sx={{ width, height }} />;
};
export default index;
