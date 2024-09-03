import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./features/ui/HomePage/Home";
import Error from "./features/ui/Error";
import Order, { loader as OrderLoader } from "./features/order/Order";
import CreateOrder, {
	action as NewOrderAction,
} from "./features/order/CreateOrder";
import Cart from "./features/cart/Cart";
import Menu, { loader as MenuLoader } from "./features/menu/Menu";
import AppLayout from "./features/ui/AppLayout";
import IsAuthContext from "./features/services/isAuthContext";

const router = createBrowserRouter([
	{
		element: <AppLayout />,
		errorElement: <Error />,
		children: [
			{ path: "/", element: <Home /> },
			{ path: "/cart", element: <Cart /> },
			{
				path: "/menu",
				element: <Menu />,
				errorElement: <Error />,
				loader: MenuLoader,
			},
			{ path: "order/:orderId", element: <Order />, loader: OrderLoader },
			{ path: "order/new", element: <CreateOrder />, action: NewOrderAction },
		],
	},
]);

function App() {
	return (
		<IsAuthContext>
			<RouterProvider router={router} />
		</IsAuthContext>
	);
}

export default App;
