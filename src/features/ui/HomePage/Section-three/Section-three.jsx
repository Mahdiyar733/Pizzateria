import ArrowRightSvg from "../../../../svg/ArrowRightSvg";
import Pizza from "./Pizza";
import MotionDiv from "../../../utils/MotionDiv";
import MenuHeader from "./MenuHeader";
import { Link, useLoaderData } from "react-router-dom";
import IngredientsModal from "../../../menu/IngredientsModal";

function SectionThree() {
	const menu = useLoaderData();
	const littleMenu = [menu[4], menu[6], menu[9], menu[11]];

	return (
		<div
			id="OurSelection"
			className={`w-full bg-white bg-opacity-50 p-8 sm:p-12 lg:p-20 md:pb-0 lg:px-24 xl:px-48 pt-9 sm:pt-9 lg:pt-9 scroll-mt-10 `}>
			<IngredientsModal />
			<MotionDiv>
				<MenuHeader />
			</MotionDiv>
			<div className="flex flex-col items-center gap-7 sm:gap-9 sm:flex-row justify-evenly">
				<MotionDiv type="3">
					<div
						className="carousel carousel-center pb-5 px-3 rounded-box space-x-4 h-[25rem] mt-10 lg:mt-16 lg:max-w-xl xl:max-w-2xl md:max-w-sm max-w-xs overflow-y-hidden"
						style={{ scrollbarWidth: "auto" }}>
						{littleMenu.map((item) => (
							<div
								key={item.id}
								className="carousel-item">
								<Pizza
									key={item.id}
									item={item}
								/>
							</div>
						))}
					</div>
				</MotionDiv>
				<MotionDiv type="1">
					<Link to="/menu">
						<button className="btn flex flex-row items-center gap-1 text-white rounded-full btn-sm sm:btn-md bg-RED border-none hover:bg-PINK transition-all duration-300 font-normal">
							Go to Menu <ArrowRightSvg />
						</button>
					</Link>
				</MotionDiv>
			</div>
		</div>
	);
}

export default SectionThree;
