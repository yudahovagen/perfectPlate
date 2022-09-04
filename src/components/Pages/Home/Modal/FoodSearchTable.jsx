import React, { useState, useEffect } from "react";
import Food from "../Food/Food";
import {
  SearchTable,
  SearchTableBody,
  SearchTableContainer,
} from "../../../../StyledComponents/Main/SearchTable";
import FoodDescription from "../Food/FoodItem/FoodDescription";

const FoodSearchTable = ({
  foodList,
  setTmpFood,
  isOpen,
  setIsOpen,
  setFoodListByName,
  
}) => {
  const [showTable, setShowTable] = useState(false);

  useEffect(() => {
    foodList.length > 0 ? setShowTable(true) : setShowTable(false);
  }, [foodList]);

  return (
    <>
      <SearchTableContainer showTable={showTable}>
        <SearchTable>
          <SearchTableBody>
            {foodList.map((food) => (
              <Food food={food} key={food.fdcId} />
            ))}
          </SearchTableBody>
        </SearchTable>
      </SearchTableContainer>
      <FoodDescription
        setTmpFood={setTmpFood}
        setFoodListByName={setFoodListByName}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        
      />
    </>
  );
};

export default FoodSearchTable;
