import { useContext } from "react";
import { ReserveContext } from "./Section1";
import ReserveModal from "./ReserveModal";
import NameSvg from "../../../../svg/NameSvg";
import PhoneSvg from "../../../../svg/PhoneSvg";
import FamilySvg from "../../../../svg/FamilySvg";

function ModalBox() {
	const { formData, setFormData, setIsOpenModalBox, isOpenModalBox } =
		useContext(ReserveContext);

	function handleSubmit() {
		setIsOpenModalBox(false);
		setFormData({ name: "", phone: "", ppl: "" });
	}

	function handleClose(e) {
		e.preventDefault();
		setIsOpenModalBox(false);
	}

	return (
		<ReserveModal isVisible={isOpenModalBox}>
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
				<button
					onClick={handleClose}
					className="px-6 text-sm py-2 bg-transparent border border-RED border-solid text-RED font-normal rounded-md hover:bg-RED transition-all duration-300 hover:border-white hover:px-10 hover:text-white"
					type="button">
					Cancel
				</button>
			</div>
		</ReserveModal>
	);
}

export default ModalBox;
