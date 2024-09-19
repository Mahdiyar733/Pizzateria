/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import LoginSvg from "../../svg/LoginSvg";
import { useContext } from "react";
import { NavbarContext } from "../ui//Navbar/Navbar";
import PersonSvg from "../../svg/PersonSvg";
import { useSelector } from "react-redux";

function LoginBtn({ classes }) {
	const { handleCloseMenu } = useContext(NavbarContext);
	const name = useSelector((state) => state.user.username);
	const isLogined = name.trim() !== "";

	return (
		<Link
			to={`/createUser`}
			onClick={handleCloseMenu}>
			<button
				className={`${classes} btn btn-xs rounded-full bg-RED border-none flex flex-row flex-nowrap items-center md:btn-sm text-white`}>
				{!isLogined ? <LoginSvg /> : <PersonSvg />}
				<span className="capitalize">{isLogined ? `${name}` : "Login"}</span>
			</button>
		</Link>
	);
}

export default LoginBtn;
