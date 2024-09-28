import { useFetcher } from "react-router-dom";
import { updateOrder } from "../services/apiRestaurant";

function UpdateOrder() {
	const fetcher = useFetcher();

	return (
		<fetcher.Form method="PATCH">
			<button className="bg-RED rounded-lg px-5 py-2 text-white mt-3">
				Make priority
			</button>
		</fetcher.Form>
	);
}

export async function action({ params }) {
	const data = { priority: true };
	console.log(params.orderId);
	console.log(params);
	await updateOrder(params.orderId, data);
	return null;
}

export default UpdateOrder;
