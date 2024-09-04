import { useParams } from "react-router-dom";
import { chefs } from "../services/apiRestaurant";

function InfoChef() {
	const param = useParams();
	const id = param.chefId;
	const chef = chefs[id - 1];
	return (
		<div className="h-auto w-full bg-white bg-opacity-50 px-6 py-20 flex items-center flex-col">
			<div className="flex flex-col md:flex-row w-auto items-start px-5 gap-1">
				<img
					className="max-w-60 rounded-lg mb-4 self-center"
					src={chef.src}
					alt={chef.name}
				/>
				<h2 className="text-xl text-black font-semibold ">{chef.name}</h2>
				<h3 className="text-RED font-semibold text-sm mb-4">{chef.job}</h3>
				<h4 className="text-black font-normal text-base">
					<span className="font-semibold text-black">Work experience : </span>{" "}
					<span className="text-xl text-RED font-semibold">
						{chef.workYear}
					</span>{" "}
					years
				</h4>
				<h4 className="text-black font-normal text-base">
					<span className="font-semibold text-black mb-1">Age : </span>{" "}
					<span className="text-xl text-RED font-semibold">{chef.age}</span>{" "}
					years old
				</h4>
				<p className="text-black text-base text-left font-semibold text-opacity-60 tracking-wide pt-4 mt-4 border-t border-solid border-RED">
					{chef.des}
				</p>
			</div>
		</div>
	);
}

export default InfoChef;
