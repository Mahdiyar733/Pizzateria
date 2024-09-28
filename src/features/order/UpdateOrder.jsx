/* eslint-disable react/prop-types */
import { useFetcher } from "react-router-dom";
import { updateOrder } from "../services/apiRestaurant";
import { useDispatch } from "react-redux";
import { updateOrderState } from "../cart/cartSlice";

function UpdateOrder({ order }) {
	const fetcher = useFetcher();
	const dis = useDispatch();

	function handleSubmit() {
		dis(updateOrderState(order.id));
		console.log(order);
	}

	return (
		<fetcher.Form method="PATCH">
			<button
				className="bg-RED rounded-lg px-5 py-2 text-white mt-3 sm:hover:bg-PINK transition-colors duration-300 animate-fade-up"
				onClick={handleSubmit}>
				Make priority
			</button>
		</fetcher.Form>
	);
}

export async function action({ params }) {
	const data = { priority: true };
	await updateOrder(params.orderId, data);
	return null;
}

export default UpdateOrder;
