export function Spinner() {
	return <span className="loader"></span>;
}

export default function SpinnerFullpage() {
	return (
		<div className="h-dvh w-dvw bg-gradient-to-b from-white to-red-300 flex items-center justify-center z-50 fixed top-0 right-0 left-0 bottom-0">
			<Spinner />
		</div>
	);
}
