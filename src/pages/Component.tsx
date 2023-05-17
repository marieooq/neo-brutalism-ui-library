import { useParams } from "react-router-dom";

const Component = () => {
  const { id } = useParams();
  return <div>Component {id}</div>;
};

export default Component;
