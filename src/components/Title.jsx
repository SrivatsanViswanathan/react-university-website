import { styled } from "styled-components";

const Title = () => {
  return (
    <Wrapper>
      <div className='title'>
        <h2>COE 538: MicroProcessor Systems</h2>
      </div>
      <img
        className='responsive-image'
        src='https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
        alt='engineering building'
      />
    </Wrapper>
  );
};
export default Title;

const Wrapper = styled.section`
  flex-direction: column;
  background: #002d72;
  gap: 0.2rem;
  .title {
    text-align: center;
    color: white;
    padding: 0.75rem;
  }
  .responsive-image {
    width: 100%;
    height: 17.5rem;
  }
  display: none;
  @media (min-width: 726px) {
    display: flex;
  }
`;
