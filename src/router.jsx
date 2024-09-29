import { createBrowserRouter } from "react-router-dom";
import Home from "./features/pages/HomePage/Home";
import Error from "./features/pages/Error";
import Order, { loader as OrderLoader } from "./features/order/Order";
import { action as OrderAction } from "./features/order/UpdateOrder";
import CreateOrder, {
	action as NewOrderAction,
} from "./features/order/CreateOrder";
import Cart from "./features/cart/Cart";
import Menu, { loader as MenuLoader } from "./features/menu/Menu";
import AppLayout from "./features/pages/AppLayout";
import Reserve from "./features/pages/ReservePage/Reserve";
import InfoChef from "./features/pages/InfoChef";
import PageNotFound from "./features/pages/PageNotFound";
import CreateUser from "./features/user/CreateUser";
import Orders from "./features/pages/Orders";

const router = createBrowserRouter([
	{
		element: <AppLayout />,
		errorElement: <Error />,
		children: [
			{ path: "/", element: <Home />, loader: MenuLoader },
			{ path: "/cart", element: <Cart /> },
			{
				path: "/menu",
				element: <Menu />,
				errorElement: <Error />,
				loader: MenuLoader,
			},
			{
				path: "order/:orderId",
				element: <Order />,
				loader: OrderLoader,
				action: OrderAction,
			},
			{ path: "order/new", element: <CreateOrder />, action: NewOrderAction },
			{ path: "/reservation", element: <Reserve /> },
			{ path: "/chef/:chefId", element: <InfoChef /> },
			{ path: "/createUser", element: <CreateUser /> },
			{ path: "/orders", element: <Orders /> },
			{ path: "*", element: <PageNotFound /> },
		],
	},
]);

export default router;
