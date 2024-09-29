/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import BigTitle from "../../../common/BigTitle";
import LittleTitle from "../../../common/LittleTitle";
import MotionDiv from "./../../../common/MotionDiv";
import { chefs } from "../../../services/apiRestaurant";
import { useState } from "react";

function Section3() {
	return (
		<div className="h-auto w-full bg-white bg-opacity-50 px-8 py-20 flex items-center flex-col">
			<MotionDiv
				type="2"
				className="flex flex-col items-center gap-3 md:gap-2 lg:gap-4 mb-14 sm:mb-20">
				<LittleTitle color="text-RED">Best chef</LittleTitle>
				<BigTitle pos="text-center">The best chef at Pizzateria</BigTitle>
			</MotionDiv>
			<div className="grid grid-cols-1 grid-rows-3 gap-10 sm:gap-4 place-items-center sm:grid-cols-3 sm:grid-rows-1">
				{chefs.map((item) => {
					return (
						<Chef
							key={item.id}
							name={item.name}
							job={item.job}
							src={item.src}
							id={item.id}
						/>
					);
				})}
			</div>
		</div>
	);
}

function Chef({ name, src, job, id }) {
	const nav = useNavigate();
	const [isLoading, setIsLoading] = useState(true);

	return (
		<MotionDiv
			type="3"
			handler={() => nav(`/chef/${id}`)}
			className="flex flex-col items-center w-1/2 min-w-[155px] max-w-[197px] cursor-pointer hover:outline-2 transition-[outline-color] duration-300 hover:outline-grey-200 hover:outline hover: outline-offset-[12px] rounded-md"
			key={id}>
			<img
				className="hidden"
				src={src}
				alt="chef"
				onLoad={() => setIsLoading(false)}
				onError={() => setIsLoading(false)}
			/>
			{!isLoading ? (
				<img
					className="rounded-full"
					src={src}
					alt="chef"
				/>
			) : (
				<div className="rounded-full w-36 h-36 skeleton bg-gray-200"></div>
			)}
			<span className="text-black font-semibold text-lg mt-5 mb-1 text-nowrap">
				{name}
			</span>
			<span className="text-RED font-normal text-sm">{job}</span>
		</MotionDiv>
	);
}

export default Section3;
