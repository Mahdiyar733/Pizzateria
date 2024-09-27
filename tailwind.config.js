/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

	theme: {
		extend: {
			height: {
				FullHeight: "90.3730445247vh",
			},
			screens: {
				base: "926px",
			},
			fontFamily: {
				Poppins: "Poppins , sans-serif",
			},
			colors: {
				RED: "#F54748",
				PINK: "#FDD6D6",
			},
			boxShadow: { shdw: "4px 4px 10px rgb(0,0,0,0.25)" },
		},
		animation: {
			"slide-in-right": "slide-in-right 0.3s ease-in ",
		},
		keyframes: {
			"slide-in-right": {
				"0%": { transform: "translateX(100%)", opacity: 0.8 },
				"100%": { transform: "translateX(0)", opacity: 1 },
			},
		},
	},
	plugins: [require("daisyui"), require("tailwindcss-animated")],
};
