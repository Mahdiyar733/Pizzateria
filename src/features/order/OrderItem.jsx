import { useEffect, useState } from "react";
import { calcMinutesLeft, formatCurrency } from "../utils/helpers";
import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
function OrderItem({ order }) {
	const nav = useNavigate();
	const {
		customer,
		orderPrice,
		phone,
		status,
		priorityPrice,
		priority,
		estimatedDelivery,
	} = order;

	const [deliveryTime, setDeliveryTime] = useState(() =>
		calcMinutesLeft(estimatedDelivery),
	);

	function handleDetails() {
		nav(`/order/${order.id}`);
	}

	useEffect(() => {
		setInterval(() => {
			setDeliveryTime(calcMinutesLeft(estimatedDelivery));
		}, 10000);
	}, [estimatedDelivery]);

	return (
		<div className="bg-RED w-full h-auto rounded-lg flex flex-col items-center gap-3 px-4 py-5 max-w-[370px] place-self-center animate-fade animate-duration-500">
			<Item>
				<span>Customer&apos;s name : </span>
				<span>{customer}</span>
			</Item>
			<Item>
				<span>Phone : </span>
				<span>{phone}</span>
			</Item>
			<Item>
				<span>Priority : </span>
				<span>{priority ? "Yes" : "No"}</span>
			</Item>
			<Item>
				<span>Status : </span>
				<span>{status}</span>
			</Item>
			<Item>
				<span>Order Price : </span>
				<span>{formatCurrency(orderPrice)}</span>
			</Item>
			<Item>
				<span>Delivery times left : </span>
				{status == "preparing" && deliveryTime > 0 ? (
					<span>{deliveryTime} minutes</span>
				) : (
					<span>Delivered ! </span>
				)}
			</Item>

			<button
				className="w-full py-2 text-white border border-solid border-white mt-2 rounded-md hover:bg-white font-medium hover:border-PINK tracking-wider hover:text-black transition-all duration-300"
				onClick={handleDetails}>
				Details
			</button>
		</div>
	);
}

function Item({ children }) {
	return (
		<div className="flex w-full flex-row items-center justify-between px-3 py-2 bg-white text-RED rounded-md text-sm">
			{children}
		</div>
	);
}

export default OrderItem;
