import { useEffect, useState } from "react";
import avatarGirl from "./avatar.png";
const opinions = [
	{
		name: "Mahdiyar Rezaei",
		firstName: "Mahdiyar",
		job: "Chief Executive Officer",
		avatar: "https://i.pravatar.cc/150?u=qw",
		rate: "8",
		opinion: `At Pizzateria, every bite of their delicious pizzas is a flavor explosion that keeps
                me coming back for more. The crust is perfectly crispy, and the fresh toppings make 
                each slice a delightful experience.`,
		ani: "animate-fade-down",
	},
	{
		name: "Aracelly Xaviera",
		firstName: "Aracelly",
		job: "Culinary Enthusiast",
		avatar: avatarGirl,
		rate: "9",
		opinion: `Pizzateria is exceptional. With a wide array of delicious meals and excellent service,
                including remarkably fast delivery, I wholeheartedly recommend Pizzateria to you.
                Plus, the staff is friendly and better.`,
		ani: "animate-fade-right",
	},
	{
		name: "Katarina Sanchez",
		firstName: "Katarina",
		job: "Restaurant manager",
		avatar: "https://i.pravatar.cc/150?u=ggg",
		rate: "7.5",
		opinion: `The moment you walk in, the warm, inviting atmosphere makes you feel right at home.
                Their menu is a delightful mix of classic favorites and innovative creations.
                I can't resist their margherita pizza.`,
		ani: "animate-fade-left",
	},
];

function CustomerSay() {
	const [index, setIndex] = useState(0);
	const [imgIsLoading, setImgIsLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIndex((i) => i + 1);
			if (index === opinions.length - 1) setIndex(0);
		}, 3500);

		setImgIsLoading(true);

		return () => clearTimeout(timer);
	}, [index]);

	return (
		<div
			className={`p-1.5 mt-6 flex flex-col items-start justify-between min-h-[192px] ${opinions[index].ani}`}
			key={index}>
			<p className="text-sm leading-5 sm:leading-6 lg:text-base xl:text-lg ">
				&quot; {opinions[index].opinion} &quot;
			</p>
			<div className="flex flex-col items-center gap-3 mt-6">
				<div className="flex flex-row items-center gap-3 ">
					<img
						onLoad={() => setImgIsLoading(false)}
						className="hidden"
						src={opinions[index].avatar}
						alt="avatar"
					/>
					{imgIsLoading ? (
						<div className="w-12 h-12 overflow-hidden rounded-full skeleton bg-gray-700"></div>
					) : (
						<img
							onLoad={() => setImgIsLoading(false)}
							onError={() => setImgIsLoading(false)}
							className="w-12 overflow-hidden rounded-full"
							src={opinions[index].avatar}
							alt="avatar"
						/>
					)}
					<div className="flex flex-col items-center gap-1 justify-center">
						<span className="text-sm text-black font-normal">
							{opinions[index].name}
						</span>
						<span className="text-xs">{opinions[index].job}</span>
					</div>
				</div>
			</div>
			<i className="mt-2 text-black opacity-70 text-sm">
				{opinions[index].firstName}&apos;s Rate :{" "}
				<span className="text-RED text-base font-semibold">
					{opinions[index].rate}
				</span>
				/10
			</i>
		</div>
	);
}

export default CustomerSay;
