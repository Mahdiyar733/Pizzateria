import LittleTitle from "../../../utils/LittleTitle";

// eslint-disable-next-line react/prop-types
function MenuHeader({ name, isNamed }) {
	return (
		<div className="flex flex-col items-center gap-3 md:gap-2 lg:gap-4">
			<LittleTitle color="text-RED">Our Selection</LittleTitle>
			<h4
				className={`text-2xl text-black font-semibold sm:text-3xl lg:text-4xl md:font-bold text-center`}>
				{isNamed && "Hi"}{" "}
				{isNamed && <span className="text-RED capitalize">{name}</span>}
				{isNamed && ", there's a"} A Menu That Will Always <br /> Capture Your
				Heart
			</h4>
		</div>
	);
}

export default MenuHeader;
