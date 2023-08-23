import { Header, List } from "../components";
import instructors from "../data/instructors.json";

const Instructors = () => {
  return (
    <>
      <Header title={"Instructors"}></Header>
      <List data={instructors} type={"instructors"}></List>
    </>
  );
};
export default Instructors;
