import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import CartItem, { CartItemModalBox } from "./CartItem";
import { createContext, useEffect, useState } from "react";
import {
	clearList,
	getCart,
	getCartQuantity,
	getTotalPrice,
} from "./cartSlice";
import EmptyCart from "./EmptyCart";
import { formatCurrency, ScrollUp } from "../utils/helpers";

export const CartItemContext = createContext();

function Cart() {
	const [isOpenDetails, setIsOpenDetails] = useState(false);
	const [currItem, setCurrItem] = useState("");
	const username = useSelector((state) => state.user.username);
	const cart = useSelector(getCart);
	const cartQuantity = useSelector(getCartQuantity);
	const totalPrice = useSelector(getTotalPrice);
	const dis = useDispatch();

	function handleClear() {
		dis(clearList());
		ScrollUp();
	}

	useEffect(() => {
		ScrollUp();
	}, [cart]);

	return (
		<div className="h-[90vh] px-4 py-10 sm:p-20  flex justify-center relative overflow-x-hidden">
			<div className="max-w-[389px] sm:max-w-[665px] w-full">
				<Link to="/menu">
					<button className="bg-RED px-3 py-1 rounded-lg text-white mb-4 sm:mb-5 sm:py-2 hover:bg-PINK transition-colors duration-300 animate-fade-right animate-duration-500">
						&larr; Back to menu
					</button>
				</Link>
				{cart.length > 0 ? (
					<>
						<h2 className="text-black font-semibold text-2xl mb-7 sm:text-3xl animate-fade-up animate-duration-500">
							Your cart, <span className="text-RED capitalize">{username}</span>
							.
						</h2>
						<CartItemContext.Provider
							value={{
								isOpenDetails,
								setIsOpenDetails,
								setCurrItem,
								currItem,
							}}>
							<div className="flex flex-col items-center gap-3 mb-7 max-h-96 overflow-scroll pr-4">
								{cart.map((item) => {
									return (
										<CartItem
											key={item.id}
											item={item}
										/>
									);
								})}
							</div>
							<CartItemModalBox item={currItem} />
						</CartItemContext.Provider>
						<div className="mb-1 w-full flex flex-row items-center justify-center tracking-normal text-black text-lg font-medium gap-3">
							<h2 className="animate-fade-up animate-duration-500">
								Total Price :{" "}
							</h2>
							<span className=" tracking-wide text-base  text-RED rounded-md px-2 py-1 animate-fade-down animate-duration-500">
								{formatCurrency(totalPrice)}
							</span>
						</div>
						<div className="mb-7 w-full flex flex-row items-center justify-center tracking-normal text-black text-lg font-medium gap-3">
							<h2 className="animate-fade-up animate-duration-500">
								Number of pizzas:{" "}
							</h2>
							<span className=" tracking-wide text-base text-RED rounded-md px-2 py-1 animate-fade-down animate-duration-500">
								{cartQuantity}
							</span>
						</div>
						<div className="w-full flex flex-row items-center gap-3 px-4 sm:px-16">
							<Link
								to="/order/new"
								className="bg-RED hover:bg-PINK hover:border-PINK transition-all duration-300 px-4 py-2 rounded-lg text-white flex-1 flex items-center justify-center border border-solid border-RED text-nowrap hover:flex-[2] md:py-3 md:text-lg animate-fade-right animate-duration-500">
								Order pizzas
							</Link>
							<button
								className="bg-transparent transition-all duration-300 hover:bg-RED hover:text-white hover:flex-[2] md:py-3 md:text-lg border border-solid border-RED text-nowrap px-4 py-2 rounded-lg text-RED flex-1 flex items-center justify-center animate-fade-left animate-duration-500"
								onClick={handleClear}>
								Clear cart
							</button>
						</div>
					</>
				) : (
					<EmptyCart />
				)}
			</div>
		</div>
	);
}

export default Cart;
