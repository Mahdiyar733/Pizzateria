// eslint-disable-next-line react/prop-types
function Rating({ size }) {
	return (
		<div className={`rating ${size} gap-3 items-center`}>
			<input
				type="radio"
				name="rating-2"
				className="mask mask-star-2 bg-orange-400"
			/>
			<input
				type="radio"
				name="rating-2"
				className="mask mask-star-2 bg-orange-400"
				defaultChecked
			/>
			<input
				type="radio"
				name="rating-2"
				className="mask mask-star-2 bg-orange-400"
			/>
			<input
				type="radio"
				name="rating-2"
				className="mask mask-star-2 bg-orange-400"
			/>
			<input
				type="radio"
				name="rating-2"
				className="mask mask-star-2 bg-orange-400"
			/>
			<span className="text-sm text-black font-semibold">2,8</span>
		</div>
	);
}

export default Rating;
