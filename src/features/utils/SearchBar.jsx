/* eslint-disable react/prop-types */
import { useContext, useEffect, useRef, useState } from "react";
import { NavbarContext } from "../ui/Navbar//Navbar";
import { useNavigate } from "react-router-dom";
function SearchBar({ formClasses, btnClasses, inputClasses }) {
	const [inputVal, setInputVal] = useState("");
	const [aniInput, setAniInput] = useState("");
	const [isAnimating, setIsAnimating] = useState(false);
	const [inputType, setInputType] = useState("");
	const { handleCloseMenu, handleCloseModalBox } = useContext(NavbarContext);
	const navigate = useNavigate();
	const inputRef = useRef();

	function handleSubmit(e) {
		e.preventDefault();

		if (!inputVal.trim()) {
			setIsAnimating(true);
			setInputType("border-RED");
			setAniInput("animate-fade");
			setTimeout(() => {
				setAniInput("");
				setIsAnimating(false);
			}, 800);
			return;
		}

		navigate(`/order/${inputVal}`);
		setInputVal("");
		setInputType("border-PINK");
		handleCloseMenu();
		handleCloseModalBox();
	}

	useEffect(() => {
		setTimeout(() => {
			inputRef.current.focus();
		}, 620);
	}, []);

	return (
		<form
			className={`flex items-center ${formClasses} w-full animate-fade-up animate-duration-300`}>
			<input
				ref={inputRef}
				spellCheck="false"
				type="text"
				onBlur={() => setInputType("border-PINK")}
				onKeyUp={() => {
					if (!inputVal.trim()) {
						setInputType("border-RED");
					} else {
						setInputType("border-PINK");
					}
				}}
				onChange={(e) => {
					setInputVal(e.target.value);
				}}
				value={inputVal}
				className={`${inputType} ${inputClasses} font-semibold text-black  w-full rounded-lg ${aniInput} animate-duration-500 border border-solid border-PINK focus:outline-none`}
				placeholder="Search Order # For example: 2938"
			/>
			<div className="flex flex-row items-center justify-center gap-4">
				<button
					onClick={(e) => handleSubmit(e)}
					type="submit"
					disabled={isAnimating}
					className={`${btnClasses} btn rounded-lg text-white`}>
					Go
				</button>
				<button
					className="btn btn-md md:block hidden btn-outline btn-error"
					onClick={(e) => {
						e.preventDefault();
						handleCloseModalBox();
					}}>
					Close
				</button>
			</div>
		</form>
	);
}

export default SearchBar;
