/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import LoginSvg from "../../svg/LoginSvg";
import { useContext } from "react";
import { NavbarContext } from "../ui//Navbar/Navbar";
import { AuthContext } from "../services/isAuthContext";
import PersonSvg from "../../svg/PersonSvg";

function LoginBtn({ classes }) {
	const { handleCloseMenu } = useContext(NavbarContext);
	const { isLogined, name } = useContext(AuthContext);

	return (
		<Link
			to={isLogined ? `order/new` : `/menu`}
			onClick={handleCloseMenu}>
			<button
				className={`${classes} btn btn-xs rounded-full bg-RED border-none flex flex-row flex-nowrap items-center md:btn-sm text-white`}>
				{!isLogined ? <LoginSvg /> : <PersonSvg />}
				<span>{isLogined ? `${name}` : "Login"}</span>
			</button>
		</Link>
	);
}

export default LoginBtn;
