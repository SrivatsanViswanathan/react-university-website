import { Header, List } from "../components";
import modules from "../data/modules.json";

const Modules = () => {
  return (
    <>
      <Header title={"Modules"}></Header>
      <List data={modules} type={"normal"}></List>
    </>
  );
};
export default Modules;
