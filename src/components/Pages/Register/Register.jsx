import React, { useState } from "react";
import {
  FormContainer,
  FormHeader,
  FormInput,
  FormButton,
} from "../../../StyledComponents/Register";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [user, setUser] = useState({ name: "", email: "", password: "" });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = user;

    const response = await fetch("https://git.heroku.com/perfect-meal-plate.git/perfectMeal/register", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({ name, email, password }),
    });

    const data = await response.json();
    if (data.status === "ok") navigate("/login");
  };

  return (
    <FormContainer>
      <FormHeader>Register</FormHeader>
      <FormInput
        type="text"
        placeholder="Name"
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      />
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
      <FormButton onClick={handleSubmit}>Register</FormButton>
    </FormContainer>
  );
};

export default Register;
