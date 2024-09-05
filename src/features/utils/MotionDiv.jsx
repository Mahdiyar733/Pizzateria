/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function MotionDiv({
	children,
	type = 1,
	delay = 0,
	className,
	handler = null,
}) {
	const [isMobile, setIsMobile] = useState(true);

	useEffect(() => {
		if (window.innerWidth > 773) setIsMobile(false);
	}, []);
	return (
		<>
			{isMobile && (
				<div
					onClick={handler}
					style={{ zIndex: 15 }}
					className={className}>
					{children}
				</div>
			)}
			{!isMobile &&
				(type == 1 ? (
					<motion.div
						onClick={handler}
						style={{ zIndex: 15 }}
						viewport={{ once: true, amount: 0.7 }}
						initial={{ opacity: 0, x: -100 }}
						whileInView={{ opacity: 1, x: 0 }}
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
						whileInView={{ opacity: 1, y: 0 }}
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
						whileInView={{ opacity: 1, y: 0 }}
						className={className}
						transition={{
							type: "spring",
							stiffness: 84,
							delay: delay,
						}}>
						{children}
					</motion.div>
				))}
		</>
	);
}

export default MotionDiv;
