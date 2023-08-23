import { Header, List } from "../components";
import labs from "../data/labs.json";

const Labs = () => {
  return (
    <>
      <Header title={"Labs"}></Header>
      <List data={labs} type={"labs"}></List>
    </>
  );
};
export default Labs;
