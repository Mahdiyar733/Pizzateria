import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	cart: [],
};

const cartReducer = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addItem(state, action) {
			state.cart.push(action.payload);
		},
		deleteItem(state, action) {
			state.cart = state.cart.filter((item) => item.id !== action.payload);
		},
		increase(state, action) {
			const item = state.cart.find((item) => item.id == action.payload);
			item.quantity++;
			item.totalPrice = item.quantity * item.unitPrice;
		},
		decrease(state, action) {
			const item = state.cart.find((item) => item.id == action.payload);
			item.quantity--;
			item.totalPrice = item.quantity * item.unitPrice;
			if (item.quantity === 0)
				cartReducer.caseReducers.deleteItem(state, action);
		},
		clearList(state) {
			state.cart = [];
		},
	},
});

export const { addItem, deleteItem, increase, decrease, clearList } =
	cartReducer.actions;

export default cartReducer.reducer;

export const getCart = (state) => state.cart.cart;

export const getCartQuantity = (state) =>
	state.cart.cart.reduce((prev, curr) => {
		return prev + curr.quantity;
	}, 0);

export const getTotalPrice = (state) =>
	state.cart.cart.reduce((prev, curr) => {
		return prev + curr.unitPrice * curr.quantity;
	}, 0);
