import pizzapic from "../../icons/pizza.jpg";
function MenuItem({ pizza }) {
	const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

	return (
		<li>
			<img
				src={pizzapic}
				alt={name}
			/>
			<div>
				<p>{name}</p>
				<p>{ingredients.join(", ")}</p>
				<div>
					{!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p>Sold out</p>}
				</div>
			</div>
		</li>
	);
}

export default MenuItem;
