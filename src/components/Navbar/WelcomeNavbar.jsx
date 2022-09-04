import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import menuImage from "../../utilities/images/Menu.png";
import NavbarInner from "./NavbarInner";
import useWindowWidthSize from "../../hooks/useWindowWidthSize";
import NavbarInnerMobile from "./NavbarInnerMobile";
import {
  NavbarHeader,
  NavbarTitle,
  TitleInner,
  MenuButton,
} from "../../StyledComponents/Navbar/NavbarWelcome";

const WelcomeNavbar = () => {
  const [show, setShow] = useState("flex");
  const [showMobile, setShowMobile] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  const navigate = useNavigate();

  const width = useWindowWidthSize();

  const handleClick = () => {
    setShowMobile((prev) => !prev);
  };

  //show the navbar only on top page
  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 1 ? setShow("none") : setShow("flex");
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  });

  //check if the user is logged
  useEffect(() => {
    localStorage.getItem("token")
      ? setUserLoggedIn(true)
      : setUserLoggedIn(false);
  }, [navigate]);

  const navigateToAbout = () => {
    if (showMobile) setShowMobile(false);
    navigate("/about");
  };
  const navigateToHome = () => {
    if (showMobile) setShowMobile(false);
    userLoggedIn ? navigate("/home") : navigate("/");
  };
  const navigateToRegister = () => {
    if (showMobile) setShowMobile(false);
    navigate("/register");
  };
  const navigateToLogin = () => {
    if (showMobile) setShowMobile(false);
    navigate("/login");
  };
  const navigateToLogout = () => {
    if (showMobile) setShowMobile(false);
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <NavbarHeader show={show}>
      <NavbarTitle>
        <TitleInner onClick={navigateToHome}>PERFECT MEAL</TitleInner>
      </NavbarTitle>
      {width > 600 ? (
        <NavbarInner
          navigateToAbout={navigateToAbout}
          navigateToLogout={navigateToLogout}
          navigateToRegister={navigateToRegister}
          navigateToLogin={navigateToLogin}
          userLoggedIn={userLoggedIn}
        />
      ) : (
        <>
          <MenuButton alt="menu button" src={menuImage} onClick={handleClick} />
          <NavbarInnerMobile
            showMobile={showMobile}
            navigateToAbout={navigateToAbout}
            navigateToLogout={navigateToLogout}
            navigateToRegister={navigateToRegister}
            navigateToLogin={navigateToLogin}
            userLoggedIn={userLoggedIn}
          />
        </>
      )}
    </NavbarHeader>
  );
};

export default WelcomeNavbar;
