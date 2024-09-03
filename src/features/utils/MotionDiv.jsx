import { motion } from "framer-motion";

// eslint-disable-next-line react/prop-types
function MotionDiv({ children, type = 1, delay = 0 }) {
	return (
		<>
			{type == 1 ? (
				<motion.div
					style={{ zIndex: 15 }}
					viewport={{ once: true, amount: 0.7 }}
					initial={{ opacity: 0, x: -100 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{
						type: "spring",
						stiffness: 84,
					}}>
					{children}
				</motion.div>
			) : type == 2 ? (
				<motion.div
					style={{ zIndex: 15 }}
					viewport={{ once: true, amount: 0.7 }}
					initial={{ opacity: 0, y: -100 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{
						type: "spring",
						stiffness: 84,
					}}>
					{children}
				</motion.div>
			) : (
				<motion.div
					style={{ zIndex: 15 }}
					viewport={{ once: true, amount: 0.7 }}
					initial={{ opacity: 0, y: 100 }}
					whileInView={{ opacity: 1, y: 0 }}
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
