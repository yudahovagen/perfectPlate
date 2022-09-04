import React, { useEffect, useState } from "react";
import jwt from "jsonwebtoken";
import { REQUEST_URL, API_KEY } from "../../../data/api";
import { useNavigate } from "react-router-dom";
import {
  MainWrapeer,
  OpenFoodModalButton,
  ModalContainer,
} from "../../../StyledComponents/Main/Main";
import ModalInner from "./Modal/ModalInner";
import Plate from "./Plate/Plate";

const Home = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [food, setFood] = useState("");
  //hold the searched food in the
  const [tmpFood, setTmpFood] = useState("");
  //contains an array of food items from the search query
  const [foodListByName, setFoodListByName] = useState([]);

  const foodIntoDB = async () => {    
    const req = await fetch("http://localhost:3000/perfectMeal/home", {
      headers: { "X-Auth-Token": localStorage.getItem("token") },
    });

    const data = await req.json();
    console.log("data from foodIntoDB: ", data);
    if (data.status === "ok") {
      setFood(data.food);
    } else {
      console.log(data.error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    //case for no token at all
    if (!token) navigate("/login");
    //we do have token but need to check if the user exist
    const user = jwt.decode(token);
    if (!user) {
      //no user we want to remove the token and navigate back to login page
      localStorage.removeItem("token");
      navigate("/login");
    } else {
      //we have token + real user
      foodIntoDB();
    }
  }, [navigate]);

  //lets call this method after the handleClick method
  //we want to update food based on the current food item that we found
  //
  const updateFood = async (e) => {
    e.preventDefault();
    const req = await fetch("http://localhost:3000/perfectMeal/home", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "x-access-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({
        food: tmpFood,
      }),
    });

    const data = await req.json();
    if (data.status === "ok") {
      setFood(tmpFood);
      setTmpFood("");
    } else {
      console.log("some error accured");
      console.log(data.error);
    }
  };

  const getFoodList = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await fetch(
        `${REQUEST_URL}?query=${tmpFood}&api_key=${API_KEY}&pageSize=50`
      );
      const data = await response.json();
      if (data) setIsLoading(false);
      //we want to set the FoodList
      setFoodListByName(data.foods);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <MainWrapeer>
      <OpenFoodModalButton onClick={() => setIsOpen(!isOpen)}>
        ADD FOOD
      </OpenFoodModalButton>
      {isOpen && (
        <ModalContainer>
          <ModalInner
            setIsOpen={setIsOpen}
            isOpen={isOpen}
            tmpFood={tmpFood}
            setTmpFood={setTmpFood}
            getFoodList={getFoodList}
            foodListByName={foodListByName}
            setFoodListByName={setFoodListByName}
            isLoading={isLoading}
          />
        </ModalContainer>
      )}
      <Plate />
    </MainWrapeer>
  );
};

export default Home;
