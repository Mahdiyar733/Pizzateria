/* eslint-disable react/prop-types */
import {
	Form,
	redirect,
	useActionData,
	useNavigate,
	useNavigation,
} from "react-router-dom";
import { createOrder } from "../services/apiRestaurant";
import { useEffect, useState } from "react";
import { addOrder, getCart, getTotalPrice } from "../cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { formatCurrency, ScrollUp } from "../utils/helpers";
import store from "../../store";
import { clearAddress, clearErrors, fetchAddress } from "../user/userSlice";
import toast from "react-hot-toast";
import { AnimatePresence, motion } from "framer-motion";

// https://uibakery.io/regex-library/phone-number
// const isValidPhone = (str) =>
// 	/^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
// 		str,
// 	);

function CreateOrder() {
	const [withPriority, setWithPriority] = useState(false);
	const navigation = useNavigation();
	const isSubmitting = navigation.state === "submitting";
	const {
		username,
		status: addressStatus,
		position,
		address,
		error,
	} = useSelector((state) => state.user);
	const cart = useSelector(getCart);
	const totalPrice = useSelector(getTotalPrice);
	const nav = useNavigate();
	const dis = useDispatch();
	const r = useActionData();
	const isLoadingAddress = addressStatus === "loading";
	const [addressState, setAddressState] = useState("");

	function handleAddress(e) {
		e.preventDefault();
		dis(fetchAddress());
	}

	useEffect(() => {
		dis(clearAddress());
		dis(clearErrors());
		if (address) setAddressState(address);
	}, [address, dis]);

	useEffect(() => {
		toast.dismiss();
		if (cart.length == 0) nav("/menu");
		ScrollUp();
	}, [cart, nav]);

	return (
		<div className="h-auto min-h-dvh sm:h-FullHeight w-full flex px-5 py-10 sm:p-20 items-center flex-col gap-7 text-black bg-white bg-opacity-50">
			<h2 className="text-center text-2xl font-medium text-black py-2 px-3 rounded-lg animate-fade-down animate-duration-500">
				Ready to order? Let&apos;s go!
			</h2>
			<Form
				method="POST"
				className={`flex flex-col items-center text-lg bg-RED px-0 py-7 rounded-lg text-RED w-full max-w-[365px] animate-fade-up animate-duration-500 transition-all duration-500 md:max-w-[500px] md:px-5 md:py-10`}>
				<div className="w-full flex flex-row items-center justify-between px-9 gap-4 rounded-md py-2">
					<label className="text-white text-nowrap">Name :</label>
					<input
						className="bg-white border text-black border-solid border-RED rounded-md  py-1.5 pl-2 text-sm w-full sm:w-48 md:w-72 sm:hover:bg-PINK focus:w-44 md:focus:w-60 transition-all duration-300 capitalize focus:outline-none focus:border-black"
						type="text"
						defaultValue={username}
						spellCheck={false}
						placeholder="Your first name"
						name="customer"
						required
					/>
				</div>
				<div className="w-full flex flex-row items-center justify-between px-9 gap-4 rounded-md py-2">
					<label className="text-white text-nowrap">Phone :</label>
					<input
						className="bg-white border text-black border-solid border-RED rounded-md  py-1.5 pl-2 text-sm w-full sm:w-48 md:w-72 sm:hover:bg-PINK focus:w-44 md:focus:w-60 transition-all duration-300 capitalize focus:outline-none focus:border-black"
						type="tel"
						spellCheck={false}
						placeholder="Your phone number"
						name="phone"
						required
					/>
				</div>
				<div className="w-full flex flex-row items-center justify-between px-9 gap-4 rounded-md py-2 relative">
					<label className="text-white text-nowrap">Address :</label>
					<input
						className="bg-white border text-black border-solid border-RED rounded-md  py-1.5 px-2 text-sm w-full sm:w-48 md:w-72 sm:hover:bg-PINK focus:w-44 md:focus:w-60 transition-all duration-300 capitalize focus:outline-none focus:border-black"
						type="text"
						value={addressState}
						onChange={(e) => setAddressState(e.target.value)}
						disabled={isLoadingAddress}
						spellCheck={false}
						placeholder="Your address"
						name="address"
						required
					/>
				</div>
				<div className="w-full flex flex-row items-center justify-center px-9 gap-4 rounded-md py-4 mb-2">
					<label
						className="text-white text-xs sm:text-sm cursor-pointer"
						htmlFor="priority">
						Want to yo give your order priority?
					</label>
					<input
						className="bg-white cursor-pointer"
						type="checkbox"
						name="priority"
						id="priority"
						value={withPriority}
						onChange={(e) => setWithPriority(e.target.checked)}
					/>
				</div>
				<div className="flex flex-col items-center gap-3">
					{/* ------------- hidden input for data in our Form ------------- */}
					<input
						type="hidden"
						name="cart"
						value={JSON.stringify(cart)}
					/>
					<input
						type="hidden"
						name="position"
						value={
							position.longitude && position.latitude
								? `${position.latitude}, ${position.longitude}`
								: ""
						}
					/>
					{/* -------------------------------------------------------------- */}
					<button
						className="bg-white py-2 px-4 rounded-lg hover:bg-PINK hover:text-white transition-colors duration-300 font-normal disabled:cursor-not-allowed"
						disabled={r?.phone || isLoadingAddress}>
						{isSubmitting
							? "Placing order . . ."
							: `Order now from ${formatCurrency(totalPrice)}`}
					</button>
					<GetAddressBtn
						isVisible={!addressState.trim()}
						disable={isLoadingAddress}
						handler={handleAddress}>
						{isLoadingAddress ? "Loading..." : "Get Address"}
					</GetAddressBtn>
				</div>
			</Form>
			{error && !isLoadingAddress && (
				<p className="text-RED bg-black rounded-lg py-3 px-2 text-lg text-center md:px-5 animate-fade-down animate-duration-500">
					{error}
				</p>
			)}
		</div>
	);
}

function GetAddressBtn({ handler, isVisible, children, disable }) {
	return (
		<AnimatePresence>
			{isVisible && (
				<motion.button
					disabled={disable}
					className="bg-yellow-300 w-full text-white py-1.5 px-4 rounded-lg hover:bg-PINK hover:text-white transition-colors duration-300 font-normal disabled:cursor-not-allowed"
					initial={{ opacity: 0, scale: 0.7 }}
					animate={{ opacity: 1, scale: 1 }}
					exit={{ opacity: 0, scale: 0.8 }}
					transition={{ type: "just" }}
					style={{ zIndex: 100 }}
					onClick={disable ? null : handler}>
					{children}
				</motion.button>
			)}
		</AnimatePresence>
	);
}

// eslint-disable-next-line react-refresh/only-export-components
export async function action({ request }) {
	const formData = await request.formData();
	const data = Object.fromEntries(formData);

	const order = {
		...data,
		cart: JSON.parse(data.cart),
		priority: data.priority === "true",
	};

	// const errors = {};
	// if (isValidPhone(order.phone) == false) errors.phone = "Not valid";
	// if (Object.keys(errors).length > 0) return errors;

	const newOrder = await createOrder(order);
	store.dispatch(addOrder(newOrder));

	return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
