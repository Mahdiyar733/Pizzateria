/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { createContext, useContext, useEffect, useState } from "react";
import PictureLoader from "../../../common/PictureLoader";
import { useDispatch, useSelector } from "react-redux";
import { openIngredients } from "../../../common/ModalBoxSlice";
import { addItem } from "../../../cart/cartSlice";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const PizzaContext = createContext();

function Pizza({ item, viewAmount = 0 }) {
	const [isLoading, setIsLoading] = useState(true);
	const [isMobile, setIsMobile] = useState(true);
	const dis = useDispatch();

	useEffect(() => {
		if (window.innerWidth > 773) setIsMobile(false);
	}, []);

	if (!item) return;
	const { imageUrl, name, unitPrice, soldOut, id, ingredients } = item;

	return (
		<PizzaContext.Provider
			value={{
				item,
				isLoading,
				setIsLoading,
				imageUrl,
				name,
				unitPrice,
				id,
				viewAmount,
				soldOut,
				ingredients,
				dis,
			}}>
			{isMobile ? (
				<div
					className={`flex flex-col items-center justify-between border border-gray-300 border-solid rounded-box overflow-hidden bg-gradient-to-t from-white from-80% to-[#2B2B2B] shadow-shdw max-w-[300px] duration-300`}>
					<PizzaCart />
				</div>
			) : (
				<LaptopPizza>
					<PizzaCart />
				</LaptopPizza>
			)}
		</PizzaContext.Provider>
	);
}

// --------------------------------------------- Pizza Cart --------------------------------------------- //

function PizzaCart() {
	const nav = useNavigate();
	const username = useSelector((state) => state.user.username);
	const cart = useSelector((state) => state.cart.cart);
	const [isAdded, setIsAdded] = useState(false);

	const {
		imageUrl,
		isLoading,
		setIsLoading,
		unitPrice,
		soldOut,
		name,
		dis,
		item,
	} = useContext(PizzaContext);

	function toastAdd() {
		toast.success(`${item.name} Added to cart`);
	}

	function handleAddToCart(item) {
		console.log("item,", item);

		if (username) {
			const newItem = {
				pizzaId: item.id,
				name: item.name,
				quantity: 1,
				unitPrice: item.unitPrice,
			};
			toastAdd();
			dis(addItem(newItem));
		} else {
			nav("/createUser");
		}
	}

	useEffect(() => {
		const isDuplicated = cart.find((cartItem) => cartItem.pizzaId === item.id);
		if (isDuplicated) setIsAdded(true);
	}, [cart, item]);

	return (
		<>
			<img
				src={imageUrl}
				alt={name}
				className="hidden"
				onLoad={() => setIsLoading(false)}
				onError={() => setIsLoading(false)}
			/>

			{!isLoading ? (
				<div
					style={{ backgroundImage: `url(${imageUrl})` }}
					className={`h-1/2 w-full min-w-64 flex justify-center items-center bg-cover bg-center relative min-h-[196px] ${
						soldOut ? "grayscale" : "grayscale-0"
					}`}>
					<div className="absolute top-0 right-0 left-0 bottom-0 w-full h-full bg-gradient-to-t from-RED opacity-80 to-50% to-transparent"></div>
				</div>
			) : (
				<PictureLoader />
			)}

			<div className="flex flex-col items-center justify-center py-2">
				<span className="text-black font-semibold text-xl tracking-tight">
					{name}
				</span>
				<span className="text-RED tracking-tight text-4xl font-semibold ">
					{unitPrice}
					<span className="text-xl"> $</span>
				</span>
				<button
					onClick={() => dis(openIngredients(item))}
					className="border border-solid border-RED rounded-lg sm:hover:bg-RED sm:hover:text-white transition-colors duration-300  text-RED py-1.5 px-8 mt-2">
					ingredients
				</button>
			</div>
			{!soldOut ? (
				!isAdded ? (
					<button
						title="For Adding"
						className="border border-solid border-RED rounded-lg sm:hover:bg-PINK sm:hover:border-PINK transition-colors duration-300 bg-RED text-white py-1.5 px-8 mb-5"
						onClick={() => handleAddToCart(item)}>
						Add to cart
					</button>
				) : (
					<button
						className="border border-solid border-RED rounded-lg sm:hover:bg-PINK sm:hover:border-PINK transition-colors duration-300 bg-RED text-white py-1.5 px-9 mb-5"
						title="For Quantity"
						onClick={() => nav("/cart")}>
						Go to cart
					</button>
				)
			) : (
				<button
					title="Solded out"
					disabled={true}
					className="border-x-[3px] border-y border-solid border-gray-400 rounded-lg cursor-not-allowed bg-gray-400 text-white py-1.5 px-11 mb-5">
					Soldout
				</button>
			)}
		</>
	);
}

// --------------------------------------------- Laptop Pizza --------------------------------------------- //

function LaptopPizza({ children }) {
	const { viewAmount, soldOut } = useContext(PizzaContext);
	return (
		<motion.div
			viewport={{ once: true, amount: viewAmount }}
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ type: "spring", stiffness: 84 }}
			className={`flex flex-col items-center justify-between border border-gray-300 border-solid rounded-box overflow-hidden bg-gradient-to-t from-white from-80% to-[#2B2B2B] shadow-shdw max-w-[300px] hover:border hover:border-solid ${
				soldOut ? "hover:border-black" : "hover:border-RED"
			} hover:border-RED transition-[border] duration-300`}>
			{children}
		</motion.div>
	);
}

export default Pizza;
