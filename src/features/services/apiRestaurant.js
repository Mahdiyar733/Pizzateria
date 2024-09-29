const API_URL = "https://react-fast-pizza-api.onrender.com/api";
import chef1 from "../pages/ReservePage/Section-three/chef1.png";
import chef2 from "../pages/ReservePage/Section-three/chef2.png";
import chef3 from "../pages/ReservePage/Section-three/chef3.png";

export async function getMenu() {
	const res = await fetch(`${API_URL}/menu`);
	console.log(res);

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
		console.log("res", res);

		if (!res.ok) throw Error();
		const { data } = await res.json();
		console.log("data", data);

		return data;
	} catch (err) {
		console.log("err", err);

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
			Edward began his culinary career at the age of 23, when he enrolled in a culinary arts program at a local community college. After graduating from the program, he worked as a line cook at a number of different restaurants before landing a job as a chef de partie at a pizzeria.
			Edward began his culinary career at the age of 28, when he enrolled in a culinary arts program at a local community college. After graduating from the program, he worked as a line cook at a number of different restaurants before landing a job as a chef at a pizzeria.
			Edward quickly rose through the ranks at the pizzeria, and he was soon promoted to head chef. In this role, he is responsible for overseeing the day-to-day operations of the kitchen and training new staff. Edward also plays a key role in developing new menu items and specials.
			As head chef, Edward has helped the pizzeria to win several awards, including the "Best Pizza in Town" award from the local newspaper. He is also a member of the American Culinary Federation.`,
	},
	{
		name: "Tyler Joseph",
		job: "Chef de Partie",
		src: chef2,
		id: "2",
		age: 45,
		workYear: 14,
		des: `Tyler Joseph, at 45 years old, brings a wealth of experience and dedication to his role as Chef de Partie at the renowned Pizzateria restaurant. With 14 years under his belt, Tyler has become a master of his station, overseeing the entire pizza-making process with an unwavering commitment to quality and excellence.
			Tyler Joseph is more than just a Chef de Partie; he is a guardian of tradition, a champion of quality, and a visionary in the world of pizza. His dedication and passion have earned him the respect of his peers and the adoration of pizza lovers everywhere.
			Tyler quickly rose through the ranks at the pizzeria, and he was soon promoted to sous chef. In this role, he was responsible for overseeing the day-to-day operations of the kitchen and training new staff. Tyler also played a key role in developing new menu items and specials.
			After four years as sous chef, Tyler was promoted to chef de partie. In this role, he is responsible for managing the entire kitchen staff and ensuring that all dishes are prepared to the highest standards. Tyler is also responsible for creating new menu items and specials, and he works closely with the restaurant's owner to develop new marketing strategies.
			Tyler is a highly skilled and experienced chef, and he is passionate about his work. He is a valuable asset to any restaurant, and he is always looking for new ways to improve his skills and knowledge.`,
	},
	{
		name: "Bentio Martínez",
		job: "Sous Chef",
		src: chef3,
		id: "3",
		age: 41,
		workYear: 11,
		des: `Bentio Martinez, a seasoned chef with 11 years of experience under his belt, is a name synonymous with excellence in the world of pizza. At the tender age of 41, he has dedicated himself to the craft, honing his skills at the prestigious Pizzateria restaurant.
			Bentio's passion for pizza ignited early on, drawn to the simple yet complex alchemy of flour, water, and fire. He started his journey as a young apprentice, learning the intricacies of dough making, the art of hand-tossed pizzas, and the delicate balance of flavors.
			He quickly rose through the ranks at the pizzeria, and he was soon promoted to sous chef. In this role, he is responsible for overseeing the day-to-day operations of the kitchen and training new staff. Bentio also plays a key role in developing new menu items and specials.
			As sous chef, Bentio is responsible for managing the kitchen staff and ensuring that all dishes are prepared to the highest standards. He also works closely with the head chef to develop new recipes and menu items. Bentio is a highly skilled and experienced chef, and he is passionate about his work. He is a valuable asset to any restaurant, and he is always looking for new ways to improve his skills and knowledge.
			Benito says : I am a passionate and dedicated chef with a strong work ethic and a commitment to excellence. I am always looking for new ways to improve my skills and knowledge, and I am always willing to go the extra mile to ensure that my customers have a positive dining experience.`,
	},
];
