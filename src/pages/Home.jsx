import { styled } from "styled-components";
import { Header } from "../components";
import outline from "../assets/CourseOutline.pdf";

const Home = () => {
  return (
    <Wrapper>
      <Header title={"Course Outline"}></Header>
      <iframe
        id='pdf-frame'
        name='pdf-frame'
        src={outline}
        width='90%'
        height='800px'
      ></iframe>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  iframe {
    margin-top: 1rem;
    margin-bottom: 2rem;
  }
`;
export default Home;
