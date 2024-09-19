import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import CartItem from "./CartItem";
import { createContext, useState } from "react";
import { clearList } from "./cartSlice";
import EmptyCart from "./EmptyCart";

// const fakeCart = [
// 	{
// 		pizzaId: 12,
// 		name: "Mediterranean",
// 		quantity: 2,
// 		unitPrice: 16,
// 		totalPrice: 32,
// 	},
// 	{
// 		pizzaId: 6,
// 		name: "Vegetale",
// 		quantity: 1,
// 		unitPrice: 13,
// 		totalPrice: 13,
// 	},
// 	{
// 		pizzaId: 11,
// 		name: "Spinach and Mushroom",
// 		quantity: 1,
// 		unitPrice: 15,
// 		totalPrice: 15,
// 	},
// ];

export const CartItemContext = createContext();

function Cart() {
	const [isOpenDetails, setIsOpenDetails] = useState(false);
	const [currItem, setCurrItem] = useState("");
	const dis = useDispatch();
	const username = useSelector((state) => state.user.username);
	const cart = useSelector((state) => state.cart.cart);
	console.log(cart.length);

	function handleClear() {
		dis(clearList());
	}

	return (
		<div className="h-[90vh] px-4 py-10 sm:p-20 w-dvw flex justify-center">
			<div className="max-w-[389px] sm:max-w-[665px] w-full">
				<Link to="/menu">
					<button className="bg-RED px-3 py-1 rounded-lg text-white mb-4 sm:mb-5 sm:py-2 hover:bg-PINK transition-colors duration-300">
						&larr; Back to menu
					</button>
				</Link>
				{cart.length > 0 ? (
					<>
						<h2 className="text-black font-semibold text-2xl mb-7 sm:text-3xl">
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
							<div className="flex flex-col items-center gap-3 mb-7">
								{cart.map((item) => {
									return (
										<CartItem
											key={item.pizzaId}
											item={item}
										/>
									);
								})}
							</div>
						</CartItemContext.Provider>
						<div className="w-full flex flex-row items-center gap-3 px-4 sm:px-16">
							<Link
								to="/order/new"
								className="bg-RED hover:bg-PINK hover:border-PINK transition-all duration-300 px-4 py-2 rounded-lg text-white flex-1 flex items-center justify-center border border-solid border-RED text-nowrap hover:flex-[2] md:py-3 md:text-lg">
								Order pizzas
							</Link>
							<button
								className="bg-transparent transition-all duration-300 hover:bg-RED hover:text-white hover:flex-[2] md:py-3 md:text-lg border border-solid border-RED text-nowrap px-4 py-2 rounded-lg text-RED flex-1 flex items-center justify-center"
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
