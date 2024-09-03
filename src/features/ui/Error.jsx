import { useNavigate, useRouteError } from "react-router-dom";

function NotFound() {
	const navigate = useNavigate();
	const err = useRouteError();
	console.log(err.message);
	console.log(err.data);

	return (
		<div className="h-dvh w-full flex flex-col justify-center items-center gap-4">
			<h1>Something went wrong 😢</h1>
			<p>{err.data || err.message}</p>
			<button
				className="btn btn-error rounded-lg"
				onClick={() => navigate(-1)}>
				&larr; Go back
			</button>
		</div>
	);
}

export default NotFound;
