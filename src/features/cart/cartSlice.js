import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	cart: [
		// {
		// 	id: 11,
		// 	name: "Spinach and Mushroom",
		// 	quantity: 1,
		// 	unitPrice: 15,
		// 	totalPrice: 15,
		// },
		// {
		// 	id: 10,
		// 	name: "Peperonii",
		// 	quantity: 2,
		// 	unitPrice: 20,
		// 	totalPrice: 20,
		// },
	],
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
			if (item.quantity > 1) {
				item.quantity--;
				item.totalPrice = item.quantity * item.unitPrice;
			}
		},
		clearList(state) {
			state.cart = [];
		},
	},
});

export const { addItem, deleteItem, increase, decrease, clearList } =
	cartReducer.actions;

export default cartReducer.reducer;
