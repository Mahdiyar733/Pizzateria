import { useSelector } from "react-redux";
import OrderItem from "../order/OrderItem";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ScrollUp } from "../utils/helpers";

function Orders() {
	const username = useSelector((state) => state.user.username);
	const orders = useSelector((state) => state.cart.orders);
	const nav = useNavigate();
	console.log(orders);

	useEffect(() => {
		if (!username.trim()) nav("/createUser");
		ScrollUp();
	}, [username, nav]);

	return (
		<div className="h-auto min-h-dvh sm:min-h-dvh flex items-center flex-col py-10 sm:p-20 md:px-10 bg-white bg-opacity-50">
			{orders.length ? (
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full px-7 py-4 gap-4 sm:gap-9 lg:max-w-[1200px] xl:grid-cols-4 xl:px-3 xl:max-w-full sm:max-w-[832px]">
					{orders.map((order) => (
						<OrderItem
							order={order}
							key={order.id}
						/>
					))}
				</div>
			) : (
				<div className="flex flex-col items-center gap-4">
					<p className="text-black text-sm font-normal sm:text-xl animate-fade-down animate-duration-500">
						{" "}
						Hey{" "}
						<span className="text-RED capitalize font-medium">{username}</span>,
						You do not have any order yet.
					</p>
					<Link to="/menu">
						<button className="bg-RED text-white font-normal py-2 px-5 rounded-lg sm:hover:bg-PINK transition-colors duration-300 animate-fade-up animate-duration-500">
							Go to Menu
						</button>
					</Link>
				</div>
			)}
		</div>
	);
}

export default Orders;
