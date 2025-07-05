"use client";
import Head from "next/head";
import Breadcrumb from "@/ui/components/contactUs/Breadcrumb";
import ContactInfo from "@/ui/components/contactUs/ContactInfo";
import BusinessCard from "@/ui/components/contactUs/BusinessCard";
import ContactForm from "@/ui/components/contactUs/ContactForm";
import MapSection from "@/ui/components/contactUs/MapSection";

export default function ContactPage() {
	return (
		<>
			<Head>
				<title>Contact Us </title>
				<meta name="description" content="Contact Kisan Basket for organic farming products and services" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>

			<div className="min-h-screen bg-white">
				{/* Breadcrumb Section */}
				<Breadcrumb />

				{/* Main Content */}
				<div className="mx-auto max-w-7xl px-6 py-12">
					{/* Header & Contact Info */}
					<div className="mb-12 text-center">
						<ContactInfo />
					</div>

					{/* Grid with Image & Form */}
					<div className="grid items-start gap-12 lg:grid-cols-2">
						<BusinessCard />
						<div className="rounded-lg bg-white p-8 shadow-lg">
							<ContactForm />
						</div>
					</div>

					{/* Map */}
					<div className="mt-12">
						<MapSection />
					</div>
				</div>
			</div>
		</>
	);
}

// "use client";
// import React, { useState } from "react";
// import Head from "next/head";
// import Image from "next/image";
// import contactImage from "@/assets/images/contact.png";
// import footerImage from "@/assets/images/footerImage.png";
// interface ContactFormData {
//   name: string;
//   email: string;
//   phone: string;
//   message: string;
// }

// const ContactPage: React.FC = () => {
//   const [formData, setFormData] = useState<ContactFormData>({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

//   const handleInputChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//     // Handle form submission logic here
//     alert("Message sent successfully!");
//   };

//   return (
//     <>
//       <Head>
//         <title>Contact Us - Two Brothers Organic</title>
//         <meta
//           name="description"
//           content="Contact Kisan Basket for organic farming products and services"
//         />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//       </Head>

//       <div className="min-h-screen ">
//         {/* Breadcrumb */}
//         <div className="bg-white py-4 px-6 border-b">
//           <div className="max-w-7xl mx-auto">
//             <nav className="text-sm text-gray-600">
//               <span>Home</span>
//               <span className="mx-2">{">"}</span>
//               <span className="text-gray-900 font-medium">Contact Us</span>
//             </nav>
//           </div>
//         </div>

//         <div className="max-w-7xl mx-auto px-6 py-12">
//           {/* Header */}
//           <div className="text-center mb-12">
//             <h1 className="text-4xl font-bold text-gray-900 mb-8">
//               Contact Us
//             </h1>

//             {/* Contact Information */}
//             <div className="space-y-4 text-gray-700 max-w-2xl mx-auto">
//               <div className="flex items-center justify-center gap-2">
//                 <span>📞</span>
//                 <span className="font-medium">
//                   Toll Free & WhatsApp: +919730752125 (Monday - Saturday from
//                   10am - 6pm)
//                 </span>
//               </div>

//               <div className="flex items-center justify-center gap-2">
//                 <span>✉️</span>
//                 <span>
//                   Email -{" "}
//                   <a
//                     href="mailto:info@twobrothersindia.com"
//                     className="text-blue-600 hover:underline"
//                   >
//                     info@kisanbasket.com
//                   </a>
//                 </span>
//               </div>

//               {/* <div className="flex items-center justify-center gap-2">
//                 <span>👥</span>
//                 <span>
//                   Founders -{" "}
//                   <a
//                     href="mailto:satyajit@twobrothersindia.com"
//                     className="text-blue-600 hover:underline"
//                   >
//                     satyajit@twobrothersindia.com
//                   </a>
//                   ,
//                   <br />
//                   <a
//                     href="mailto:ajinkya@twobrothersindia.com"
//                     className="text-blue-600 hover:underline"
//                   >
//                     ajinkya@twobrothersindia.com
//                   </a>
//                 </span>
//               </div> */}

//               {/* <div className="flex items-center justify-center gap-2">
//                 <span>🎁</span>
//                 <span>
//                   Gifting / Corporate orders -{" "}
//                   <a
//                     href="mailto:kapil@twobrothersindia.com"
//                     className="text-blue-600 hover:underline"
//                   >
//                     kapil@twobrothersindia.com
//                   </a>
//                 </span>
//               </div> */}
//             </div>
//           </div>

//           <div className="grid lg:grid-cols-2 gap-12 items-start">
//             <div className="space-y-6">
//               <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg">
//                 <Image
//                   src={contactImage}
//                   alt="Kisan Basket"
//                   fill
//                   className="object-cover"
//                   sizes="(max-width: 768px) 100vw, 50vw"
//                 />
//               </div>

//               {/* Business Info Card */}
//               <div className="bg-white p-6 rounded-lg shadow-md">
//                 <h3 className="text-xl font-semibold text-gray-900 mb-4">
//                   Kisan Basket
//                 </h3>
//                 <div className="space-y-2 text-gray-700">
//                   <p>
//                     📍Office No. 302, 3rd Floor, 74 Downtown, Banner Road,Banner
//                   </p>
//                   <p>District - Pune, Maharashtra 413103</p>
//                   <div className="flex items-center gap-2 mt-3">
//                     <span className="text-yellow-500">⭐</span>
//                     <span className="text-sm font-medium">4.3</span>
//                     <span className="text-sm text-gray-600">325 reviews</span>
//                   </div>
//                   {/* <button className="text-blue-600 hover:underline text-sm mt-2">
//                     📍 Directions
//                   </button>
//                   <button className="text-blue-600 hover:underline text-sm block">
//                     View larger map
//                   </button> */}
//                 </div>
//               </div>
//             </div>

//             {/* Right Side - Contact Form */}
//             <div className="bg-white p-8 rounded-lg shadow-lg">
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div>
//                   <input
//                     type="text"
//                     name="name"
//                     placeholder="Name"
//                     value={formData.name}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
//                     required
//                   />
//                 </div>

//                 <div>
//                   <input
//                     type="email"
//                     name="email"
//                     placeholder="E-mail"
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
//                     required
//                   />
//                 </div>

//                 <div>
//                   <input
//                     type="tel"
//                     name="phone"
//                     placeholder="Phone Number"
//                     value={formData.phone}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
//                   />
//                 </div>

//                 <div>
//                   <textarea
//                     name="message"
//                     placeholder="Message"
//                     rows={6}
//                     value={formData.message}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-vertical"
//                     required
//                   />
//                 </div>

//                 <button
//                   type="submit"
//                   className="w-full bg-green-700 hover:bg-green-800 text-white font-medium py-3 px-6 rounded-md transition duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
//                 >
//                   Contact Us
//                 </button>
//               </form>
//             </div>
//           </div>

//           {/* Map Section */}
//           <div className="mt-12">
//             <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//               <div className="h-96 relative">
//                 <iframe
//                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.7692999310097!2d73.91260007517213!3d18.51538238257785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c14fa0b159e9%3A0x8f07a460c090adfc!2sKisanBasket!5e0!3m2!1sen!2sin!4v1718190000000!5m2!1sen!2sin"
//                   width="100%"
//                   height="100%"
//                   style={{ border: 0 }}
//                   allowFullScreen
//                   loading="lazy"
//                   referrerPolicy="no-referrer-when-downgrade"
//                   title="Two Brothers Organic Location"
//                 />
//               </div>
//               <div className="bg-gray-100 px-4 py-2 text-xs text-gray-600 flex justify-between items-center">
//                 <div className="flex gap-4">
//                   <span>Keyboard shortcuts</span>
//                   <span>Map data ©2025</span>
//                   <span>Terms</span>
//                   <span>Report a map error</span>
//                 </div>
//                 <div className="text-blue-600">Google</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* <div className="relative w-full h-72 rounded-lg overflow-hidden shadow-lg">
//         <Image
//           src={footerImage}
//           alt="Img"
//           fill
//           className="object-cover"
//           //sizes="(max-width: 768px) 100vw, 50vw"
//         />
//       </div> */}
//     </>
//   );
// };

// export default ContactPage;
