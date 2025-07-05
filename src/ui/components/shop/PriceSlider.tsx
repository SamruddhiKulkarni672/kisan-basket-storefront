"use client";
import React, { useState } from "react";
import RangeSliderInput from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

const PriceSlider = ({ min = 0, max = 1000, initialMin = 200, initialMax = 800, onChange }) => {
	const [value, setValue] = useState([initialMin, initialMax]);
	const [inputValues, setInputValues] = useState({
		min: initialMin,
		max: initialMax,
	});

	const handleSliderChange = (newValue) => {
		setValue(newValue);
		setInputValues({
			min: newValue[0],
			max: newValue[1],
		});
		if (onChange) {
			onChange({ min: newValue[0], max: newValue[1] });
		}
	};

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		const numValue = parseInt(value) || min;

		setInputValues((prev) => ({
			...prev,
			[name]: Math.min(Math.max(numValue, min), name === "min" ? prev.max : max),
		}));
	};

	const handleInputBlur = () => {
		const newMin = Math.min(inputValues.min, inputValues.max - 1);
		const newMax = Math.max(inputValues.max, inputValues.min + 1);

		setValue([newMin, newMax]);
		setInputValues({
			min: newMin,
			max: newMax,
		});
		if (onChange) {
			onChange({ min: newMin, max: newMax });
		}
	};

	return (
		<div className="price-slider-container">
			<div className="price-inputs">
				<div className="price-input">
					<label htmlFor="min-price">Min:</label>
					<input
						type="number"
						id="min-price"
						name="min"
						value={inputValues.min}
						onChange={handleInputChange}
						onBlur={handleInputBlur}
						min={min}
						max={max}
					/>
				</div>
				<div className="price-input">
					<label htmlFor="max-price">Max:</label>
					<input
						type="number"
						id="max-price"
						name="max"
						value={inputValues.max}
						onChange={handleInputChange}
						onBlur={handleInputBlur}
						min={min}
						max={max}
					/>
				</div>
			</div>

			<RangeSliderInput min={min} max={max} value={value} onInput={handleSliderChange} step={10} />

			<style jsx>{`
				.price-slider-container {
					padding: 20px;
					max-width: 400px;
				}
				.price-inputs {
					display: flex;
					justify-content: space-between;
					margin-bottom: 20px;
				}
				.price-input {
					display: flex;
					align-items: center;
				}
				.price-input label {
					margin-right: 8px;
					font-weight: 500;
				}
				.price-input input {
					width: 80px;
					padding: 6px 10px;
					border: 1px solid #ddd;
					border-radius: 4px;
				}
			`}</style>
		</div>
	);
};

export default PriceSlider;
