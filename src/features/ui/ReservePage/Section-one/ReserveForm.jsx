import { useContext, useEffect, useRef, useState } from "react";
import { ScrollUp } from "../../../utils/helpers";
import { ReserveContext } from "./Section1";

function ReserveForm() {
	const [btnIsDisable, setBtnIsDisable] = useState(false);
	const bodyRef = useRef();
	const {
		errors,
		setErrors,
		formData,
		setFormData,
		isOpenModalBox,
		setIsOpenModalBox,
	} = useContext(ReserveContext);

	const handleChange = (e) => {
		const { name, value } = e.target;

		setFormData({ ...formData, [name]: value });

		setErrors({ ...errors, [name]: null });

		if (name === "name" && value.length > 10) {
			setErrors({
				...errors,
				name: "Your name must be less than 10 characters",
			});
		} else if (name === "phone" && isNaN(value)) {
			setErrors({ ...errors, phone: "Phone must be a number" });
		} else if (name === "phone" && value.length < 11 && value !== "") {
			setErrors({
				...errors,
				phone: "Phone number must be at least 11 characters",
			});
		} else if (name === "phone" && value.length > 11) {
			setErrors({
				...errors,
				phone: "Phone number must be less than 12 characters",
			});
		} else if (name === "ppl" && isNaN(value)) {
			setErrors({ ...errors, ppl: "Number of people must be a number" });
		} else if (name === "ppl" && value[0] == 0) {
			setErrors({ ...errors, ppl: "Not valid number" });
		} else if (name === "ppl" && +value < 1 && value != "") {
			setErrors({
				...errors,
				ppl: "Number of people can't be a negetive or zero",
			});
		} else if (name === "ppl" && value.length > 2) {
			setErrors({
				...errors,
				ppl: "Number of people must be less than 2 characters",
			});
		}
	};

	function handleSubmit(e) {
		e.preventDefault();
		ScrollUp();

		let isValid = true;
		Object.keys(formData).forEach((field) => {
			if (errors.name || errors.phone || errors.ppl) {
				isValid = false;
			} else if (!formData[field]) {
				isValid = false;
				setErrors({ ...errors, [field]: "This field is required" });
			}
		});

		if (!isValid) {
			return;
		} else {
			setIsOpenModalBox(true);
			setBtnIsDisable(true);
		}
	}

	useEffect(() => {
		bodyRef.current = document.body;

		if (isOpenModalBox) {
			bodyRef.current.style = "overflow: hidden";
		} else {
			bodyRef.current.style = "overflow: auto";
		}

		if (!isOpenModalBox) {
			const timerw = setTimeout(() => {
				setBtnIsDisable(false);
			}, 1);

			return () => {
				clearTimeout(timerw);
			};
		}
	}, [isOpenModalBox]);

	return (
		<form className="flex flex-col items-center gap-3 sm:gap-5 md:items-start max-w-[400px]">
			<h2 className="text-white text-xl font-bold md:text-2xl">
				Reservation <span className="text-black">Now!</span>
			</h2>
			<input
				spellCheck={false}
				name="name"
				value={formData.name}
				onChange={handleChange}
				type="text"
				className="w-full bg-white md:text-sm py-2 placeholder:font-normal rounded-md text-black font-normal text-xs focus:outline-none transition-all duration-300 px-3 capitalize"
				placeholder="Orderer's name"
			/>
			{errors.name && (
				<p className="text-xs text-RED bg-white px-2 py-0.5 rounded-md">
					{errors.name}
				</p>
			)}
			<div className="flex flex-row gap-3 sm:gap-5 md:gap-3">
				<div>
					<input
						name="phone"
						value={formData.phone}
						onChange={handleChange}
						type="tel"
						placeholder="Phone number"
						className="flex-1 w-full bg-white md:text-sm py-2 placeholder:font-normal rounded-md text-black font-normal text-xs focus:outline-none focus:flex-[2] transition-all duration-300 px-3"
					/>
					{errors.phone && (
						<p className="text-xs text-RED bg-white px-2 py-0.5 rounded-md mt-2">
							{errors.phone}
						</p>
					)}
				</div>
				<div>
					<input
						name="ppl"
						value={formData.ppl}
						onChange={handleChange}
						placeholder="Number of people"
						type="number"
						min="1"
						className="flex-1 w-full bg-white md:text-sm py-2 placeholder:font-normal rounded-md text-black font-normal text-xs focus:outline-none focus:flex-[2] transition-all duration-300 px-3"
					/>
					{errors.ppl && (
						<p className="text-xs text-RED bg-white px-2 py-0.5 rounded-md mt-2">
							{errors.ppl}
						</p>
					)}
				</div>
			</div>
			{!btnIsDisable ? (
				<button
					className="bg-black text-white rounded-full px-5 py-2.5 lg:py-3 lg:px-7 text-xs hover:bg-PINK hover:text-black transition-all duration-300 animate-fade"
					onClick={handleSubmit}
					type="button">
					Reservation
				</button>
			) : (
				<button
					disabled={true}
					className="bg-black text-white rounded-full px-5 py-2.5 lg:py-3 lg:px-7 text-xs"
					type="button">
					Reservation
				</button>
			)}
		</form>
	);
}

export default ReserveForm;
