import { Header, List } from "../components";
import dataSheets from "../data/dataSheets.json";

const DataSheets = () => {
  return (
    <>
      <Header title={"Data Sheets"}></Header>
      <List data={dataSheets} type={"normal"}></List>
    </>
  );
};
export default DataSheets;
