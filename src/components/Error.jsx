import { styled } from "styled-components";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <Wrapper>
      <div className='error'>
        <h1>404 Error</h1>
        <div className='underline'></div>
      </div>
      <Link className='home' to='/'>
        back home
        <div className='underline'></div>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  width: 100%;
  height: calc(100vh - 3rem - 4.2rem);
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .error {
    text-align: center;
  }
  h1 {
    font-size: 5rem;
  }
  .underline {
    width: 90vw;
    height: 0.2rem;
    background: black;
    margin-left: auto;
    margin-right: auto;
  }
  .home {
    margin-top: 2rem;
    text-transform: capitalize;
    font-size: 0.875rem;
    background: #002d72;
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;
    border-color: transparent;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    color: yellow;
  }
  a .underline {
    width: 100%;
    height: 0.1rem;
    background: yellow;
    margin-left: auto;
    margin-right: auto;
  }
  @media (min-width: 726px) {
    height: calc(100vh - 6rem - 10rem);
    .underline {
      width: 60vw;
    }
  }
  @media (min-width: 950px) {
    height: calc(100vh - 6rem - 10rem);
    .underline {
      width: 40vw;
    }
  }
`;
export default Error;
