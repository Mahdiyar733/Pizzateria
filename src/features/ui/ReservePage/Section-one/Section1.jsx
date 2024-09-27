/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import TablePic from "./table.png";
import LittleTitle from "../../../utils/LittleTitle";
import BigTitle from "../../../utils/BigTitle";
import MotionDiv from "../../../utils/MotionDiv";
import ReserveForm from "./ReserveForm";
import ReserveModalBox from "./ReserveModalBox";

export const ReserveContext = createContext();

function Section1() {
	const [errors, setErrors] = useState({});
	const [imgIsLoading, setImgIsLoading] = useState(true);
	const [formData, setFormData] = useState({
		name: "",
		phone: "",
		ppl: "",
	});

	return (
		<ReserveContext.Provider
			value={{
				formData,
				setFormData,
				errors,
				setErrors,
			}}>
			<div className="relative h-auto bg-RED w-full flex flex-col py-9 px-10 md:px-14 base:px-20 sm:py-8 md:py-16 gap-5 justify-evenly lg:py-12 lg:px-32 xl:px-56 base:gap-3 xl:gap-5 md:gap-2">
				<div className="flex flex-col items-center gap-3 md:items-start animate-fade-up animate-duration-700">
					<LittleTitle color="text-white">reservation</LittleTitle>
					<BigTitle
						pos="text-center md:text-start"
						font="font-bold">
						Turn your dining dreams into <br /> reality by booking a table with
						us
					</BigTitle>
				</div>
				<div className="flex flex-row items-center justify-center md:justify-between gap-8">
					<MotionDiv type="1">
						<ReserveForm />
					</MotionDiv>
					<img
						className="hidden"
						onLoad={() => setImgIsLoading(false)}
						onError={() => setImgIsLoading(false)}
						src={TablePic}
					/>
					{!imgIsLoading ? (
						<img
							className="hidden md:block object-cover h-80 base:-mt-20 animate-fade-left animate-duration-700"
							src={TablePic}
						/>
					) : (
						<div className="h-80 base:-mt-20 animate-fade-left animate-duration-700 skeleton w-80 bg-gray-500"></div>
					)}
				</div>
				<ReserveModalBox />
			</div>
		</ReserveContext.Provider>
	);
}

export default Section1;
