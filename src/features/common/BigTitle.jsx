/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
function BigTitle({
	children,
	pos = "text-start",
	font = "font-semibold lg:text-4xl",
}) {
	return (
		<h4
			className={`${pos} text-2xl text-black ${font} sm:text-3xl md:font-bold`}>
			{children}
		</h4>
	);
}

export default BigTitle;
