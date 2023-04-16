import React, { useState } from 'react';
import styled from 'styled-components';

interface NavbarProps {
  title: string;
  navItems: { title: string; link: string }[];
  dropdownTitle: string;
  dropdownItems: { title: string; type: string }[];
  onPokemonTypeSelect: (type: string) => void;
}

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: white;
  padding: 10px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
`;

const Title = styled.h1`
  margin: 0;

  @media screen and (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const NavLink = styled.li`
  margin: 0 10px;

  @media screen and (max-width: 768px) {
    margin: 5px 0;
  }
`;

const Dropdown = styled.div`
  position: relative;
  display: inline-block;

  @media screen and (max-width: 768px) {
    display: block;
    margin: 10px 0;
  }
`;

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  z-index: 1;
  background-color: #f9f9f9;
  min-width: 160px;
  border-radius: 5px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  margin-left: -80px;
  margin-top: 20px;

  a {
    color: black;
    text-decoration: none;
    display: block;
    padding: 8px 12px;

    &:hover {
      background-color: #ddd;
    }
  }

  @media screen and (max-width: 768px) {
    position: static;
    display: block;
    margin: 0px;
  }
`;

const DropdownButton = styled.button`
  background-color: inherit;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
`;

const DropdownLinks = styled.div`
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  padding: 12px 16px;
  z-index: 1;
  position: absolute;
`;

const Navbar: React.FC<NavbarProps> = ({ title, navItems, dropdownTitle, dropdownItems, onPokemonTypeSelect }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownItemClick = (type: string) => {
    setDropdownOpen(false);
    onPokemonTypeSelect(type);
  };

  return (
    <NavbarContainer>
      <Title>{title}</Title>
      <NavLinks>
        {navItems.map(navItem => (
          <NavLink key={navItem.title}>
            <a href={navItem.link}>{navItem.title}</a>
          </NavLink>
        ))}
        {dropdownItems.length > 0 && (
          <Dropdown>
            <DropdownButton onClick={() => setDropdownOpen(!dropdownOpen)}>{dropdownTitle}</DropdownButton>
            <DropdownContent style={{ display: dropdownOpen ? 'block' : 'none' }}>
              <DropdownLinks>
                {dropdownItems.map(link => (
                  <a key={link.type} onClick={() => handleDropdownItemClick(link.type)}>
                    {link.title}
                  </a>
                ))}
              </DropdownLinks>
            </DropdownContent>
          </Dropdown>
        )}
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
