import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import DescriptionLeft from "./DescriptionLeft";
import DescriptionRight from "./DescriptionRight";
import {
  Container,
  Title,
  InnerContainer,
} from "../../../../../StyledComponents/Main/FoodInfo";

const FoodDescription = ({
  
  setTmpFood,
  setFoodListByName,
  setIsOpen,
  isOpen,
}) => {
  const foodItem = useSelector((state) => state.food.food);
  const [serving, setServing] = useState(1);
  const [showContainer, setShowContainer] = useState(false);
  const [portionMultiplier, setPortionMultiplier] = useState({
    multi: 1,
    unit: "",
  });

  useEffect(() => {
    const setMultiplier = () => {
      let multi = 1;
      let unit = "g";
      if (foodItem.foodMeasures.length === 0) {
        foodItem.servingSize
          ? (multi = 100 / foodItem.servingSize)
          : (multi = 1);
        if (foodItem.servingSizeUnit === "ml") unit = "ml";
        return { multi, unit };
      }
      let totalServingSize = foodItem.foodMeasures.reduce(
        (prev, curr) => prev + curr.gramWeight,
        0
      );
      multi = 100 / totalServingSize;
      return { multi, unit };
    };

    if (foodItem.fdcId) {
      setShowContainer(true);
      setPortionMultiplier(setMultiplier());
    } else {
      setShowContainer(false);
    }
  }, [foodItem]);

  return (
    <Container showContainer={showContainer}>
      <Title>
        {foodItem.lowercaseDescription}
        {foodItem.brandName ? ", " + foodItem.brandName.toLowerCase() : null}
      </Title>
      <InnerContainer>
        <DescriptionLeft
          portionMultiplier={portionMultiplier}
          food={foodItem}
          serving={serving}
        />
        <DescriptionRight
          serving={serving}
          setServing={setServing}
          food={foodItem}
          setTmpFood={setTmpFood}
          setFoodListByName={setFoodListByName}
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          portionMultiplier={portionMultiplier}
          
        />
      </InnerContainer>
    </Container>
  );
};

export default FoodDescription;
