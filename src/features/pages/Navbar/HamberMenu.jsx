import { useContext, useState } from "react";
import CustomeNavLink from "../../common/CustomeNavLink";
import { NavbarContext, PizzaLogo } from "./Navbar";
import LoginBtn from "../../common/LoginBtn";
import SearchBtn from "../../common/SearchBtn";
import SearchSvg from "../../../icons/SeachSvg";
import SearchBar from "../../common/SearchBar";

/* eslint-disable react/prop-types */
function ItemList({ children, to }) {
	const { handleCloseMenu } = useContext(NavbarContext);

	return (
		<li
			className="w-full  bg-white bg-opacity-85 rounded-lg cursor-pointer"
			onClick={handleCloseMenu}>
			<CustomeNavLink
				to={to}
				classes="w-full h-full block py-2  px-3">
				{children}
			</CustomeNavLink>
		</li>
	);
}

function HamberMenu() {
	const { handleCloseMenu } = useContext(NavbarContext);
	const [searchIsOpen, setSearchIsOpen] = useState(false);

	function handleInput() {
		setSearchIsOpen((is) => !is);
	}

	return (
		<div
			className="fixed w-dvw h-dvh top-0 bottom-0 right-0 left-0 backdrop-blur-[1px] cursor-pointer overflow-hidden z-40 "
			onClick={handleCloseMenu}>
			<ul
				className="flex flex-col items-center gap-2 text-black fixed h-dvh top-0 bottom-0 right-0 w-2/3 sm:w-1/2 bg-black bg-opacity-90 backdrop-blur-sm z-20 p-4 sm:p-6 animate-slide-in-right cursor-auto min-w-[293px]"
				onClick={(e) => {
					e.stopPropagation();
					e.preventDefault();
				}}>
				<PizzaLogo classes={"text-white my-3"} />
				<div className="flex flex-row items-center justify-center w-full gap-2 sm:gap-4 mb-3">
					<LoginBtn classes="btn-sm rounded-lg" />
					<SearchBtn
						classes="btn rounded-lg bg-white border-none flex flex-row flex-nowrap items-center btn-sm text-black"
						handler={handleInput}>
						<SearchSvg size="1.5em" />
						<span>Search</span>
					</SearchBtn>
				</div>
				{searchIsOpen && (
					<SearchBar
						formClasses="mb-3 flex-row gap-1"
						inputClasses="input-sm bg-white"
						btnClasses="btn-sm px-6 bg-RED rounded-md"
					/>
				)}
				<ItemList to="/">Why Pizzateria?</ItemList>
				<ItemList to="/reservation">Reservation</ItemList>
				<ItemList to="/menu">Menu</ItemList>
				<ItemList to="/cart">Cart</ItemList>
			</ul>
		</div>
	);
}

export default HamberMenu;
