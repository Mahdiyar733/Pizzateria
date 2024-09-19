import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	reserve: {
		isOpenReserve: false,
	},
	ingredients: {
		isOpenIngredients: false,
		item: "",
	},
};

const modalBoxReducer = createSlice({
	name: "modalBox",
	initialState,
	reducers: {
		openReserve(state) {
			state.reserve.isOpenReserve = true;
		},
		closeReserve(state) {
			state.reserve.isOpenReserve = false;
		},
		openIngredients(state, action) {
			state.ingredients.item = action.payload;
			state.ingredients.isOpenIngredients = true;
		},
		closeIngredients(state) {
			state.ingredients.isOpenIngredients = false;
		},
	},
});

export const { openIngredients, closeIngredients, openReserve, closeReserve } =
	modalBoxReducer.actions;
export default modalBoxReducer.reducer;
