import { useLoaderData, useNavigate } from "react-router-dom";
import { getMenu } from "../services/apiRestaurant";
import MenuHeader from "../ui/HomePage/Section-three/MenuHeader";
import { motion } from "framer-motion";
import Pizza from "../ui/HomePage/Section-three/Pizza";
import { useContext, useEffect } from "react";
import { ScrollUp } from "../utils/helpers";
import { useSelector } from "react-redux";
import IngredientsModal from "./IngredientsModal";
import IsAuthContext, { AuthContext } from "../services/isAuthContext";

function Menu() {
	const menu = useLoaderData();
	const username = useSelector((state) => state.user.username);
	const { isLogined } = useContext(AuthContext);
	const nav = useNavigate();
	console.log(isLogined);

	useEffect(() => {
		if (!isLogined) nav("/createUser");
		ScrollUp();
	}, [isLogined]);

	if (!isLogined) return null;

	return (
		<IsAuthContext>
			<div className={`h-auto py-10 flex items-center flex-col`}>
				<motion.div
					initial={{ opacity: 0, y: -50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{
						type: "spring",
						stiffness: 80,
					}}>
					<MenuHeader
						name={username}
						isNamed={true}
					/>
				</motion.div>
				<IngredientsModal />
				<main className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-6 xl:grid-cols-4 xl:max-w-screen-2xl sm:grid-rows-9 grid-rows-12 px-10 gap-5 place-items-center sm:max-w-[663px] lg:max-w-[950px]">
					{menu.map((item) => (
						<Pizza
							viewAmount={0.1}
							key={item.id}
							item={item}
						/>
					))}
				</main>
			</div>
		</IsAuthContext>
	);
}

// eslint-disable-next-line react-refresh/only-export-components
export async function loader() {
	const data = await getMenu();
	return data;
}

export default Menu;
