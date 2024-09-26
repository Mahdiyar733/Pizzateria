/* eslint-disable react/prop-types */
// import toast from "react-hot-toast";

import { Toaster } from "react-hot-toast";

// export function toastFnc(
// 	text,
// 	width = "unset",
// 	font = "unset",
// 	color = "#F54748",
// ) {
// 	toast.success(text, {
// 		style:
// 	});
// }

// {
// 	backgroundColor: "white",
// 	border: `1px solid ${color}`,
// 	color: color,
// 	width: width,
// 	fontSize: font,
// 	marginLeft: "2px",
// 	marginBottom: "2px",
// 	boxShadow: "none",
// },

function ToasterCustome({ position = "bottom-left" }) {
	return (
		<Toaster
			position={position}
			reverseOrder={true}
			toastOptions={{
				className:
					"bg-white border-solid border-RED border ml-1 mb-1 shadow-none text-sm w-auto max-w-max sm:text-lg",
			}}
		/>
	);
}

export default ToasterCustome;
