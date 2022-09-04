import React from "react";
import FoodSearchTable from "./FoodSearchTable";
import {
  FoodSearchForm,
  FoodSearchInput,
  SearchButton,
  LoadingImageContainer,
} from "../../../../StyledComponents/Main/Main";
import loadingImage from "../../../../utilities/images/load-icon-png.png";

const AddFoodModal = ({
  tmpFood,
  getFoodList,
  setTmpFood,
  foodListByName,
  setIsOpen,
  setFoodListByName,
  isOpen,
  isLoading,
}) => {
  return (
    <>
      <FoodSearchForm>
        <FoodSearchInput
          type="text"
          value={tmpFood}
          placeholder="Search Food"
          onChange={(e) => setTmpFood(e.target.value)}
        />
        <SearchButton onClick={getFoodList}>Search</SearchButton>
      </FoodSearchForm>
      {isLoading ? (
        <LoadingImageContainer alt="loading" src={loadingImage} />
      ) : (
        <FoodSearchTable
          foodList={foodListByName}
          setTmpFood={setTmpFood}
          setFoodListByName={setFoodListByName}
          setIsOpen={setIsOpen}
          isOpen={isOpen}
        />
      )}
    </>
  );
};

export default AddFoodModal;
