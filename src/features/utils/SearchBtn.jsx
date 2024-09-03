// eslint-disable-next-line react/prop-types
function SearchBtn({ classes, children, handler }) {
	return (
		<button
			className={`${classes} btn btn-ghost flex flex-row items-center`}
			onClick={handler}>
			{children}
		</button>
	);
}

export default SearchBtn;
