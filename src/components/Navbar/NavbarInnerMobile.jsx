import React from "react";
import {
  NavItemList,
  ListItem,
  NavItem,
  ItemInner,
  NavbarNavMobile,
} from "../../StyledComponents/Navbar/NavbarWelcome";

const NavbarInnerMobile = ({
  navigateToAbout,
  navigateToLogout,
  navigateToRegister,
  navigateToLogin,
  userLoggedIn,
  showMobile,
}) => {
  return (
    <NavbarNavMobile showMobile={showMobile}>
      <NavItemList direction={"column"}>
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
    </NavbarNavMobile>
  );
};

export default NavbarInnerMobile;
