import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../services/apiRestaurant";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
	/^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
		str,
	);

const fakeCart = [
	{
		pizzaId: 12,
		name: "Mediterranean",
		quantity: 2,
		unitPrice: 16,
		totalPrice: 32,
	},
	{
		pizzaId: 6,
		name: "Vegetale",
		quantity: 1,
		unitPrice: 13,
		totalPrice: 13,
	},
	{
		pizzaId: 11,
		name: "Spinach and Mushroom",
		quantity: 1,
		unitPrice: 15,
		totalPrice: 15,
	},
];

function CreateOrder() {
	// const [withPriority, setWithPriority] = useState(false);
	const cart = fakeCart;
	const navigation = useNavigation();
	const isSubmitting = navigation.state === "submitting";

	const r = useActionData();
	console.log(r);

	return (
		<div className="h-[87dvh] w-full flex justify-center items-center flex-col gap-7 text-black">
			<h2 className="text-center text-2xl font-medium text-black py-2 px-3 rounded-lg">
				Ready to order? Let&apos;s go!
			</h2>

			<Form
				method="POST"
				className="flex flex-col items-center text-lg bg-RED px-0 py-7 rounded-lg text-RED w-5/6 max-w-[365px]">
				<div className="w-full flex flex-row items-center justify-between px-4 sm:px-9 gap-4 rounded-md py-2">
					<label className="text-white">Name :</label>
					<input
						className="bg-white border text-black border-solid border-RED rounded-md  py-1.5 pl-2 text-sm w-40 sm:w-48 sm:hover:bg-PINK focus:w-44 transition-all duration-300 capitalize focus:outline-none focus:border-black"
						type="text"
						spellCheck={false}
						placeholder="Your first name"
						name="customer"
						required
					/>
				</div>
				<div className="w-full flex flex-row items-center justify-between px-4 sm:px-9 gap-4 rounded-md py-2">
					<label className="text-white">Phone :</label>
					<input
						className="bg-white border text-black border-solid border-RED rounded-md  py-1.5 pl-2 text-sm w-40 sm:w-48 sm:hover:bg-PINK focus:w-44 transition-all duration-300 capitalize focus:outline-none focus:border-black"
						type="tel"
						spellCheck={false}
						placeholder="Your phone number"
						name="phone"
						required
					/>
				</div>
				<div className="w-full flex flex-row items-center justify-between px-4 sm:px-9 gap-4 rounded-md py-2">
					<label className="text-white">Address :</label>
					<input
						className="bg-white border text-black border-solid border-RED rounded-md  py-1.5 px-2 text-sm w-40 sm:w-48 sm:hover:bg-PINK focus:w-44 transition-all duration-300 capitalize focus:outline-none focus:border-black"
						type="text"
						spellCheck={false}
						placeholder="Your address"
						name="address"
						required
					/>
				</div>
				<div className="w-full flex flex-row items-center justify-center px-4 sm:px-9 gap-4 rounded-md py-4 mb-2">
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
						// value={withPriority}
						// onChange={(e) => setWithPriority(e.target.checked)}
					/>
				</div>
				<div>
					<input
						type="hidden"
						name="cart"
						value={JSON.stringify(cart)}
					/>
					<button
						className="bg-white py-2 px-4 rounded-lg hover:bg-PINK hover:text-white transition-colors duration-300 font-normal"
						disabled={r?.phone}>
						{isSubmitting ? "Placing order . . ." : "Order now"}
					</button>
				</div>
			</Form>
		</div>
	);
}

export async function action({ request }) {
	const formData = await request.formData();
	const data = Object.fromEntries(formData);

	const order = {
		...data,
		cart: JSON.parse(data.cart),
		priority: data.priority === "on",
	};

	console.log(order);

	const errors = {};
	if (isValidPhone(order.phone) == false) errors.phone = "Not valid";
	if (Object.keys(errors).length > 0) return errors;

	const newOrder = await createOrder(order);

	return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
