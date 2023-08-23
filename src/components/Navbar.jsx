import { styled } from "styled-components";
import { FaBars } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import links from "../data/links.json";
import logo from "../assets/TMU-rgb.png";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState("");
  const location = useLocation();
  const navToggler = () => {
    setToggle(!toggle);
  };
  const activeLink = (link) => {
    setActive(link);
  };

  return (
    <Wrapper>
      <div className='nav-content'>
        <div className='nav-header'>
          <div className='nav-logo'>
            <img src={logo} alt='TMU' />
          </div>
          <button type='button' className='nav-toggle' onClick={navToggler}>
            <FaBars></FaBars>
          </button>
        </div>
        <ul className={toggle ? "nav-links active" : "nav-links"}>
          {links.map((item) => {
            const { id, text, url } = item;
            const isActive = url === location.pathname;
            return (
              <li
                key={id}
                className={isActive ? "active" : ""}
                onClick={() => activeLink(url)}
              >
                <Link
                  to={url}
                  onClick={() => {
                    activeLink(url);
                    navToggler();
                  }}
                >
                  {text}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #002d72;
  min-height: 4.2rem;
  .nav-content {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-between;
    padding: 0.5rem;
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
  }
  .nav-logo {
    text-decoration: none;
    font-size: 24px;
    color: white;
    width: auto;
    cursor: pointer;
  }
  .nav-logo img {
    width: 4rem;
    height: auto;
  }
  .nav-toggle {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.5rem;
    color: white;
  }
  .nav-links {
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 0;
    gap: 10px;
    color: white;
    cursor: pointer;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.2s ease-in-out;
  }
  .nav-links.active {
    max-height: 18rem;
    opacity: 1;
  }
  li {
    padding-top: 0.35rem;
    padding-bottom: 0.35rem;
  }
  .nav-links li:hover {
    background: lightblue;
    transition: color 0.2s ease-in-out;
  }
  a {
    display: block;
    color: white;
    text-transform: capitalize;
    cursor: pointer;
    width: 100%;
    font-size: 0.9rem;
  }
  @media (min-width: 726px) {
    .nav-content {
      flex-direction: row;
      width: 100%;
      justify-content: space-between;
      align-items: center;
    }
    .nav-links {
      flex-direction: row;
      justify-content: center;
      width: 100%;
      list-style: none;
      padding: 0;
      gap: 2.5rem;
      color: white;
      max-height: 10rem;
      overflow: hidden;
      transition: max-height 0.2s ease-in-out;
    }
    a {
      border-bottom: 1px solid transparent;
    }
    a:hover {
      border-bottom-color: white;
    }
    .nav-links li:hover {
      background: #002d72;
      transition: none;
    }
    li.active a {
      border-bottom-color: white;
    }
    .nav-toggle,
    .nav-logo {
      display: none;
    }
  }
`;
export default Navbar;
