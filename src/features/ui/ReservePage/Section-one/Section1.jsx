/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import TablePic from "./table.png";
import LittleTitle from "../../../utils/LittleTitle";
import BigTitle from "../../../utils/BigTitle";
import MotionDiv from "../../../utils/MotionDiv";
import ReserveModal from "./ReserveModal";

function Section1() {
	const [ordererName, setOrederName] = useState("");
	const [phone, setPhone] = useState("");
	const [NumberPpl, setNumberPpl] = useState("");
	const [isOpenAlert, setIsOpenAlert] = useState(false);
	const [isOpenModalBox, setIsOpenModalBox] = useState(false);
	const [btnIsDisable, setBtnIsDisable] = useState(false);

	function handleSubmit(e) {
		if (!ordererName.trim() || !phone.trim() || !NumberPpl.trim()) return;
		e.preventDefault();
		setIsOpenModalBox(true);
		setBtnIsDisable(true);
	}

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsOpenAlert(false);
		}, 3500);

		return () => {
			clearTimeout(timer);
		};
	}, [isOpenAlert]);

	useEffect(() => {
		const timerw = setTimeout(() => {
			setBtnIsDisable(false);
		}, 4400);

		return () => {
			clearTimeout(timerw);
		};
	}, [btnIsDisable]);

	return (
		<div className="relative h-auto bg-RED w-full flex flex-col py-9 px-10 md:px-14 base:px-20 sm:py-8 md:py-16 gap-5 justify-evenly lg:py-12 lg:px-32 xl:px-56 base:gap-3 xl:gap-5 md:gap-2">
			<div className="flex flex-col items-center gap-3 md:items-start animate-fade-up animate-duration-700">
				<LittleTitle color="text-white">reservation</LittleTitle>
				<BigTitle
					pos="text-center md:text-start"
					font="font-bold">
					Turn your dining dreams into <br /> reality by booking a table with us
				</BigTitle>
			</div>
			<div className="flex flex-row items-center justify-center md:justify-between gap-8">
				<MotionDiv type="1">
					<form className="flex flex-col items-center gap-3 sm:gap-5 md:items-start">
						<h2 className="text-white text-xl font-bold md:text-2xl">
							Reservation <span className="text-black">Now!</span>
						</h2>
						<input
							value={ordererName}
							onChange={(e) => setOrederName(e.target.value)}
							type="text"
							className="w-full bg-white md:text-sm py-2 placeholder:font-normal rounded-md text-black font-normal text-xs focus:outline-none transition-all duration-300 px-3 capitalize"
							placeholder="Orderer's name"
						/>
						<div className="flex flex-row gap-3 sm:gap-5 md:gap-3">
							<input
								value={phone}
								onChange={(e) => setPhone(e.target.value)}
								type="tel"
								placeholder="Phone number"
								className="flex-1 w-full bg-white md:text-sm py-2 placeholder:font-normal rounded-md text-black font-normal text-xs focus:outline-none focus:flex-[2] transition-all duration-300 px-3"
							/>
							<input
								value={NumberPpl}
								onChange={(e) => {
									if (e.target.value > 0) {
										setNumberPpl(e.target.value);
									} else if (e.target.value == "") {
										setNumberPpl("");
									} else {
										return;
									}
								}}
								placeholder="Number of people"
								type="number"
								className="flex-1 w-full bg-white md:text-sm py-2 placeholder:font-normal rounded-md text-black font-normal text-xs focus:outline-none focus:flex-[2] transition-all duration-300 px-3"
							/>
						</div>
						{!btnIsDisable ? (
							<button
								className="bg-black text-white rounded-full px-5 py-2.5 lg:py-3 lg:px-7 text-xs hover:bg-PINK hover:text-black transition-all duration-300 animate-fade"
								onClick={(e) => handleSubmit(e)}
								type="button">
								Reservation
							</button>
						) : (
							<button
								disabled="true"
								className="bg-black text-white rounded-full px-5 py-2.5 lg:py-3 lg:px-7 text-xs"
								type="button">
								Reservation
							</button>
						)}
					</form>
				</MotionDiv>
				<img
					className="hidden md:block object-cover h-80 base:-mt-20 animate-fade-left animate-duration-700"
					src={TablePic}
				/>
			</div>
			<ModalBox
				ordererName={ordererName}
				phone={phone}
				NumberPpl={NumberPpl}
				setIsOpenModalBox={setIsOpenModalBox}
				isOpenModalBox={isOpenModalBox}
			/>
		</div>
	);
}

function ModalBox({
	ordererName,
	phone,
	NumberPpl,
	setIsOpenModalBox,
	isOpenModalBox,
}) {
	return (
		<ReserveModal isVisible={isOpenModalBox}>
			<span className="text-white text-xs font-normal w-full bg-RED p-3 rounded-lg flex flex-row items-center justify-between">
				Orderer&apos;s name :{" "}
				<span className="text-xs bg-white text-RED py-1 px-4 rounded-md">
					{ordererName}
				</span>
			</span>
			<span className="text-white text-xs font-normal w-full bg-RED p-3 rounded-lg flex flex-row items-center justify-between">
				Phone :{" "}
				<span className="text-xs bg-white text-RED py-1 px-4 rounded-md">
					{phone}
				</span>
			</span>
			<span className="text-white text-xs font-normal w-full bg-RED p-3 rounded-lg flex flex-row items-center justify-between">
				Number of people{" "}
				<span className="text-xs bg-white text-RED py-1 px-4 rounded-md">
					{NumberPpl}
				</span>
			</span>
			<span className="text-black text-xs font-normal w-full px-1 py-1 rounded-lg flex flex-row items-center justify-between">
				Price of reserve{" "}
				<span className="text-xs bg-black text-white py-1 px-4 rounded-md">
					20$
				</span>
			</span>
			<div className="w-full flex flex-row gap-3 items-center justify-center mt-2">
				<button className="px-12 text-sm py-2 border border-RED border-solid bg-RED text-white font-normal rounded-md">
					Pay
				</button>
				<button
					onClick={() => setIsOpenModalBox(false)}
					className="px-6 text-sm py-2 bg-transparent border border-RED border-solid text-RED font-normal rounded-md">
					Cancel
				</button>
			</div>
		</ReserveModal>
	);
}

export default Section1;
