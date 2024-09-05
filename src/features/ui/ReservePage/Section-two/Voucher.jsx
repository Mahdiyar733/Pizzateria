/* eslint-disable react/prop-types */
import { useDebounce } from "use-debounce";
import "../../../../index.css";
import DiscountPic from "./Discount.png";
import { motion } from "framer-motion";

function Voucher({ bg, percent, val }) {
	const [debouncedX] = useDebounce(0, 500);

	return (
		<motion.div
			viewport={{ once: true, amount: 0.6 }}
			initial={{ opacity: 0, y: -30 }}
			whileInView={{ opacity: 1, y: debouncedX }}
			transition={{ type: "just" }}
			className={`${bg} w-full h-auto rounded-lg flex flex-col items-start p-6 max-w-[332px] relative`}>
			<span className="font-normal text-white mb-5 text-2xl">Voucher</span>
			<span className="font-bold text-white text-5xl mb-2">{percent}%</span>
			<progress
				className="w-full"
				value={val}
				max="100"></progress>
			<span className="text-white text-xs">{val}% used</span>
			<img
				src={DiscountPic}
				alt="discount"
				className="w-14 absolute top-5 right-6"
			/>
		</motion.div>
	);
}

export default Voucher;