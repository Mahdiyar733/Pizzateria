import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	cart: [],
	orders: [],
};

const cartReducer = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addItem(state, action) {
			state.cart.push(action.payload);
		},
		deleteItem(state, action) {
			state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
		},
		increase(state, action) {
			const item = state.cart.find((item) => item.pizzaId == action.payload);
			item.quantity++;
			item.totalPrice = item.quantity * item.unitPrice;
		},
		decrease(state, action) {
			const item = state.cart.find((item) => item.pizzaId == action.payload);
			item.quantity--;
			item.totalPrice = item.quantity * item.unitPrice;
			if (item.quantity === 0)
				cartReducer.caseReducers.deleteItem(state, action);
		},
		clearList(state) {
			state.cart = [];
		},
		addOrder(state, action) {
			state.orders.push(action.payload);
		},
		updateOrderState(state, action) {
			const id = action.payload; // Assuming action.payload contains orderId
			console.log("id", id);

			const order = state.orders.find((order) => order.id === id); // Change 'id' to your actual identifier

			if (order) {
				// Update the order's Priority property
				order.priority = true;
				// You can also update other properties here if needed
			}
			console.log("neworder", order);
		},
	},
});

export const {
	addItem,
	deleteItem,
	increase,
	decrease,
	clearList,
	addOrder,
	updateOrderState,
} = cartReducer.actions;

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
