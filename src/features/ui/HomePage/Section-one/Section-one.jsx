import PizzaPic from "./PizzaHomeP.jpg";
import LittlePizza from "./LittlePizza.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useDebounce } from "use-debounce";

function SectionOne() {
	const [debouncedX] = useDebounce(0, 500);

	return (
		<div
			style={{ backgroundImage: `url(${PizzaPic})` }}
			className={`bg-cover bg-right h-[500px] lg:h-[600px]`}>
			<div className="backdrop-brightness-75 h-full w-full flex justify-evenly items-center flex-col py-16 sm:py-12">
				<span
					role="badge"
					className="py-2 px-4 bg-PINK text-RED rounded-full text-xs font-semibold flex flex-row items-center gap-1">
					Beyond Speedy{" "}
					<img
						className="w-5 object-cover"
						src={LittlePizza}
						alt="pizza"
					/>
				</span>
				<motion.h2
					viewport={{ once: true, amount: 0.7 }}
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: debouncedX }}
					transition={{
						type: "spring",
						stiffness: 80,
					}}
					className="text-center text-3xl text-white font-normal tracking-wider sm:text-5xl md:text-6xl">
					Ensure Your <span className="text-RED font-semibold">Food</span> is{" "}
					<br /> Delivered with Speed
				</motion.h2>
				<motion.p
					viewport={{ once: true, amount: 0.7 }}
					initial={{ opacity: 0, x: -100 }}
					whileInView={{ opacity: 1, x: debouncedX }}
					transition={{
						type: "spring",
						stiffness: 84,
					}}
					className="text-center text-white text-xs tracking-wide font-semibold sm:text-lg leading-5">
					Our mission is to satisfy your appetite with delectable <br /> dishes,
					delivered swiftly and at no extra cost
				</motion.p>
				<Link to="/menu">
					<button
						type="button"
						className="rounded-full uppercase bg-RED animate-fade-up hover:bg-PINK transition-all duration-100 hover:text-black text-white text-xs font-normal border-none py-3 tracking-wide px-5 md:text-base md:px-7 cursor-pointer">
						Order Quickly
					</button>
				</Link>
			</div>
		</div>
	);
}

export default SectionOne;
