import BigTitle from "../../../utils/BigTitle";
import LittleTitle from "../../../utils/LittleTitle";
import Voucher from "./Voucher";
import MotionDiv from "./../../../utils/MotionDiv";

function Section2() {
	return (
		<div className="h-auto w-full bg-white bg-opacity-50 px-8 py-20 flex items-center flex-col">
			<MotionDiv
				type="2"
				className="flex flex-col items-center gap-3 md:gap-2 lg:gap-4">
				<LittleTitle color="text-RED">Voucher Discount</LittleTitle>
				<BigTitle pos="text-center">
					Get a voucher discount without <br /> minimum purchase
				</BigTitle>
			</MotionDiv>
			<div className="grid grid-cols-1 grid-rows-4 sm:grid-cols-2 sm:grid-rows-2 gap-4 place-items-center sm:max-w-[681px] w-full mt-14 sm:mt-20 base:gap-7">
				<Voucher
					percent="20"
					val="50"
					bg="bg-gradient-to-br to-yellow-300 from-RED"
				/>
				<Voucher
					percent="90"
					val="10"
					bg="bg-gradient-to-br to-pink-300 from-blue-400"
				/>
				<Voucher
					percent="50"
					val="40"
					bg="bg-gradient-to-br from-lime-400 to-sky-500"
				/>
				<Voucher
					percent="35"
					val="80"
					bg="bg-gradient-to-br from-purple-500 to-red-400"
				/>
			</div>
		</div>
	);
}

export default Section2;
