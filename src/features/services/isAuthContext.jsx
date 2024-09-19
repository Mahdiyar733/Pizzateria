/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const AuthContext = createContext();

function IsAuthContext({ children }) {
	const [isLogined, setIsLogined] = useState(false);

	return (
		<AuthContext.Provider value={{ isLogined, setIsLogined }}>
			{children}
		</AuthContext.Provider>
	);
}

export default IsAuthContext;
