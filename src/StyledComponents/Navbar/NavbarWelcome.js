import styled from "styled-components";

const NavbarHeader = styled.header`
  z-index: 100;
  position: fixed;
  top: 0;
  display: ${(props) => props.show};
  justify-content: space-between;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.15);
  width: 100%;
`;

const NavbarTitle = styled.h2`
  margin-left: 2rem;
  font-size: 2rem;
  color: var(--orange);
  cursor: pointer;
`;
const TitleInner = styled.a`
  text-decoration: none;
`;

const NavbarNav = styled.nav`
  margin-right: 2rem;
`;

const NavbarNavMobile = styled.nav`
  display: ${(props) => (props.showMobile ? "block" : "none")};
  position: absolute;
  right: 0;
  height: fit-content;
  z-index: 10000;
  background-color: rgba(0, 0, 0, 0.55);
  top: 90px;
  @media (max-width: 337px) {
    top: 127px;
  }
`;

const NavItemList = styled.ul`
  display: flex;
  flex-direction: ${(props) => props.direction};
  justify-content: center;
  align-items: center;
  list-style: none;
  margin: 1rem;
  padding: 1rem;
  gap: 1rem;
  color: var(--light-orange);
`;

const ListItem = styled.li`
  padding: 0.5rem;
  &:hover {
    transform: scale(1.2);
    transition: color 0.35s ease-in-out;
  }
`;

const NavItem = styled.a`
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: var(--orange);
    transition: color 0.35s ease-in-out;
  }
`;

const ItemInner = styled.span`
  padding: 0.25rem;
`;

const MenuButton = styled.img`
  display: none;
  @media (max-width: 600px) {
    display: flex;
    width: 40px;
    aspect-ratio: 1/1;
    cursor: pointer;
  }
`;
const MenuContainer = styled.div`
  background-color: var(--dark-blue);
  width: 50vw;
  position: absolute;
  right: 0;
  top: 90px;
  height: fit-content;
  @media (max-width: 337px) {
    top: 127px;
  }
`;

export {
  NavbarHeader,
  NavbarTitle,
  NavbarNav,
  NavItemList,
  ListItem,
  NavItem,
  ItemInner,
  TitleInner,
  MenuButton,
  MenuContainer,
  NavbarNavMobile,
};
