/* eslint-disable react-refresh/only-export-components */
// Test ID: IIDSAT

import { useLoaderData } from "react-router-dom";
import { calcMinutesLeft, formatCurrency, formatDate } from "../utils/helpers";
import { getOrder } from "../services/apiRestaurant";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearList } from "../cart/cartSlice";

function Order() {
	const order = useLoaderData();
	// Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
	const { id, status, priority, priorityPrice, orderPrice, estimatedDelivery } =
		order;

	const deliveryIn = calcMinutesLeft(estimatedDelivery);
	const dis = useDispatch();
	console.log(order);

	useEffect(() => {
		dis(clearList());
	}, [dis]);

	return (
		<div
			key={id}
			className="h-FullHeight p-20 bg-red-400">
			<div>
				<h2>Status</h2>

				<div>
					{priority && <span>Priority</span>}
					<span>{status} order</span>
				</div>
			</div>

			<div>
				<p>
					{deliveryIn >= 0
						? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
						: "Order should have arrived"}
				</p>
				<p>(Estimated delivery: {formatDate(estimatedDelivery)})</p>
			</div>

			<div>
				<p>Price pizza: {formatCurrency(orderPrice)}</p>
				{priority && <p>Price priority: {formatCurrency(priorityPrice)}</p>}
				<p>To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}</p>
			</div>
		</div>
	);
}

export async function loader({ params }) {
	const order = await getOrder(params.orderId);
	return order;
}

export default Order;
