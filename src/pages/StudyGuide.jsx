import { styled } from "styled-components";

import { Header, List } from "../components";
import studyGuide from "../data/studyGuide.json";
const StudyGuide = () => {
  return (
    <Wrapper>
      <Header title={"Study Guide"} className='header'></Header>
      <p className='paragraph'>
        The contents of this page will have questions related to many of the
        topics covered in the course content.
      </p>
      <p className='paragraph'>
        The study guide is not exhaustive (i.e. not all topics you are
        responsible for are covered.)
      </p>
      <p className='paragraph'>
        You cannot assume that the questions will bear any resemblance to the
        questions in this study guide. Memorizing canned answers is not a good
        idea; use the questions/answers to help identify areas you need to bone
        up on.
      </p>
      <p className='paragraph'>
        You should attempt to answer the questions before peeking at the
        answers. If you cannot understand an answer after reviewing the core
        material, ask your professor for help.
      </p>
      <p className='paragraph'>
        The questions should be considered as “closed book”—i.e. you should be
        able to answer them without reference to a text book or data sheet.
        However, some of the questions do require technical details that you are
        not expected to have memorized. (For example, what is the machine
        language translation of ldaa #3 or which bit is used to tell the A/D
        subsystem to perform continuous conversions?) For these cases, a
        Reference Material section is included. Quizzes
      </p>

      <List data={studyGuide} type={"normal"}></List>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .paragraph {
    color: black;
    width: 80%;
  }
  .header {
    margin-bottom: 1rem;
  }
`;
export default StudyGuide;
