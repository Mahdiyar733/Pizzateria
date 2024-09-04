/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useState } from "react";
import PictureLoader from "../../../utils/PictureLoader";
import { useDebounce } from "use-debounce";

function Pizza({ src, name, price, viewAmount = 0 }) {
	const [isLoading, setIsLoading] = useState(true);
	const [debouncedX] = useDebounce(0, 150);

	return (
		<motion.div
			viewport={{ once: true, amount: viewAmount }}
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: debouncedX }}
			transition={{ type: "spring", stiffness: 84 }}
			className="flex flex-col items-center justify-between border border-gray-300 border-solid rounded-box overflow-hidden bg-gradient-to-t from-white from-80% to-[#2B2B2B] shadow-shdw max-w-[300px]">
			<img
				src={src}
				alt={name}
				className="hidden"
				onLoad={() => setIsLoading(false)}
				onError={() => setIsLoading(false)} // Handle error case
			/>

			{!isLoading ? (
				<div
					style={{ backgroundImage: `url(${src})` }}
					className="h-1/2 w-full min-w-64 flex justify-center items-center bg-cover bg-center relative min-h-[196px]">
					<div className="absolute top-0 right-0 left-0 bottom-0 w-full h-full bg-gradient-to-t from-RED opacity-80 to-50% to-transparent"></div>
				</div>
			) : (
				<PictureLoader />
			)}
			<div className="flex flex-col items-center justify-center py-4">
				<span className="text-black font-semibold text-xl tracking-tight">
					{name}
				</span>
				<span className="text-RED tracking-tight text-4xl font-semibold ">
					{price}
					<span className="text-xl"> $</span>
				</span>
				<span>Rate</span>
			</div>
			<button className="btn bg-RED text-white border-none btn-sm px-8 mb-5">
				Add to cart
			</button>
		</motion.div>
	);
}

export default Pizza;
