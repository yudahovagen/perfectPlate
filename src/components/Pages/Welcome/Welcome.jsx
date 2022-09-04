import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import WelcomeMain from "../../Main/WelcomeMain";

const Welcome = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    //case for no token at all
    if (token) navigate("/home");
    //we do have token but need to check if the user exist
  }, [navigate]);

  return <WelcomeMain />;
};

export default Welcome;
