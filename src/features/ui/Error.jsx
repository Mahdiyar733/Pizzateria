import { useNavigate, useRouteError } from "react-router-dom";

function NotFound() {
	const navigate = useNavigate();
	const err = useRouteError();
	console.log(err.message);
	console.log(err.data);

	return (
		<div className="h-dvh w-full flex flex-col justify-center items-center gap-7 bg-gradient-to-r from-white to-PINK text-black">
			<h1 className="font-semibold text-2xl">Something went wrong 😢</h1>
			<p className="text-lg font-normal text-wrap">
				{" "}
				- {err.data || err.message}
			</p>
			<button
				className="bg-RED px-5 font-normal py-2 text-white flex justify-center items-start rounded-lg sm:hover:bg-PINK transition-colors duration-300"
				onClick={() => navigate("/")}>
				&larr; Go back
			</button>
		</div>
	);
}

export default NotFound;
