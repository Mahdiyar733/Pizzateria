import GithubSvg from "../../icons/GithubSvg";
import LinkedinSvg from "../../icons/LinkdinSvg";
import TelegramSvg from "../../icons/TelegramSvg";
import Logo from "./Navbar/LogoPizza.png";

function Footer() {
	return (
		<footer className="footer footer-center bg-white text-primary-content px-6 pb-4 pt-0">
			<div className="sm:px-9 md:px-2 base:px-14 xl:px-32 md:justify-between h-full w-full pt-10 border-opacity-50 flex flex-col md:flex-row-reverse items-center gap-10 sm:gap-12">
				<aside className="flex justify-center items-center md:items-start flex-col gap-3 text-black md:min-w-[280px] lg:min-w-[390px]">
					<div className="flex flex-row items-center gap-2">
						<img
							className="w-20"
							src={Logo}
							alt="logo"
						/>
						<h2 className="text-2xl font-bold">Pizzateria</h2>
					</div>
					<p className="font-normal opacity-50 text-center md:text-start sm:text-base md:text-xs lg:text-base">
						Our mission is to satisfy your hunger with <br /> tasty food,
						delivered quickly and at no charge
					</p>
					<nav>
						<div className="grid grid-flow-col gap-4 mt-2">
							<div
								className="tooltip tooltip-error tooltip-left"
								data-tip="Telegram">
								<a
									className="cursor-pointer"
									href="https://telegram.me/Mahdiyar733"
									target="_blank">
									<TelegramSvg color="#f54748" />
								</a>
							</div>
							<div
								className="tooltip tooltip-error"
								data-tip="Linkedin">
								<a
									className=" cursor-pointer"
									href="https://www.linkedin.com/in/mahdiyar-rezaei-1644ba2b9/"
									target="_blank">
									<LinkedinSvg color="#f54748" />
								</a>
							</div>
							<div
								className="tooltip tooltip-error tooltip-right"
								data-tip="Github">
								<a
									className=" cursor-pointer"
									href="https://github.com/Mahdiyar733"
									target="_blank">
									<GithubSvg color="#f54748" />
								</a>
							</div>
						</div>
					</nav>
				</aside>
				<main className="grid grid-cols-3 grid-rows-1 w-full gap-7 md:gap-3 ">
					<div className="grid grid-cols-1 grid-rows-5 text-black gap-0 ">
						<span className="text-sm font-semibold mb-2 sm:text-lg md:text-base md:text-start">
							Regarding
						</span>
						<span className="text-gray-500 md:hover:translate-x-2 text-xs flex justify-center items-center font-normal opacity-80 hover:opacity-100 hover:text-gray-800 transition-all duration-300 cursor-pointer sm:text-base md:text-sm md:justify-start">
							Our Story
						</span>
						<span className="text-gray-500 md:hover:translate-x-2 text-xs flex justify-center items-center font-normal opacity-80 hover:opacity-100 hover:text-gray-800 transition-all duration-300 cursor-pointer sm:text-base md:text-sm md:justify-start">
							Attributes
						</span>
						<span className="text-gray-500 md:hover:translate-x-2 text-xs flex justify-center items-center font-normal opacity-80 hover:opacity-100 hover:text-gray-800 transition-all duration-300 cursor-pointer sm:text-base md:text-sm md:justify-start">
							Updates
						</span>
						<span className="text-gray-500 md:hover:translate-x-2 text-xs flex justify-center items-center font-normal opacity-80 hover:opacity-100 hover:text-gray-800 transition-all duration-300 cursor-pointer sm:text-base md:text-sm md:justify-start">
							Selection
						</span>
					</div>
					<div className="grid grid-cols-1 grid-rows-5 text-black gap-0">
						<span className="text-sm font-semibold mb-2 sm:text-lg md:text-base md:text-start">
							Enterprise
						</span>
						<span className="text-gray-500 md:hover:translate-x-2 text-xs flex justify-center items-center font-normal opacity-80 hover:opacity-100 hover:text-gray-800 transition-all duration-300 cursor-pointer sm:text-base md:text-sm md:justify-start text-nowrap">
							Why Pizzateria?
						</span>
						<span className="text-gray-500 md:hover:translate-x-2 text-xs flex justify-center items-center font-normal opacity-80 hover:opacity-100 hover:text-gray-800 transition-all duration-300 cursor-pointer sm:text-base md:text-sm md:justify-start text-nowrap">
							Partner With Us
						</span>
						<span className="text-gray-500 md:hover:translate-x-2 text-xs flex justify-center items-center font-normal opacity-80 hover:opacity-100 hover:text-gray-800 transition-all duration-300 cursor-pointer sm:text-base md:text-sm md:justify-start">
							FAQ
						</span>
						<span className="text-gray-500 md:hover:translate-x-2 text-xs flex justify-center items-center font-normal opacity-80 hover:opacity-100 hover:text-gray-800 transition-all duration-300 cursor-pointer sm:text-base md:text-sm md:justify-start">
							Blog
						</span>
					</div>
					<div className="grid grid-cols-1 grid-rows-5 text-black gap-0">
						<span className="text-sm font-semibold mb-2 sm:text-lg md:text-base md:text-start">
							Assistance
						</span>
						<span className="text-gray-500 md:hover:translate-x-2 text-xs flex justify-center items-center font-normal opacity-80 hover:opacity-100 hover:text-gray-800 transition-all duration-300 cursor-pointer sm:text-base md:text-sm md:justify-start">
							Account
						</span>
						<span className="text-gray-500 md:hover:translate-x-2 text-xs flex justify-center items-center font-normal opacity-80 hover:opacity-100 hover:text-gray-800 transition-all duration-300 cursor-pointer sm:text-base md:text-sm md:justify-start">
							Support Center
						</span>
						<span className="text-gray-500 md:hover:translate-x-2 text-xs flex justify-center items-center font-normal opacity-80 hover:opacity-100 hover:text-gray-800 transition-all duration-300 cursor-pointer sm:text-base md:text-sm md:justify-start">
							Feedback
						</span>
						<span className="text-gray-500 md:hover:translate-x-2 text-xs flex justify-center items-center font-normal opacity-80 hover:opacity-100 hover:text-gray-800 transition-all duration-300 cursor-pointer sm:text-base md:text-sm md:justify-start">
							Contact Us
						</span>
					</div>
				</main>
			</div>
			<p className="font-normal opacity-50 flex flex-row items-center border-t border-solid border-RED w-full sm:w-5/6 md:w-full base:w-[90%] lg:w-[93%] xl:w-5/6 justify-center pt-4 text-[0.69rem] sm:text-sm">
				Copyright © <span className="text-RED">{new Date().getFullYear()}</span>
				- All right reserved by Mahdiyar
			</p>
		</footer>
	);
}

export default Footer;
