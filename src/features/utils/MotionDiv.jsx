/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useDebounce } from "use-debounce";

function MotionDiv({
	children,
	type = 1,
	delay = 0,
	className,
	handler = null,
}) {
	const [debouncedX] = useDebounce(0, 500);

	return (
		<>
			{type == 1 ? (
				<motion.div
					onClick={handler}
					style={{ zIndex: 15 }}
					viewport={{ once: true, amount: 0.7 }}
					initial={{ opacity: 0, x: -100 }}
					whileInView={{ opacity: 1, x: debouncedX }}
					className={className}
					transition={{
						type: "spring",
						stiffness: 84,
					}}>
					{children}
				</motion.div>
			) : type == 2 ? (
				<motion.div
					onClick={handler}
					style={{ zIndex: 15 }}
					viewport={{ once: true, amount: 0.7 }}
					initial={{ opacity: 0, y: -55 }}
					whileInView={{ opacity: 1, y: debouncedX }}
					className={className}
					transition={{
						type: "spring",
						stiffness: 84,
					}}>
					{children}
				</motion.div>
			) : (
				<motion.div
					onClick={handler}
					style={{ zIndex: 15 }}
					viewport={{ once: true, amount: 0.7 }}
					initial={{ opacity: 0, y: 55 }}
					whileInView={{ opacity: 1, y: debouncedX }}
					className={className}
					transition={{
						type: "spring",
						stiffness: 84,
						delay: delay,
					}}>
					{children}
				</motion.div>
			)}
		</>
	);
}

export default MotionDiv;
