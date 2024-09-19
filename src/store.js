import { configureStore } from "@reduxjs/toolkit";
import userReducr from "./features/user/userSlice";
import cartReducer from "./features/cart/cartSlice";
import modalBoxReducer from "./features/utils/ModalBoxSlice";

const store = configureStore({
	reducer: {
		user: userReducr,
		cart: cartReducer,
		modalBox: modalBoxReducer,
	},
});

export default store;
