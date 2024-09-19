import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
	const [theme, setTheme] = useState("light");

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	);
}

function MyComponent() {
	const { theme, setTheme } = useContext(ThemeContext);

	return (
		<div>
			Current theme: {theme}
			<button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
				Toggle Theme
			</button>
		</div>
	);
}

function App() {
	return (
		<ThemeProvider>
			<MyComponent />
		</ThemeProvider>
	);
}
