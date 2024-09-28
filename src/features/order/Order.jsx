/* eslint-disable react-refresh/only-export-components */

import { useLoaderData } from "react-router-dom";
import {
	calcMinutesLeft,
	formatCurrency,
	formatDate,
	ScrollUp,
} from "../utils/helpers";
import { getOrder } from "../services/apiRestaurant";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearList } from "../cart/cartSlice";
import UpdateOrder from "./UpdateOrder";

function Order() {
	const order = useLoaderData();
	// Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
	const { id, status, priority, priorityPrice, orderPrice, estimatedDelivery } =
		order;

	const deliveryIn = calcMinutesLeft(estimatedDelivery);
	const dis = useDispatch();
	console.log("orderrrrr: ", order);

	useEffect(() => {
		dis(clearList());
		ScrollUp();
	}, [dis]);

	return (
		<div
			key={id}
			className="h-FullHeight p-10 sm:p-20 flex flex-col items-center justify-start bg-white bg-opacity-50">
			<div className="max-w-[458px] md:max-w-[520px] flex flex-col items-center justify-center gap-6 w-full">
				<div className="flex flex-col w-full md:flex-row items-center gap-3">
					<h2 className="flex flex-row items-center gap-3 text-2xl text-white bg-RED bg-opacity-85 justify-center font-normal py-2 rounded-lg w-full md:py-4 animate-fade-right animate-duration-500 animate-delay-100">
						Order <span className="text-black font-medium">{id}</span> Status
					</h2>

					<div className="flex flex-row items-center justify-center gap-3 md:gap-2 md:flex-col md:text-base text-nowrap">
						{priority && (
							<span className="bg-PINK saturate-200 text-white md:py-0.5 py-1 px-4 rounded-lg w-full text-center animate-fade-down animate-duration-500 animate-delay-100">
								Priority
							</span>
						)}
						<span
							className={`${
								deliveryIn >= 0 ? "bg-yellow-300" : "bg-green-400"
							} capitalize animate-fade-up animate-duration-500 animate-delay-100 text-white md:py-0.5 py-1 px-4 text-center rounded-lg`}>
							{status} order
						</span>
					</div>
				</div>

				<div className="flex flex-col items-center gap-1 text-black text-sm font-normal border border-solid border-[#E7EAEC] rounded-lg w-full py-5 animate-fade animate-duration-500 animate-delay-100">
					<p>
						{deliveryIn >= 0
							? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
							: "Order should have arrived"}
					</p>
					<p>(Estimated delivery: {formatDate(estimatedDelivery)})</p>
				</div>
				<ul className="w-full animate-fade-left animate-delay-100 animate-duration-500 flex flex-col items-center justify-start border border-solid border-[#E7EAEC] rounded-lg gap-3 max-h-[200px] p-2.5 sm:p-3.5 overflow-y-auto ">
					{order.cart.map((item) => (
						<li
							key={item.pizzaId}
							className="w-full flex flex-row items-center justify-between px-5 py-2.5 text-gray-700 rounded-lg bg-PINK">
							<div className="flex flex-row items-center gap-1.5">
								<span>x {item.quantity}</span>
								<span>{item.name}</span>
							</div>
							<span>{formatCurrency(item.unitPrice)}</span>
						</li>
					))}
				</ul>
				<div className="grid grid-cols-1  bg-gray-300 p-4 rounded-lg bg-opacity-50 text-black gap-1 w-full font-normal animate-fade-right animate-duration-500 animate-delay-100">
					<div className="flex flex-row items-center justify-between w-full">
						<p>Price pizza :</p>
						<span>{formatCurrency(orderPrice)}</span>
					</div>
					{priority && (
						<div className="flex flex-row items-center justify-between w-full">
							<p>Price priority :</p>
							<span>{formatCurrency(priorityPrice)}</span>
						</div>
					)}
					<div className="flex flex-row items-center justify-between w-full">
						<p>To pay on delivery : </p>
						<span className="text-RED">
							{formatCurrency(orderPrice + priorityPrice)}
						</span>
					</div>
					{!priority && <UpdateOrder order={order} />}
				</div>
			</div>
		</div>
	);
}

export async function loader({ params }) {
	const order = await getOrder(params.orderId);
	return order;
}

export default Order;
