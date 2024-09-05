/* eslint-disable react/prop-types */
import { AnimatePresence, motion } from "framer-motion";
function Alert({ isVisible, children }) {
	return (
		<AnimatePresence>
			{isVisible && (
				<motion.div
					initial={{ opacity: 0, y: -30 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: 35 }}
					transition={{ type: "spring", stiffness: 85 }}
					className="fixed bottom-10 right-10 bg-gradient-to-r from-lime-500 to-green-300 text-black rounded-lg px-5 py-3 text-base font-normal"
					style={{ zIndex: 100 }}>
					{children}
				</motion.div>
			)}
		</AnimatePresence>
	);
}

export default Alert;
