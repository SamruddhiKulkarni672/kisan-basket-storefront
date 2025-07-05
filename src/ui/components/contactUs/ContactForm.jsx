"use client";
import React, { useState } from "react";
// import { toast } from "sonner";
const ContactForm = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		message: "",
	});

	const [errors, setErrors] = useState({});
	const [suggestions, setSuggestions] = useState({});

	const validate = () => {
		const newErrors = {};

		if (!formData.name.trim()) newErrors.name = "Name is required.";

		if (!formData.email.trim()) {
			newErrors.email = "Email is required.";
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
			newErrors.email = "Invalid email format.";
		}

		if (!formData.phone.trim()) {
			newErrors.phone = "Phone is required.";
		} else if (!/^\d{10}$/.test(formData.phone)) {
			newErrors.phone = "Phone must be 10 digits.";
		}

		if (!formData.message.trim()) newErrors.message = "Message is required.";

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleInputChange = (e) => {
		const { name, value } = e.target;

		let newValue = value;
		if (name === "phone") {
			newValue = value.replace(/[^\d]/g, ""); // Allow only digits
		}

		setFormData((prev) => ({ ...prev, [name]: newValue }));
		setErrors((prev) => ({ ...prev, [name]: undefined }));

		// Suggestions for guidance
		const newSuggestions = { ...suggestions };
		if (name === "email" && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
			newSuggestions.email = "Enter a valid email address.";
		} else {
			delete newSuggestions.email;
		}

		if (name === "phone" && value && value.length !== 10) {
			newSuggestions.phone = "Phone number should be exactly 10 digits.";
		} else {
			delete newSuggestions.phone;
		}

		setSuggestions(newSuggestions);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!validate()) return;
		console.log("Submitted:", formData);
		alert("Messega sent successfully");
		// toast.success("Message sent successfully!");

		setFormData({ name: "", email: "", phone: "", message: "" });
		setSuggestions({});
	};

	return (
		<form onSubmit={handleSubmit} className="space-y-6">
			{[
				{ type: "text", name: "name", placeholder: "Name", required: true },
				{ type: "email", name: "email", placeholder: "E-mail", required: true },
				{
					type: "tel",
					name: "phone",
					placeholder: "Phone Number",
					required: true,
				},
			].map(({ type, name, placeholder, required }) => (
				<div key={name}>
					<input
						type={type}
						name={name}
						placeholder={placeholder}
						value={formData[name]}
						onChange={handleInputChange}
						className="w-full rounded-md border border-gray-300 px-4 py-3 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
						required={required}
						inputMode={name === "phone" ? "numeric" : undefined}
					/>
					{suggestions[name] && <p className="mt-1 text-sm text-red-600 ">{suggestions[name]}</p>}
					{errors[name] && <p className="mt-1 text-sm text-red-500">{errors[name]}</p>}
				</div>
			))}

			<div>
				<textarea
					name="message"
					placeholder="Message"
					rows={6}
					value={formData.message}
					onChange={handleInputChange}
					className="resize-vertical w-full rounded-md border border-gray-300 px-4 py-3 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
					required
				/>
				{errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
			</div>

			<button
				type="submit"
				className="w-full rounded-md bg-green-700 px-6 py-3 font-medium text-white transition duration-200 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
			>
				Contact Us
			</button>
		</form>
	);
};

export default ContactForm;

// "use client";
// import React, { useState } from "react";

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

//   const [errors, setErrors] = useState({});

//   const validate = () => {
//     const newErrors = {};

//     if (!formData.name.trim()) newErrors.name = "Name is required.";
//     if (!formData.email.trim()) {
//       newErrors.email = "Email is required.";
//     } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
//       newErrors.email = "Invalid email format.";
//     }

//     if (formData.phone && !/^\d{10}$/.test(formData.phone)) {
//       newErrors.phone = "Phone must be 10 digits.";
//     }

//     if (!formData.message.trim()) newErrors.message = "Message is required.";

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//     setErrors((prev) => ({ ...prev, [name]: undefined }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!validate()) return;
//     console.log("Submitted:", formData);
//     alert("Message sent successfully!");
//     setFormData({ name: "", email: "", phone: "", message: "" });
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-6">
//       {[
//         { type: "text", name: "name", placeholder: "Name", required: true },
//         { type: "email", name: "email", placeholder: "E-mail", required: true },
//         { type: "tel", name: "phone", placeholder: "Phone Number" },
//       ].map(({ type, name, placeholder, required }) => (
//         <div key={name}>
//           <input
//             type={type}
//             name={name}
//             placeholder={placeholder}
//             value={formData[name]}
//             onChange={handleInputChange}
//             className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
//             required={required}
//           />
//           {errors[name] && (
//             <p className="text-red-500 text-sm mt-1">{errors[name]}</p>
//           )}
//         </div>
//       ))}

//       <div>
//         <textarea
//           name="message"
//           placeholder="Message"
//           rows={6}
//           value={formData.message}
//           onChange={handleInputChange}
//           className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-vertical"
//           required
//         />
//         {errors.message && (
//           <p className="text-red-500 text-sm mt-1">{errors.message}</p>
//         )}
//       </div>

//       <button
//         type="submit"
//         className="w-full bg-green-700 hover:bg-green-800 text-white font-medium py-3 px-6 rounded-md transition duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
//       >
//         Contact Us
//       </button>
//     </form>
//   );
// };

// export default ContactForm;
