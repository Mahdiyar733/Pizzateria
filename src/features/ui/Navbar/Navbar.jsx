/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import Logo from "./LogoPizza.png";
import SearchBtn from "../../utils/SearchBtn";
import LoginBtn from "../../utils/LoginBtn";
import MenuSvg from "../../../svg/MenuSvg";
import { createContext, useContext, useState } from "react";
import HamberMenu from "./HamberMenu";
import SearchSvg from "../../../svg/SeachSvg";
import { Link } from "react-router-dom";
import SearchBar from "../../utils/SearchBar";
import CustomeNavLink from "../../utils/CustomeNavLink";

const NavbarContext = createContext();

function Navbar() {
	const [isOpenMenu, setIsOpenMenu] = useState(false);
	const [isOpenModalbox, setIsOpenModalBox] = useState(false);

	function handleOpenMenu() {
		setIsOpenMenu(true);
	}
	function handleCloseMenu() {
		setIsOpenMenu(false);
	}

	function handleOpenModalBox() {
		setIsOpenModalBox(true);
	}

	function handleCloseModalBox() {
		setIsOpenModalBox(false);
	}

	return (
		<NavbarContext.Provider
			value={{
				isOpenMenu,
				handleCloseMenu,
				handleOpenMenu,
				isOpenModalbox,
				handleCloseModalBox,
				handleOpenModalBox,
			}}>
			{isOpenModalbox && <ModalBox />}
			<div className="h-20 bg-white flex flex-row items-center justify-between px-6 md:px-10 lg:px-16 text-black">
				<PizzaLogo />
				{isOpenMenu && <HamberMenu />}
				{!isOpenMenu && (
					<button
						className="btn btn-ghost no-animation btn-square flex md:hidden animate-fade-left animate-duration-200"
						onClick={handleOpenMenu}>
						<MenuSvg />
					</button>
				)}
				<ul className="md:flex flex-row items-center text-xs font-semibold md:gap-5 lg:gap-12 lg:text-sm hidden">
					<CustomeNavLink
						haveDropdown={true}
						href1="OurOffering"
						href2="OurSelection"
						href3="Customer"
						item1="Our Offerings"
						item2="Our Selection"
						item3="Feedbacks"
						to="/">
						Why Pizzateria?
					</CustomeNavLink>
					<CustomeNavLink to="/reservation">Reservation</CustomeNavLink>
					<CustomeNavLink to="/menu">Menu</CustomeNavLink>
					<CustomeNavLink to="/cart">Cart</CustomeNavLink>
					<SearchBtn
						classes="btn-square"
						handler={handleOpenModalBox}>
						<SearchSvg />
					</SearchBtn>
					<LoginBtn />
				</ul>
			</div>
		</NavbarContext.Provider>
	);
}

function PizzaLogo({ classes }) {
	const { handleCloseMenu } = useContext(NavbarContext);

	return (
		<Link
			to="/"
			onClick={handleCloseMenu}>
			<div className={`${classes} flex flex-row items-center gap-2`}>
				<img
					src={Logo}
					className="w-12 object-cover"
					alt="logo"
				/>
				<h1 className="font-bold text-2xl tracking-tight">Pizzateria</h1>
			</div>
		</Link>
	);
}

function ModalBox() {
	const { handleCloseModalBox } = useContext(NavbarContext);

	return (
		<div
			style={{ zIndex: 199 }}
			className="fixed w-dvw h-dvh top-0 right-0 bottom-0 left-0 backdrop-blur-[1px] backdrop-brightness-75 flex justify-center items-center cursor-pointer"
			onClick={handleCloseModalBox}>
			<motion.div
				initial={{ x: 300, opacity: 0 }}
				animate={{ x: 0, opacity: 1 }}
				className="bg-white bg-center bg-cover rounded-md py-5 px-7 flex flex-col items-center justify-center gap-6 cursor-auto"
				onClick={(e) => e.stopPropagation()}>
				<h3 className={`text-black tracking-tight font-extrabold text-3xl `}>
					Search your order with{" "}
					<span className="bg-clip-text font-black bg-[url('/pizza.jpeg')] bg-cover bg-center text-opacity-15 tracking-tigh text-black">
						your order number
					</span>
				</h3>
				<div className="flex flex-row justify-center gap-3 items-center w-full">
					<SearchBar
						inputClasses="input-md bg-PINK bg-opacity-40 text-lg"
						formClasses="flex-col gap-3"
						btnClasses="px-7 btn-md btn-success hover:brightness-125 hover:px-[14.5rem] transition-all duration-300"
					/>
				</div>
			</motion.div>
		</div>
	);
}

export default Navbar;
export { PizzaLogo, NavbarContext };
