import { styled } from "styled-components";

const Header = ({ title }) => {
  return (
    <Wrapper>
      <div className='header'>
        <h4>{title}</h4>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .header {
    text-align: center;
    color: blueviolet;
    margin-top: 1.5rem;
  }
  .header .underline {
    width: 8rem;
    height: 0.2rem;
    background: #49a6e9;
    background: black;
    margin-left: auto;
    margin-right: auto;
  }
`;

export default Header;
