import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateName } from "./userSlice";
import { useNavigate } from "react-router-dom";
import IsAuthContext, { AuthContext } from "../services/isAuthContext";
import { ScrollUp } from "../utils/helpers";

function CreateUser() {
	const [username, setUsername] = useState("");
	const usernameRedux = useSelector((state) => state.user.username);
	const { setIsLogined } = useContext(AuthContext);
	const dis = useDispatch();
	const nav = useNavigate();

	function handleSubmit(e) {
		e.preventDefault();
		dis(updateName(username));
		setIsLogined(true);
		nav("/menu");
	}

	function handleContinuo(e) {
		e.preventDefault();
		nav("/menu");
	}

	function handleLogout(e) {
		e.preventDefault();
		setIsLogined(false);
		dis(updateName(""));
	}

	useEffect(() => {
		ScrollUp();
	}, []);

	return (
		<IsAuthContext>
			<form className="flex flex-col items-center gap-6 h-[90dvh]">
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
				<div className="w-full h-full bg-white bg-opacity-60 flex flex-col items-center justify-start py-32 gap-5">
					{!usernameRedux ? (
						<h2 className="text-black tracking-tight text-2xl font-semibold text-center sm:text-3xl">
							<span className="text-RED">Welcome!</span> Please start by <br />{" "}
							telling us your name:
						</h2>
					) : (
						<h2 className="text-black tracking-tight text-2xl font-semibold text-center sm:text-3xl">
							<span className="font-bold">Welcome Back!</span> Please continuo{" "}
							<br />
							ordering{" "}
							<span className=" capitalize text-RED">{usernameRedux}</span>
						</h2>
					)}
					{!usernameRedux && (
						<input
							className="capitalize font-normal tracking-wide bg-white border border-gray-400 border-solid rounded-md px-5 text-black focus:outline-RED focus:outline-2 focus:outline py-2 w-3/4 hover:max-w-md transition-all duration-200 min-w-32 max-w-96"
							value={username}
							spellCheck="false"
							onChange={(e) => setUsername(e.target.value)}
							type="text"
							placeholder="Enter your name"
						/>
					)}
					{!usernameRedux.trim() ? (
						username && (
							<button
								className="btn bg-RED border-none animate-fade-down animate-duration-300 text-white"
								onClick={handleSubmit}>
								Start ordering
							</button>
						)
					) : (
						<>
							<button
								className="px-4 w-48 py-2 rounded-lg hover:bg-PINK hover:border-PINK transition-all duration-300 bg-RED animate-fade-down animate-duration-300 text-white border border-solid border-RED"
								onClick={handleContinuo}>
								Continuo ordering
							</button>
							<button
								className="px-4 -mt-3 py-2 w-48 hover:bg-RED hover:text-white transition-all duration-300 rounded-lg bg-transparent border-RED border-solid border animate-fade-up animate-duration-300 text-RED"
								onClick={handleLogout}>
								Logout
							</button>
						</>
					)}
				</div>
			</form>
		</IsAuthContext>
	);
}

export default CreateUser;
