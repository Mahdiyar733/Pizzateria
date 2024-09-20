import toast from "react-hot-toast";

export function toastFnc(text, color = "#F54748") {
	toast.success(text, {
		style: {
			backgroundColor: "white",
			border: `1px solid ${color}`,
			color: color,
			marginLeft: "2px",
			marginBottom: "2px",
			boxShadow: "none",
		},
	});
}
