/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import Triangle from "../../icons/Triangle";

function CustomeNavLink({
	to,
	children,
	classes,
	href1 = "",
	href2 = "",
	href3 = "",
	item1,
	item2,
	item3,
	haveDropdown = false,
}) {
	return (
		<div className={`dropdown items-start justify-center flex`}>
			<NavLink
				to={to}
				className={({ isActive }) =>
					isActive
						? `${classes} text-RED`
						: `${classes} relative hover:opacity-60 transition-all duration-300`
				}>
				{children}
			</NavLink>
			{haveDropdown && (
				<div className="dropdown-content flex flex-col items-center z-30 dropdown-bottom mt-5 -gap-1 animate-fade">
					<Triangle />
					<ul
						tabIndex={0}
						className="menu bg-PINK rounded-box p-3 z-30 w-40 gap-2">
						<li className="z-10 text-black bg-white rounded-lg menuItem">
							<a href={`#${href1}`}>{item1}</a>
						</li>
						<li className="z-10 text-black bg-white rounded-lg">
							<a href={`#${href2}`}>{item2}</a>
						</li>
						<li className="z-10 text-black bg-white rounded-lg">
							<a href={`#${href3}`}>{item3}</a>
						</li>
					</ul>
				</div>
			)}
		</div>
	);
}

export default CustomeNavLink;
