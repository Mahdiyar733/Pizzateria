/* eslint-disable react/prop-types */

function CloseBtnModal({ children, handler }) {
	return (
		<button
			onClick={handler}
			className="px-6 text-sm py-2 bg-transparent border border-RED border-solid text-RED font-normal rounded-md hover:bg-RED transition-all duration-300 hover:border-white hover:px-10 hover:text-white"
			type="button">
			{children}
		</button>
	);
}

export default CloseBtnModal;
