import { useAppContext } from "../../Context";

const index = () => {
  const { changeLanguage } = useAppContext();

  changeLanguage("pt-BR");

  return <h1>Home</h1>;
};
export default index;
