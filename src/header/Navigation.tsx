import React, { MouseEvent, ReactNode, useEffect, useState, useRef, MouseEventHandler } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

const StyledNav = styled.nav`
  width: 100%;
  height: 50px;
  background: rgba(0, 0, 0, 0.8);
  position: sticky;
  top: 0;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const StyledheaderLogo = styled.h1`
  position: absolute;
  top: 16px;
  left: 8%;
  font-family: 'james';
  color: white;
`;

const StyledNavUl = styled.ul`
  margin-right: 10px;
  float: right;
`;

const StyledLi = styled.li`
  display: inline-block;
  line-height: 45px;
  margin: 0 15px;
  a {
    position: relative;
    text-transform: uppercase;
    font-weight: bold;
    color: ${(props) => props.color};
  }

  a:before {
    position: absolute;
    content: '';
    left: 0;
    bottom: 0;
    height: 3px;
    width: 100%;
    background: ${(props) => props.color};
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.4s linear;
  }
  a:hover:before {
    transform: scaleX(1);
    transform-origin: left;
  }
`;

StyledLi.displayName = 'li';

type NavigationProps = {
  defaultTab: string;
  menus: { key: string; to: string; name: string }[];
};

const Navigation = function Navigation({ defaultTab, menus }: NavigationProps) {
  const [selectedTab, setSelectedTab] = useState(defaultTab);
  const ref = useRef(null);

  const changeTab = (which: string) => {
    setSelectedTab(which);
  };

  return (
    <StyledNav>
      <StyledheaderLogo>JAMES</StyledheaderLogo>
      <StyledNavUl>
        {menus.map((menu) => (
          <StyledLi key={menu.key} color={menu.key === selectedTab ? 'red' : 'white'}>
            <Link
              to={menu.to}
              smooth
              offset={-50}
              onClick={() => {
                changeTab(menu.key);
              }}
              ref={ref}
            >
              {menu.name}
            </Link>
          </StyledLi>
        ))}
      </StyledNavUl>
    </StyledNav>
  );
};

export default Navigation;
