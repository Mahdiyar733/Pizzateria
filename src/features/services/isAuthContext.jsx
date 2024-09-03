/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const AuthContext = createContext();

function IsAuthContext({ children }) {
	const [isLogined, setIsLogined] = useState(false);
	const [name, setName] = useState();
	return (
		<AuthContext.Provider value={{ isLogined, setIsLogined, name, setName }}>
			{children}
		</AuthContext.Provider>
	);
}

export default IsAuthContext;
