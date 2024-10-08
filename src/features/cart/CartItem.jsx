/* eslint-disable react/prop-types */
import { formatCurrency } from "../common/helpers";
import DeleteSvg from "../../icons/DeleteSvg";
import IncreaseSvg from "../../icons/IncreaseSvg";
import DecreaseSvg from "../../icons/DecreaseSvg";
import InfoSvg from "../../icons/InfoSvg";
import ModalBoxAnimate from "../common/ModalBoxAnimate";
import { useContext } from "react";
import { CartItemContext } from "./Cart";
import CloseBtnModal from "../common/CloseBtnModal";
import { useDispatch } from "react-redux";
import { decrease, deleteItem, increase } from "./cartSlice";

function CartItem({ item }) {
	const { setIsOpenDetails, setCurrItem } = useContext(CartItemContext);
	const { pizzaId, name, quantity } = item;
	console.log("itemmmm", item);

	const dis = useDispatch();

	function handleInfo() {
		setIsOpenDetails(true);
		setCurrItem(item);
	}

	function handleDelete() {
		dis(deleteItem(pizzaId));
	}

	function handleIncrease() {
		dis(increase(pizzaId));
	}

	function handleDecrease() {
		dis(decrease(pizzaId));
	}

	return (
		<div className="flex flex-row items-center w-full bg-PINK p-3 rounded-lg text-xs text-black justify-between animate-fade-left animate-duration-500">
			<div className="flex flex-row items-center gap-1 sm:gap-2">
				<span
					id={pizzaId}
					className="bg-pink-100 rounded-md p-1 sm:hover:bg-blue-400 cursor-pointer transition-colors duration-300"
					onClick={handleInfo}>
					<InfoSvg />
				</span>
				<h1 className="font-normal sm:text-lg text-xs">{name}</h1>
			</div>
			<div className="flex flex-row items-center gap-2 sm:gap-4">
				<button
					className="bg-pink-100 rounded-md p-1 sm:hover:bg-RED cursor-pointer transition-colors duration-300"
					onClick={handleDelete}>
					<DeleteSvg />
				</button>
				<button
					className="bg-pink-100 rounded-md p-1 sm:hover:bg-RED cursor-pointer transition-colors duration-300"
					onClick={handleDecrease}>
					<DecreaseSvg />
				</button>
				<span className="sm:text-base">{quantity}</span>
				<button
					className="bg-pink-100 rounded-md p-1 sm:hover:bg-RED cursor-pointer transition-colors duration-300"
					onClick={handleIncrease}>
					<IncreaseSvg />
				</button>
			</div>
		</div>
	);
}

export function CartItemModalBox({ item }) {
	const { name, quantity, unitPrice } = item;
	const { isOpenDetails, setIsOpenDetails } = useContext(CartItemContext);
	const totalPrice = unitPrice * quantity;

	console.log(item);

	function handleCloseDetailsModal(e) {
		e.preventDefault();
		setIsOpenDetails(false);
	}

	return (
		<ModalBoxAnimate
			isVisible={isOpenDetails}
			handler={handleCloseDetailsModal}>
			<div className="w-full h-full flex flex-col items-center gap-2">
				<span className="p-3 bg-RED text-white w-full flex justify-between flex-row font-normal items-center rounded-md text-sm">
					Name : <span>{name}</span>
				</span>
				<span className="p-3 bg-RED text-white w-full flex justify-between flex-row font-normal items-center rounded-md text-sm">
					Quantity : <span>{quantity}</span>
				</span>
				<span className="p-3 bg-RED text-white w-full flex justify-between flex-row font-normal items-center rounded-md text-sm">
					Unit Price : <span>{formatCurrency(unitPrice)}</span>
				</span>
				<span className="p-3 bg-RED text-white w-full flex justify-between flex-row font-normal items-center rounded-md text-sm mb-4">
					Total Price :{" "}
					<span className="shakeAni">{formatCurrency(totalPrice)}</span>
				</span>
				<CloseBtnModal handler={handleCloseDetailsModal}>Close</CloseBtnModal>
			</div>
		</ModalBoxAnimate>
	);
}

export default CartItem;
