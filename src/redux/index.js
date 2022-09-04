import { configureStore, createSlice } from "@reduxjs/toolkit";

const foodSlice = createSlice({
  name: "food",
  initialState: { food: {} },
  reducers: {
    updateFoodItem(state, action) {
      state.food = action.payload;
    },
  },
});

const plateSlice = createSlice({
  name: "plate",
  initialState: { plate: [] },
  reducers: {
    addFoodToPlate(state, action) {
      state.plate = [...state.plate, action.payload];
    },
    removeFoodFromPlate(state, action) {
      state.plate = state.plate.filter((food) => food.fdcId !== action.payload);
    },
    resetPlate(state) {
      state.plate = [];
    },
  },
});

export const actions = foodSlice.actions;
export const plateactions = plateSlice.actions;

export const store = configureStore({
  reducer: { food: foodSlice.reducer, plate: plateSlice.reducer },
});
