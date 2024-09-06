import GithubSvg from "../../svg/GithubSvg";
import LinkedinSvg from "../../svg/LinkdinSvg";
import TelegramSvg from "../../svg/TelegramSvg";
import Logo from "./Navbar/LogoPizza.png";

function Footer() {
	return (
		<footer className="footer footer-center bg-white text-primary-content p-10 pt-0">
			<div className="sm:px-9 border-t border-solid border-RED h-full w-full pt-10 border-opacity-50">
				<aside className="flex justify-center items-center flex-col gap-3 text-black">
					<img
						className="w-20"
						src={Logo}
						alt="logo"
					/>
					<p className="font-bold">
						Pizzateria Industries Ltd.
						<br />
						Providing reliable tech since 1992
					</p>
					<p className="font-semibold opacity-50">
						&ldquo; Our mission is to satisfy your hunger with tasty food,
						delivered quickly and at no charge &rdquo;
					</p>
					<p className="font-normal opacity-50">
						Copyright ©{" "}
						<span className="text-RED">{new Date().getFullYear()}</span> - All
						right reserved
					</p>
				</aside>
				<nav>
					<div className="grid grid-flow-col gap-4 mt-3">
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
			</div>
		</footer>
	);
}

export default Footer;
