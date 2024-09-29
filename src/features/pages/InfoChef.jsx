import { useNavigate, useParams } from "react-router-dom";
import { chefs } from "../services/apiRestaurant";
import { useEffect, useState } from "react";
import { ScrollUp } from "../common/helpers";
function InfoChef() {
	const [isLoading, setIsLoading] = useState(true);

	const param = useParams();
	const id = param.chefId;
	const chef = chefs[id - 1];
	const nav = useNavigate();

	useEffect(() => {
		ScrollUp();
	}, []);

	return (
		<div className="h-auto w-full bg-white bg-opacity-50 px-6 py-20 flex items-center flex-col">
			<div className="flex flex-col md:flex-row w-auto items-start px-5 gap-1">
				<div className="w-full flex flex-col items-center md:flex-1">
					<img
						className="hidden"
						src={chef.src}
						alt={chef.name}
						onLoad={() => setIsLoading(false)}
						onError={() => setIsLoading(false)}
					/>
					{!isLoading ? (
						<img
							className="max-w-60 rounded-lg mb-4 self-center"
							src={chef.src}
							alt={chef.name}
						/>
					) : (
						<div className="max-w-60 w-60 h-60 rounded-lg mb-4 self-center skeleton bg-gray-200"></div>
					)}
					<h2 className="text-xl text-black font-semibold ">{chef.name}</h2>
					<h3 className="text-RED font-semibold text-sm mb-4 ">{chef.job}</h3>
					<div className="flex flex-col bg-RED p-3 gap-1 rounded-lg w-full max-w-[393px] md:max-w-[260px]">
						<h4 className="text-white font-normal text-base flex justify-between">
							<span className="font-semibold text-white">
								Work experience :{" "}
							</span>{" "}
							<span className="text-base text-[#2B2B2B] tracking-wide font-semibold">
								{chef.workYear} years
							</span>
						</h4>
						<h4 className="text-white font-normal text-base flex justify-between">
							<span className="font-semibold text-white">Age : </span>{" "}
							<span className="text-base text-[#2B2B2B] tracking-wide font-semibold">
								{chef.age} years old
							</span>
						</h4>
					</div>
				</div>
				<div className="relative flex flex-col mt-4 border-t border-solid border-RED md:mt-0 md:border-t-0 md:border-l md:flex-1 lg:flex-[2] max-h-96 md:max-h-[396px] md:min-h-[396px] overflow-y-scroll infoChef">
					<p className="text-black text-base text-left font-semibold text-opacity-60 tracking-wide pt-4 md:pt-0 md:px-7 lg:text-lg lg:font-normal">
						{chef.des}
					</p>
					<button
						onClick={() => nav(-1)}
						style={{ zIndex: 100 }}
						className="px-6 my-5 py-2 bg-RED text-white rounded-lg w-32 md:ml-7 hover:bg-PINK transition-colors duration-300 ">
						Back
					</button>
				</div>
			</div>
		</div>
	);
}

export default InfoChef;
