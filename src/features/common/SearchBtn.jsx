// eslint-disable-next-line react/prop-types
function SearchBtn({ classes, children, handler }) {
	return (
		<button
			className={`${classes} flex flex-row items-center justify-center md:hover:bg-gray-100 transition-colors duration-300 cursor-pointer rounded-lg`}
			onClick={handler}>
			{children}
		</button>
	);
}

export default SearchBtn;
