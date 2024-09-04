const API_URL = "https://react-fast-pizza-api.onrender.com/api";
import chef1 from "../ui/ReservePage/Section-three/chef1.png";
import chef2 from "../ui/ReservePage/Section-three/chef2.png";
import chef3 from "../ui/ReservePage/Section-three/chef3.png";

export async function getMenu() {
	const res = await fetch(`${API_URL}/menu`);

	// fetch won't throw error on 400 errors (e.g. when URL is wrong), so we need to do it manually. This will then go into the catch block, where the message is set
	if (!res.ok) throw Error("Failed getting menu");

	const { data } = await res.json();
	return data;
}

export async function getOrder(id) {
	const res = await fetch(`${API_URL}/order/${id}`);
	if (!res.ok) throw Error(`Couldn't find order #${id}`);

	const { data } = await res.json();
	return data;
}

export async function createOrder(newOrder) {
	try {
		const res = await fetch(`${API_URL}/order`, {
			method: "POST",
			body: JSON.stringify(newOrder),
			headers: {
				"Content-Type": "application/json",
			},
		});

		if (!res.ok) throw Error();
		const { data } = await res.json();
		return data;
	} catch {
		throw Error("Failed creating your order");
	}
}

export async function updateOrder(id, updateObj) {
	try {
		const res = await fetch(`${API_URL}/order/${id}`, {
			method: "PATCH",
			body: JSON.stringify(updateObj),
			headers: {
				"Content-Type": "application/json",
			},
		});

		if (!res.ok) throw Error();
		// We don't need the data, so we don't return anything
	} catch (err) {
		console.log(err);
		throw Error("Failed updating your order");
	}
}

export const chefs = [
	{
		name: "Edward Garlen",
		job: "Executive Chef",
		src: chef1,
		id: "1",
		age: 35,
		workYear: 7,
		des: `Edward Garlen is a 35-year-old Executive chef with 7 years of experience in the culinary industry. He has worked in a variety of restaurants, including fine dining, casual dining, and pizzeria. Edward has a passion for creating delicious and innovative dishes.
			Edward began his culinary career at the age of 23, when he enrolled in a culinary arts program at a local community college. After graduating from the program, he worked as a line cook at a number of different restaurants before landing a job as a chef de partie at a pizzeria.`,
	},
	{
		name: "Tyler Joseph",
		job: "Chef de Partie",
		src: chef2,
		id: "2",
		age: 45,
		workYear: 14,
		des: `Tyler Joseph, at 45 years old, brings a wealth of experience and dedication to his role as Chef de Partie at the renowned Pizzateria restaurant. With 14 years under his belt, Tyler has become a master of his station, overseeing the entire pizza-making process with an unwavering commitment to quality and excellence.
			Tyler Joseph is more than just a Chef de Partie; he is a guardian of tradition, a champion of quality, and a visionary in the world of pizza. His dedication and passion have earned him the respect of his peers and the adoration of pizza lovers everywhere.`,
	},
	{
		name: "Bentio Martínez",
		job: "Sous Chef",
		src: chef3,
		id: "3",
		age: 41,
		workYear: 11,
		des: `Bentio Martinez, a seasoned chef with 11 years of experience under his belt, is a name synonymous with excellence in the world of pizza. At the tender age of 41, he has dedicated himself to the craft, honing his skills at the prestigious Pizzateria restaurant.
			Bentio's passion for pizza ignited early on, drawn to the simple yet complex alchemy of flour, water, and fire. He started his journey as a young apprentice, learning the intricacies of dough making, the art of hand-tossed pizzas, and the delicate balance of flavors.`,
	},
];
