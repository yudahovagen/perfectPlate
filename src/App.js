import React from "react";
import GlobalStyle from "./StyledComponents/Global/Global";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Pages/Login/Login";
import Register from "./components/Pages/Register/Register";
import Home from "./components/Pages/Home/Home";
import Welcome from "./components/Pages/Welcome/Welcome";
import Footer from "./components/Footer/Footer";
import About from "./components/Pages/About/About";
import WelcomeNavbar from "./components/Navbar/WelcomeNavbar";
import { Wrapper } from "./StyledComponents/Wrapper/Wrapper";
import { Provider } from "react-redux";
import { store } from "./redux/index";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Provider store={store}>
          <Wrapper>
            <WelcomeNavbar />
            <Routes>
              <Route path="/" element={<Welcome />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/home" element={<Home />} />
            </Routes>
            <Footer />
          </Wrapper>
        </Provider>
      </BrowserRouter>
    </>
  );
};

export default App;
