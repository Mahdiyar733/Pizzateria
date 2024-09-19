import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	username: "",
};

const userReducer = createSlice({
	name: "user",
	initialState,
	reducers: {
		updateName(state, action) {
			state.username = action.payload;
		},
	},
});

export const { updateName } = userReducer.actions;
export default userReducer.reducer;
