import { useParams } from "react-router-dom";

const Index = () => {
  const params = useParams();
  return (
    <div>
      <h1>Forms</h1>
      {params.type}
    </div>
  );
};
export default Index;
