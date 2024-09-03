import ArrowRightSvg from "../../../../svg/ArrowRightSvg";
import Pizza from "./Pizza";
import MotionDiv from "../../../utils/MotionDiv";
import MenuHeader from "./MenuHeader";
// pictures -------
import Pizza1 from "./Pizza1.png";
import Pizza2 from "./Pizza2.png";
import Pizza3 from "./Pizza3.png";
import Pizza4 from "./Pizza4.png";
import { Link } from "react-router-dom";

function SectionThree() {
	return (
		<div
			id="OurSelection"
			className={`w-full bg-white bg-opacity-50 p-8 relative sm:p-12 lg:p-20 md:pb-0 lg:px-24 xl:px-48 pt-9 sm:pt-9 lg:pt-9 scroll-mt-10`}>
			<MotionDiv>
				<MenuHeader />
			</MotionDiv>
			<div className="flex flex-col items-center gap-7 sm:gap-9 sm:flex-row justify-evenly">
				<MotionDiv type="3">
					<div
						className="carousel carousel-center pb-5 px-3 rounded-box space-x-4 h-[25rem] mt-10 lg:mt-16 lg:max-w-xl xl:max-w-2xl md:max-w-sm max-w-xs overflow-y-hidden"
						style={{ scrollbarWidth: "auto" }}>
						<div className="carousel-item">
							<Pizza
								src={Pizza1}
								name="Sausage Pizza"
								price="7,49"
							/>
						</div>
						<div className="carousel-item">
							<Pizza
								src={Pizza2}
								name="Margherita pizza"
								price="6,40"
							/>
						</div>
						<div className="carousel-item">
							<Pizza
								src={Pizza3}
								name="Meatlovers pizza"
								price="7,19"
							/>
						</div>
						<div className="carousel-item">
							<Pizza
								src={Pizza4}
								name="SUPER SUPREME"
								price="7,66"
							/>
						</div>
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
