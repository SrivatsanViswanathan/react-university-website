import { styled } from "styled-components";
import SingleList from "./SingleList";
import SingleLabsList from "./SingleLabsList";
import InstructorsList from "./InstructorsList";
const List = ({ data, type }) => {
  if (type === "normal") {
    return (
      <Wrapper>
        <div>
          {data.map((item, index) => {
            return <SingleList key={index} data={item}></SingleList>;
          })}
        </div>
      </Wrapper>
    );
  }
  if (type === "labs")
    return (
      <Wrapper>
        <div>
          {data.map((item, index) => {
            return <SingleLabsList key={index} data={item}></SingleLabsList>;
          })}
        </div>
      </Wrapper>
    );
  if (type === "instructors") {
    return (
      <Wrapper>
        <InstructorsList data={data}></InstructorsList>
      </Wrapper>
    );
  }
};

const Wrapper = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  width: 100%;
`;
export default List;
