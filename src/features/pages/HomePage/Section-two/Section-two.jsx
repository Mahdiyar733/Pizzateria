import { useState } from "react";
import BigTitle from "../../../common/BigTitle";
import LittleTitle from "../../../common/LittleTitle";
import MotionDiv from "../../../common/MotionDiv";
import worker1 from "./worker1.png";
import worker2 from "./worker2.png";
import worker3 from "./worker3.png";

function SectionTwo() {
	const [isLoading1, setIsLoading1] = useState(true);
	const [isLoading2, setIsLoading2] = useState(true);
	const [isLoading3, setIsLoading3] = useState(true);
	return (
		<div
			id="OurOffering"
			className={`w-full bg-white bg-opacity-50 p-8 relative sm:p-12 lg:p-20 lg:px-24 xl:px-48 `}>
			<MotionDiv>
				<div className="flex flex-col items-start gap-3 md:gap-2 lg:gap-4">
					<LittleTitle color="text-RED">Our Offerings</LittleTitle>
					<BigTitle>
						Your Preferred Food <br />
						Delivery Companion
					</BigTitle>
				</div>
			</MotionDiv>
			<div className="flex justify-center items-center">
				<div className="grid grid-cols-1 grid-rows-3 items-center justify-center w-full gap-5 sm:gap-7 md:gap-4 mt-10 md:grid-cols-3 md:grid-rows-1 place-items-center lg:gap-6 lg:px-9 lg:mt-16 lg:max-w-[872px] md:max-w-[703px]">
					<MotionDiv
						type="3"
						delay="0.3">
						<div className="shadow-shdw h-80 lg:h-[330px] rounded-3xl w-full flex flex-col items-center justify-center p-2 pb-8 lg:pb-7 md:p-5 gap-3 max-w-[288px] min-w-[234px] md:min-w-fit bg-white">
							<img
								className="hidden"
								src={worker1}
								onLoad={() => setIsLoading1(false)}
								onError={() => setIsLoading1(false)}
								alt="worker1"
							/>
							{!isLoading1 ? (
								<img
									className="w-40"
									src={worker1}
									alt="worker1"
								/>
							) : (
								<div className="w-40 h-full bg-gray-200 skeleton"></div>
							)}
							<h4 className="text-black font-bold text-lg md:text-base lg:text-lg">
								Convenient Ordering
							</h4>
							<p className="text-center text-sm md:text-xs lg:text-sm font-normal text-black opacity-50">
								Ordering food requires just a<br /> few simple steps
							</p>
						</div>
					</MotionDiv>
					<MotionDiv
						type="3"
						delay="0.4">
						<div className="shadow-shdw h-80 lg:h-[330px] rounded-3xl w-full flex flex-col items-center justify-center p-2 pb-8 lg:pb-7 md:p-5 gap-3 max-w-[288px] min-w-[234px] md:min-w-fit bg-white">
							<img
								className="w-40"
								src={worker2}
								alt="worker2"
								onLoad={() => setIsLoading2(false)}
								onError={() => setIsLoading2(false)}
							/>
							{!isLoading2 ? (
								<img
									className="hidden"
									src={worker2}
									alt="worker2"
								/>
							) : (
								<div className="w-40 h-full skeleton bg-gray-200"></div>
							)}
							<h4 className="text-black font-bold text-lg md:text-base lg:text-lg">
								Quickest Delivery{" "}
							</h4>
							<p className="text-center text-sm md:text-xs lg:text-sm font-normal text-black opacity-50">
								Consistently Timely Delivery, <br /> Even Faster
							</p>
						</div>
					</MotionDiv>
					<MotionDiv
						type="3"
						delay="0.5">
						<div className="shadow-shdw h-80 lg:h-[330px] rounded-3xl w-full flex flex-col items-center  p-2 pb-8 lg:pb-7 md:p-5 gap-3 max-w-[288px] min-w-[234px] md:min-w-fit bg-white justify-center">
							<img
								className="hidden"
								style={{ height: "167.65px" }}
								src={worker3}
								alt="worker3"
								onLoad={() => setIsLoading3(false)}
								onError={() => setIsLoading3(false)}
							/>
							{!isLoading3 ? (
								<img
									className="w-40"
									style={{ height: "167.65px" }}
									src={worker3}
									alt="worker3"
								/>
							) : (
								<div
									className="w-40 skeleton bg-gray-200"
									style={{ height: "167.65px" }}></div>
							)}
							<h4 className="text-black font-bold text-lg md:text-base lg:text-lg">
								Superior Quality{" "}
							</h4>
							<p className="text-center text-sm md:text-xs lg:text-sm font-normal text-black opacity-50">
								For us, quality is paramount, <br /> not just speed
							</p>
						</div>
					</MotionDiv>
				</div>
			</div>
		</div>
	);
}

export default SectionTwo;
