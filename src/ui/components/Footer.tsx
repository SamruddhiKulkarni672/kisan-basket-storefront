// components/FooterClient.tsx
"use client";

import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function FooterClient({ footerLinks, channels }: any) {
	const [email, setEmail] = useState("");

	return (
		<footer className="w-full bg-[#0F172A] px-6 py-4 text-white md:px-16 md:py-10">
			<div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4">
				{/* Logo & About */}
				<div>
					<div className="mb-4 flex items-center space-x-2">
						<h2 className="text-xl font-semibold">Kisan Basket</h2>
					</div>
					<p className="mb-4 text-sm text-gray-300">
						Bringing fresh, quality produce directly from farmers to your doorstep.
					</p>
					<div className="flex space-x-4 text-gray-400">
						<a href="#" className="hover:text-white">
							<FaFacebookF />
						</a>
						<a
							href="https://www.instagram.com/kisan_basket?igsh=MThtcTh0eWx4Mmo3ZA=="
							className="hover:text-white"
						>
							<FaInstagram />
						</a>
						<a href="#" className="hover:text-white">
							<FaLinkedin />
						</a>
					</div>
				</div>

				{/* Quick Links */}
				<div>
					<h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
					<ul className="space-y-2 text-sm text-gray-300">
						<li>
							<a href="/about" className="hover:text-white">
								About Us
							</a>
						</li>
						<li>
							<a href="/shop" className="hover:text-white">
								Shop
							</a>
						</li>
						<li>
							<a href="/blog" className="hover:text-white">
								Blog
							</a>
						</li>
						<li>
							<a href="/contact" className="hover:text-white">
								Contact
							</a>
						</li>
					</ul>
				</div>

				{/* Contact Info */}
				<div>
					<h3 className="mb-4 text-lg font-semibold">Contact Info</h3>
					<ul className="space-y-3 text-sm text-gray-300">
						<li className="flex items-start space-x-2">
							<FaMapMarkerAlt className="mt-1" />
							<span>Office No. 302, 3rd Floor, 74 Downtown, Baner Road, Baner, Pune-411045</span>
						</li>
						<li className="flex items-start space-x-2">
							<FaPhoneAlt className="mt-1" />
							<span>+919730752125</span>
						</li>
						<li className="flex items-start space-x-2">
							<FaEnvelope className="mt-1" />
							<span>info@kisanbasket.com</span>
						</li>
					</ul>
				</div>

				{/* Newsletter */}
				<div>
					<h3 className="mb-4 text-lg font-semibold">Newsletter</h3>
					<p className="mb-4 text-sm text-gray-300">
						Subscribe to get updates on fresh produce and special offers.
					</p>
					{/* <form className="flex">
						<input
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder="Your email"
							className="w-full rounded-l-md px-3 py-2 text-sm text-black focus:outline-none"
							required
						/>
						<button type="submit" className="rounded-r-md bg-green-600 px-4 py-2 text-sm hover:bg-green-700">
							Subscribe
						</button>
					</form> */}
				</div>
			</div>

			<div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
				© {new Date().getFullYear()} Kisan Basket. All rights reserved.
			</div>
		</footer>
	);
}

// import Link from "next/link";
// import Image from "next/image";
// import { LinkWithChannel } from "../atoms/LinkWithChannel";
// import { ChannelSelect } from "./ChannelSelect";
// import { ChannelsListDocument, MenuGetBySlugDocument } from "@/gql/graphql";
// import { executeGraphQL } from "@/lib/graphql";

// export async function Footer({ channel }: { channel: string }) {
// 	const footerLinks = await executeGraphQL(MenuGetBySlugDocument, {
// 		variables: { slug: "footer", channel },
// 		revalidate: 60 * 60 * 24,
// 	});
// 	const channels = process.env.SALEOR_APP_TOKEN
// 		? await executeGraphQL(ChannelsListDocument, {
// 				withAuth: false, // disable cookie-based auth for this call
// 				headers: {
// 					// and use app token instead
// 					Authorization: `Bearer ${process.env.SALEOR_APP_TOKEN}`,
// 				},
// 		  })
// 		: null;
// 	const currentYear = new Date().getFullYear();

// 	return (
// 		<footer className="border-neutral-300 bg-neutral-50">
// 			<div className="mx-auto max-w-7xl px-4 lg:px-8">
// 				<div className="grid grid-cols-3 gap-8 py-16">
// 					{footerLinks.menu?.items?.map((item) => {
// 						return (
// 							<div key={item.id}>
// 								<h3 className="text-sm font-semibold text-neutral-900">{item.name}</h3>
// 								<ul className="mt-4 space-y-4 [&>li]:text-neutral-500">
// 									{item.children?.map((child) => {
// 										if (child.category) {
// 											return (
// 												<li key={child.id} className="text-sm">
// 													<LinkWithChannel href={`/categories/${child.category.slug}`}>
// 														{child.category.name}
// 													</LinkWithChannel>
// 												</li>
// 											);
// 										}
// 										if (child.collection) {
// 											return (
// 												<li key={child.id} className="text-sm">
// 													<LinkWithChannel href={`/collections/${child.collection.slug}`}>
// 														{child.collection.name}
// 													</LinkWithChannel>
// 												</li>
// 											);
// 										}
// 										if (child.page) {
// 											return (
// 												<li key={child.id} className="text-sm">
// 													<LinkWithChannel href={`/pages/${child.page.slug}`}>
// 														{child.page.title}
// 													</LinkWithChannel>
// 												</li>
// 											);
// 										}
// 										if (child.url) {
// 											return (
// 												<li key={child.id} className="text-sm">
// 													<LinkWithChannel href={child.url}>{child.name}</LinkWithChannel>
// 												</li>
// 											);
// 										}
// 										return null;
// 									})}
// 								</ul>
// 							</div>
// 						);
// 					})}
// 				</div>

// 				{channels?.channels && (
// 					<div className="mb-4 text-neutral-500">
// 						<label>
// 							<span className="text-sm">Change currency:</span> <ChannelSelect channels={channels.channels} />
// 						</label>
// 					</div>
// 				)}

// 				<div className="flex flex-col justify-between border-t border-neutral-200 py-10 sm:flex-row">
// 					<p className="text-sm text-neutral-500">Copyright &copy; {currentYear} Your Store, Inc.</p>
// 					<p className="flex gap-1 text-sm text-neutral-500">
// 						Powered by{" "}
// 						<Link target={"_blank"} href={"https://saleor.io/"}>
// 							Saleor
// 						</Link>{" "}
// 						<Link href={"https://github.com/saleor/saleor"} target={"_blank"} className={"opacity-30"}>
// 							<Image alt="Saleor github repository" height={20} width={20} src={"/github-mark.svg"} />
// 						</Link>
// 					</p>
// 				</div>
// 			</div>
// 		</footer>
// 	);
// }
