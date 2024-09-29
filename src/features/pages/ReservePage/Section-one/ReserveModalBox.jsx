import { useContext } from "react";
import { ReserveContext } from "./Section1";
import NameSvg from "../../../../icons/NameSvg";
import PhoneSvg from "../../../../icons/PhoneSvg";
import FamilySvg from "../../../../icons/FamilySvg";
import ModalBoxAnimate from "../../../common/ModalBoxAnimate";
import { useDispatch, useSelector } from "react-redux";
import { closeReserve } from "../../../common/ModalBoxSlice";
import CloseBtnModal from "../../../common/CloseBtnModal";

function ReserveModalBox() {
	const { formData, setFormData } = useContext(ReserveContext);
	const dis = useDispatch();
	const isOpen = useSelector((state) => state.modalBox.reserve.isOpenReserve);
	console.log(isOpen);

	function handleSubmit() {
		dis(closeReserve());
		setFormData({ name: "", phone: "", ppl: "" });
	}

	function handleClose(e) {
		e.preventDefault();
		dis(closeReserve());
	}

	return (
		<ModalBoxAnimate
			handler={handleClose}
			isVisible={isOpen}>
			<span className="text-white text-xs font-normal w-full bg-RED p-3 rounded-lg flex flex-row items-center justify-between">
				<div className="flex flex-row items-center justify-center gap-2">
					<NameSvg />
					<span>Orderer&apos;s name :</span>
				</div>
				<span className="text-xs bg-white text-RED py-1 px-4 rounded-md capitalize">
					{formData.name}
				</span>
			</span>
			<span className="text-white text-xs font-normal w-full bg-RED p-3 rounded-lg flex flex-row items-center justify-between">
				<div className="flex flex-row items-center justify-center gap-2">
					<PhoneSvg />
					<span>Phone :</span>
				</div>
				<span className="text-xs bg-white text-RED py-1 px-4 rounded-md">
					{formData.phone}
				</span>
			</span>
			<span className="text-white text-xs font-normal w-full bg-RED p-3 rounded-lg flex flex-row items-center justify-between">
				<div className="flex flex-row items-center justify-center gap-2">
					<FamilySvg />
					<span>Number of people :</span>
				</div>
				<span className="text-xs bg-white text-RED py-1 px-4 rounded-md">
					{formData.ppl}
				</span>
			</span>
			<span className="text-black text-xs font-normal w-full px-1 py-1 rounded-lg flex flex-row items-center justify-between">
				Price of reserve{" "}
				<span className="text-xs bg-black text-white py-1 px-4 rounded-md shakeAni">
					20$
				</span>
			</span>
			<div className="w-full flex flex-row gap-3 items-center justify-center mt-2">
				<a
					href="https://investor.pypl.com/home/"
					target="_blank">
					<button
						onClick={handleSubmit}
						className="px-12 text-sm py-2 border border-RED border-solid bg-RED text-white font-normal rounded-md hover:bg-PINK hover:border-white transition-all duration-300 hover:px-16"
						type="button">
						Pay
					</button>
				</a>
				<CloseBtnModal handler={handleClose}>Cancel</CloseBtnModal>
			</div>
		</ModalBoxAnimate>
	);
}

export default ReserveModalBox;
