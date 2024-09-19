/* eslint-disable react/prop-types */
import ModalBoxAnimate from "../utils/ModalBoxAnimate";
import { useDispatch, useSelector } from "react-redux";
import { closeIngredients } from "../utils/ModalBoxSlice";
import RecipeSvg from "../../svg/recipeSvg";
import CloseBtnModal from "../utils/CloseBtnModal";

function IngredientsModal() {
	const isOpen = useSelector(
		(state) => state.modalBox.ingredients.isOpenIngredients,
	);
	const item = useSelector((state) => state.modalBox.ingredients.item);
	const dis = useDispatch();
	console.log(item);

	function handleClose() {
		dis(closeIngredients());
	}

	return (
		<ModalBoxAnimate
			h="h-auto"
			isVisible={isOpen}
			handler={handleClose}>
			{item && (
				<div className="w-full h-full items-center flex flex-col gap-4">
					<span className="bg-white w-full rounded-md text-center text-RED border-solid border-2  border-RED py-2 font-semibold ">
						<span className="shakeAni">{item.name}</span>
					</span>
					<span className="text-RED text-lg bg-white w-full rounded-md text-center py-1 flex flex-row items-center justify-center gap-2">
						<RecipeSvg />
						Recipe :{" "}
					</span>
					<div className="flex flex-row flex-wrap gap-1 w-full">
						{item.ingredients.map((item) => (
							<span
								key={item}
								className="bg-RED text-white p-1 rounded-md text-sm">
								{item}
							</span>
						))}
					</div>
					<CloseBtnModal handler={handleClose}>Close</CloseBtnModal>
				</div>
			)}
		</ModalBoxAnimate>
	);
}

export default IngredientsModal;
