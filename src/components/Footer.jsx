import { styled } from "styled-components";
import { useState, useEffect } from "react";
const Footer = () => {
  const lastUpdated = "August 23, 2023";

  return (
    <Wrapper>
      <div className='footer'>
        <div className='left'>Last Updated On {lastUpdated}</div>
        <div className='center'>
          &copy; 2023 Toronto Metropolitan University. All Rights Reserved.
        </div>
      </div>
    </Wrapper>
  );
};
export default Footer;

const Wrapper = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #002d72;
  height: 3rem;
  color: white;
  margin-top: auto;
  .footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    width: 100%;
  }
  .left {
    display: none;
  }
  @media (min-width: 726px) {
    height: 6rem;
    justify-content: space-between;
    .left {
      display: block;
    }
  }
`;
