import chief from "./chief.png";
import onion from "./onion.png";
import fotor from "./fotor.png";
import mashroom from "./mashroom.png";
import papper from "./papper.png";
import MotionDiv from "../../../utils/MotionDiv";
import { motion } from "framer-motion";
import CustomerSay from "./CustomerSay";
import LittleTitle from "../../../utils/LittleTitle";
import BigTitle from "../../../utils/BigTitle";
import { useDebounce } from "use-debounce";

function SectionFour() {
	const [debouncedX] = useDebounce(0, 150);

	return (
		<div
			id="Customer"
			className="flex flex-row items-center bg-white bg-opacity-50 p-8 relative sm:p-12 lg:p-20 lg:px-24 xl:px-48 pt-9 sm:pt-9 lg:pt-0 gap-4 lg:gap-9 scroll-mt-32">
			<MotionDiv className="w-full">
				<div className="flex flex-col items-start gap-3 md:gap-2 lg:gap-4">
					<LittleTitle color="text-RED">Customer Testimonials</LittleTitle>
					<BigTitle>
						What Customers Have <br />
						to Say About Us
					</BigTitle>
				</div>
				<CustomerSay />
			</MotionDiv>

			<div className="hidden md:flex relative items-end justify-center w-[480px] h-[400px] lg:w-[800px] lg:h-[600px] min-w-[252px] lg:min-w-[400px]">
				<motion.img
					viewport={{ once: true, amount: 0.7 }}
					initial={{ opacity: 0, x: -100 }}
					whileInView={{ opacity: 1, x: debouncedX }}
					transition={{
						delay: "0.3",
						type: "spring",
						stiffness: 93,
					}}
					src={onion}
					alt="onion"
					className="absolute -left-4 top-12 lg:-left-2 lg:top-28 w-20 lg:w-24 z-20"
				/>
				<motion.img
					viewport={{ once: true, amount: 0.7 }}
					initial={{ opacity: 0, y: 100 }}
					whileInView={{ opacity: 1, y: debouncedX }}
					transition={{
						delay: "0.4",
						type: "spring",
						stiffness: 93,
					}}
					src={mashroom}
					alt="mashroom"
					className="absolute -right-8 bottom-36 lg:-right-12 xl:-right-9 lg:bottom-56 w-16 lg:w-24 z-20"
				/>
				<motion.img
					viewport={{ once: true, amount: 0.7 }}
					initial={{ opacity: 0, y: -100 }}
					whileInView={{ opacity: 1, y: debouncedX }}
					transition={{
						delay: "0.5",
						type: "spring",
						stiffness: 93,
					}}
					src={fotor}
					alt="fotor"
					className="absolute -right-8 top-12 lg:-right-7 lg:top-28 w-32 lg:w-40 z-20"
				/>
				<motion.img
					viewport={{ once: true, amount: 0.7 }}
					initial={{ opacity: 0, x: -100 }}
					whileInView={{ opacity: 1, x: -5 }}
					transition={{
						delay: "0.6",
						type: "spring",
						stiffness: 93,
					}}
					src={papper}
					alt="papper"
					className="absolute -left-8 bottom-6 lg:-left-7 lg:bottom-10 xl:-left-4 w-20 lg:w-24 z-20"
				/>
				<div className="bg-RED w-full lg:w-auto lg:left-5 lg:right-1 xl:left-6 xl:right-2 h-[65%] z-0 absolute bottom-0 right-0 left-0 rounded-tl-[55px] rounded-bl-[55px] lg:rounded-bl-[76px] rounded-tr-[130px] lg:h-[60%] lg:rounded-tl-[76px] lg:rounded-tr-[160px] xl:rounded-bl-3xl"></div>
				<img
					className="object-cover w-full h-[90%] object-center z-10"
					src={chief}
					alt="chief"
				/>
			</div>
		</div>
	);
}

export default SectionFour;
