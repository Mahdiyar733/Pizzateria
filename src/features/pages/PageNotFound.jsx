import { Link } from "react-router-dom";
import ErrorPizza from "./ErrorPizza.png";

function PageNotFound() {
	return (
		<div className="w-full h-[80dvh] flex flex-col items-center justify-center">
			<div className="background">
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
			</div>
			<div className=" bg-white bg-opacity-50 w-full h-full flex justify-center flex-col items-center">
				<h1 className="flex flex-row items-center gap-3 text-[7rem] sm:text-[9rem] text-RED font-bold">
					4{" "}
					<img
						className="object-cover"
						src={ErrorPizza}
						alt="pizza"
					/>{" "}
					4
				</h1>
				<h2 className="text-xl sm:text-3xl text-black font-bold">
					Whoops... Page Not Found
				</h2>
				<p className="text-center mt-3 font-normal text-xs sm:text-base">
					The page you are looking for might have been removed <br /> had its
					name changed or is temporarily unavailable
				</p>
				<Link to="/">
					<button className="bg-RED text-white font-normal py-3 px-8 rounded-full text-sm uppercase mt-8 hover:bg-PINK transition-all duration-200">
						Go to Home
					</button>
				</Link>
			</div>
		</div>
	);
}

export default PageNotFound;
