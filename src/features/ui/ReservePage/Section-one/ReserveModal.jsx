/* eslint-disable react/prop-types */
import { AnimatePresence, motion } from "framer-motion";

function ReserveModal({ isVisible, children }) {
	return (
		<AnimatePresence>
			{isVisible && (
				<motion.div
					className="w-dvw h-dvh backdrop-blur-[1px] backdrop-brightness-50 justify-center items-center flex fixed top-0 right-0 left-0 bottom-0"
					style={{ zIndex: 1000 }}
					initial={{ opacity: 0, scale: 0.95 }}
					animate={{ opacity: 1, scale: 1 }}
					exit={{ opacity: 0, scale: 0.95 }}
					transition={{ type: "just", delayChildren: 0.3 }}>
					<motion.div
						initial={{ opacity: 0, scale: 0.2 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0.8 }}
						transition={{ type: "just" }}
						style={{ zIndex: 100 }}
						className="w-80 h-80 bg-gray-200 rounded-lg p-7 flex flex-col items-center gap-3">
						{children}
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}

export default ReserveModal;
