/* eslint-disable react/prop-types */
function LittleTitle({ children, color }) {
	return (
		<h5 className={`uppercase text-sm ${color} font-semibold tracking-widest`}>
			{children}
		</h5>
	);
}

export default LittleTitle;
