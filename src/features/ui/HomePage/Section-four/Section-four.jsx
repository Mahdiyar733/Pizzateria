import Rating from "./Rating";
import avatar from "./avatar.png";
import chief from "./chief.png";
import onion from "./onion.png";
import fotor from "./fotor.png";
import mashroom from "./mashroom.png";
import papper from "./papper.png";
import MotionDiv from "../../../utils/MotionDiv";
import { motion } from "framer-motion";

function SectionFour() {
	return (
		<div
			id="Customer"
			className="flex flex-row items-center bg-white bg-opacity-50 p-8 relative sm:p-12 lg:p-20 lg:px-24 xl:px-48 pt-9 sm:pt-9 lg:pt-0 gap-4 lg:gap-9">
			<MotionDiv className="w-full">
				<div className="flex flex-col items-start gap-3 md:gap-2 lg:gap-4">
					<h5 className="uppercase text-sm text-RED font-semibold tracking-widest">
						Customer Testimonials{" "}
					</h5>
					<h4 className="text-2xl text-black font-semibold sm:text-3xl lg:text-4xl md:font-bold">
						What Customers Have <br />
						to Say About Us
					</h4>
				</div>
				<div className="p-1.5 mt-6 flex flex-col items-start justify-between">
					<p className="text-sm leading-5 sm:leading-6 lg:text-base xl:text-lg">
						&quot; Pizzateria is exceptional. With a wide array of delicious
						meals and excellent service, including remarkably fast delivery, I
						wholeheartedly recommend Pizzateria to you. &quot;
					</p>
					<div className="flex flex-col items-center gap-3 mt-6">
						<div className="flex flex-row items-center gap-3">
							<img
								className="w-12"
								src={avatar}
								alt="avatar"
							/>
							<div className="flex flex-col items-center gap-1 justify-center">
								<span className="text-sm text-black font-normal">
									Aracelly Xaviera
								</span>
								<span className="text-xs">Culinary Enthusiast</span>
							</div>
						</div>
						<Rating size="rating-sm" />
					</div>
				</div>
			</MotionDiv>

			<div className="hidden md:flex relative items-end justify-center w-[480px] h-[400px] lg:w-[800px] lg:h-[600px] min-w-[252px] lg:min-w-[400px]">
				<motion.img
					viewport={{ once: true, amount: 0.7 }}
					initial={{ opacity: 0, x: -100 }}
					whileInView={{ opacity: 1, x: 0 }}
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
					whileInView={{ opacity: 1, y: 0 }}
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
					whileInView={{ opacity: 1, y: 0 }}
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
