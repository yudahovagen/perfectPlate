import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FormContainer,
  FormHeader,
  FormInput,
  FormButton,
} from "../../../StyledComponents/Register";
import { useDispatch } from "react-redux";
import { plateactions } from "../../../redux/index";

const Login = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = user;

    const response = await fetch("https://git.heroku.com/perfect-meal-plate.git/perfectMeal/login", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (data.user) {
      localStorage.setItem("token", data.user);
      //before we navigate to our home page we want to make sure that the previous plate is empty:
      dispatch(plateactions.resetPlate());
      navigate("/home");
    } else {
      alert("something went wrong");
    }
  };

  return (
    <FormContainer>
      <FormHeader>Login</FormHeader>
      <FormInput
        type="email"
        placeholder="Email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />
      <FormInput
        type="password"
        placeholder="Password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <FormButton onClick={handleSubmit}>Login</FormButton>
    </FormContainer>
  );
};

export default Login;
