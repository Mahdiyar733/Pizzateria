/* eslint-disable react/prop-types */
import { AnimatePresence, motion } from "framer-motion";

function ModalBoxAnimate({ isVisible, children, handler, h = "h-80" }) {
	return (
		<AnimatePresence>
			{isVisible && (
				<motion.div
					onClick={handler}
					className="w-dvw h-dvh backdrop-blur-[1px] backdrop-brightness-50 justify-center items-center flex fixed top-0 right-0 left-0 bottom-0 cursor-pointer"
					style={{ zIndex: 1000 }}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ type: "just", delayChildren: 0.3 }}>
					<motion.div
						onClick={(e) => e.stopPropagation()}
						initial={{ opacity: 0, scale: 0.2 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0.8 }}
						transition={{ type: "just" }}
						style={{ zIndex: 100 }}
						className={`w-80 ${h} bg-gray-200 rounded-lg p-7 flex flex-col items-center gap-3 cursor-auto`}>
						{children}
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}

export default ModalBoxAnimate;
