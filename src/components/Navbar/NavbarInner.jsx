import React from "react";
import {
  NavbarNav,
  NavItemList,
  ListItem,
  NavItem,
  ItemInner,
} from "../../StyledComponents/Navbar/NavbarWelcome";

const NavbarInner = ({
  navigateToAbout,
  navigateToLogout,
  navigateToRegister,
  navigateToLogin,
  userLoggedIn,
}) => {
  return (
    <NavbarNav>
      <NavItemList direction={"row"}>
        <ListItem>
          <NavItem onClick={navigateToAbout}>
            <ItemInner>ABOUT</ItemInner>
          </NavItem>
        </ListItem>
        {userLoggedIn ? (
          <ListItem>
            <NavItem onClick={navigateToLogout}>
              <ItemInner>LOGOUT</ItemInner>
            </NavItem>
          </ListItem>
        ) : (
          <>
            <ListItem>
              <NavItem onClick={navigateToRegister}>
                <ItemInner>REGISTER</ItemInner>
              </NavItem>
            </ListItem>
            <ListItem>
              <NavItem onClick={navigateToLogin}>
                <ItemInner>LOGIN</ItemInner>
              </NavItem>
            </ListItem>
          </>
        )}
      </NavItemList>
    </NavbarNav>
  );
};

export default NavbarInner;
