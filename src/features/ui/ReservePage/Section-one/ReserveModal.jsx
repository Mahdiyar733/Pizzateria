/* eslint-disable react/prop-types */
import { AnimatePresence, motion } from "framer-motion";

function ReserveModal({ isVisible, children }) {
	return (
		<AnimatePresence>
			{isVisible && (
				<div
					className="w-dvw h-dvh backdrop-blur-[2px] backdrop-brightness-50 justify-center items-center flex fixed top-0 right-0 left-0 bottom-0"
					style={{ zIndex: 1000 }}>
					<motion.div
						initial={{ opacity: 0, scale: 0.2 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0.2 }}
						transition={{ type: "spring", stiffness: 85 }}
						style={{ zIndex: 100 }}
						className="w-80 h-80 bg-gray-200 rounded-lg p-7 flex flex-col items-center gap-3">
						{children}
					</motion.div>
				</div>
			)}
		</AnimatePresence>
	);
}

export default ReserveModal;
