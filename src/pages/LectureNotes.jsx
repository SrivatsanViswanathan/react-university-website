import { Header, List } from "../components";
import lectures from "../data/lectures.json";

const LectureNotes = () => {
  return (
    <>
      <Header title={"Lecture Notes"}></Header>
      <List data={lectures} type={"normal"}></List>
    </>
  );
};
export default LectureNotes;
