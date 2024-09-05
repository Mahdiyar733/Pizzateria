import { useLoaderData } from "react-router-dom";
import { getMenu } from "../services/apiRestaurant";
import MenuHeader from "../ui/HomePage/Section-three/MenuHeader";
import { motion } from "framer-motion";
import Pizza from "../ui/HomePage/Section-three/Pizza";
import { Fragment, useContext, useEffect, useState } from "react";
import { AuthContext } from "../services/isAuthContext";
import { useDebounce } from "use-debounce";
import { ScrollUp } from "../utils/helpers";

function Menu() {
	const menu = useLoaderData();
	const [inputVal, setInputVal] = useState("");
	const { isLogined, setIsLogined, name, setName } = useContext(AuthContext);
	const [debouncedX] = useDebounce(0, 500);

	function handleOrdering() {
		setName(inputVal);
		setIsLogined(true);
	}

	useEffect(() => {
		ScrollUp();
	}, []);

	return (
		<div
			className={`${
				isLogined ? "h-auto" : "h-dvh"
			} py-10 flex items-center flex-col`}>
			{!isLogined && (
				<div className="flex flex-col items-center gap-6">
					<h2 className="text-black tracking-tight text-2xl font-semibold text-center sm:text-3xl">
						<span className="text-RED">Welcome!</span> Please start by <br />{" "}
						telling us your name:
					</h2>
					<input
						className="capitalize font-normal tracking-wide bg-white border border-gray-400 border-solid rounded-md px-5 text-black focus:outline-RED focus:outline-2 focus:outline py-2 w-3/4 hover:w-5/6 transition-all duration-200"
						value={inputVal}
						spellCheck="false"
						onChange={(e) => setInputVal(e.target.value)}
						type="text"
						placeholder="Your full name"
					/>
					{inputVal.trim() && (
						<button
							className="btn bg-RED border-none animate-fade-down animate-duration-300 text-white"
							onClick={handleOrdering}>
							Start ordering
						</button>
					)}
				</div>
			)}
			{isLogined && (
				<Fragment>
					<motion.div
						initial={{ opacity: 0, y: -50 }}
						animate={{ opacity: 1, y: debouncedX }}
						transition={{
							type: "spring",
							stiffness: 80,
						}}>
						<MenuHeader
							name={name}
							isNamed={true}
						/>
					</motion.div>

					<main className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-6 sm:grid-rows-9 grid-rows-12 px-10 gap-5 place-items-center sm:max-w-[663px] lg:max-w-[950px]">
						{menu.map((item) => (
							<Pizza
								viewAmount={0.1}
								key={item.id}
								name={item.name}
								price={item.unitPrice}
								src={item.imageUrl}
							/>
						))}
					</main>
				</Fragment>
			)}
		</div>
	);
}

// eslint-disable-next-line react-refresh/only-export-components
export async function loader() {
	const data = await getMenu();
	return data;
}

export default Menu;
