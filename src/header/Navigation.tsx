import React, { MouseEvent, ReactNode, useEffect, useState, useRef, MouseEventHandler } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

const StyledNav = styled.nav`
  width: 100%;
  height: 50px;
  background: rgba(0, 0, 0, 0.8);
  border-top: 1px solid rgba(255, 255, 255, 0.2);
`;

const StyledNavUl = styled.ul`
  display: flex;
  margin: 0;
  padding: 0 20px;
`;

const StyledLi = styled.li`
  display: inline-block;
  color: ${(props) => props.color};
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
      <StyledNavUl>
        {menus.map((menu) => (
          <StyledLi key={menu.key} color={menu.key === selectedTab ? 'purple' : 'white'}>
            <Link
              to={menu.to}
              smooth
              offset={-20}
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
