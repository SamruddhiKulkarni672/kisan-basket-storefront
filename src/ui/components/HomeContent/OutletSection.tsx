"use client";

import { useState } from "react";
import Image from "next/image";

type Shop = {
	id: string;
	name: string;
	location: string;
	address: string;
	phone: string;
	startTime: string;
	endTime: string;
	imageUrl: string;
};

const shops: Shop[] = [
	{
		id: "magarpatta",
		name: "Kisan Basket Shop",
		location: "Magarpatta",
		address: "Magarpatta City, Pune",
		phone: "9868062963",
		startTime: "Monday-Friday 9AM",
		endTime: "Monday-Friday 8PM",
		imageUrl: "/images/magarpatta.png",
	},
	{
		id: "baner",
		name: "Kisan Basket Shop",
		location: "Baner",
		address: "Baner Road, Pune",
		phone: "9823456789",
		startTime: "Monday-Saturday 10AM",
		endTime: "Monday-Saturday 9PM",
		imageUrl: "/images/baner.jpg",
	},
	{
		id: "hadapsar",
		name: "Kisan Basket Shop",
		location: "Hadapsar",
		address: "Hadapsar Industrial Area, Pune",
		phone: "9845123456",
		startTime: "Monday-Saturday 9AM",
		endTime: "Monday-Saturday 8PM",
		imageUrl: "/images/hadapsar.jpg",
	},
	{
		id: "mulshi",
		name: "Kisan Basket Shop",
		location: "Mulshi",
		address: "Mulshi Road, Pune",
		phone: "9812345678",
		startTime: "Monday-Sunday 8AM",
		endTime: "Monday-Sunday 7PM",
		imageUrl: "/images/mulshi.jpg",
	},
];

export default function ShopPage() {
	const [selectedId, setSelectedId] = useState("magarpatta");
	const selectedShop = shops.find((s) => s.id === selectedId)!;

	return (
		<div className="">
			{/* Title */}
			<div className="relative z-10 mb-4 flex justify-center pt-4 md:mb-6 lg:mb-10 lg:mt-8">
				<div className="relative h-[50px] w-[250px] md:h-[74px] md:w-[320px] lg:h-[88px] lg:w-[565px]">
					<Image
						src="/images/exploretheworldimage.svg"
						alt="From to Table Journey Title"
						fill
						style={{ objectFit: "contain" }}
					/>
				</div>
			</div>
			<div className="flex w-full flex-col items-center justify-center gap-8 px-4 lg:flex-row lg:items-start lg:px-10 lg:py-8">
				{/* Mobile/Tablet Selector */}
				<div className="mb-4 flex w-full flex-wrap justify-center gap-3 lg:hidden">
					{shops.map((shop) => (
						<button
							key={shop.id}
							onClick={() => setSelectedId(shop.id)}
							className={`rounded-full border px-4 py-1 text-sm ${
								selectedId === shop.id ? "bg-[#A9B243] text-white" : "border-[#A09898] text-black"
							}`}
						>
							{shop.location}
						</button>
					))}
				</div>

				{/* Image section */}
				<div className="relative h-[300px] w-full overflow-hidden rounded-3xl sm:h-[400px] lg:h-[450px] lg:w-[45%]">
					<Image src={selectedShop.imageUrl} alt={selectedShop.location} fill className="z-0 object-cover" />

					<div className="absolute left-0 top-0 z-10 flex h-full w-[75%] flex-col justify-center bg-[#d3cccce7] p-4 text-black sm:w-[55%] sm:p-6 lg:w-[45%]">
						<h2 className="text-xl font-bold capitalize leading-tight sm:text-2xl sm:leading-10 lg:text-3xl">
							kisan
							<br />
							basket
							<br />
							shop
							<br />
							{selectedShop.location}
						</h2>

						<div className="mt-6 flex h-12 w-[80%] items-center justify-between rounded-full border-4 border-[#888484] px-4 sm:mt-24">
							<div className="text-base font-light sm:text-lg">Explore</div>
							<div className="relative h-4 w-4 sm:h-6 sm:w-6">
								<Image src="/images/rightArow.svg" alt="arrow" fill />
							</div>
						</div>
					</div>
				</div>

				{/* Location Info section */}
				<div className="flex w-full flex-col items-center lg:w-[50%]">
					{/* Desktop Selector */}
					<div className="mb-6 hidden justify-center gap-5 lg:flex">
						{shops.map((shop) => (
							<button
								key={shop.id}
								onClick={() => setSelectedId(shop.id)}
								className={`rounded-full border px-6 py-2 transition-all ${
									selectedId === shop.id ? "bg-[#A9B243] text-white" : "border-[#A09898] text-black"
								}`}
							>
								{shop.location}
							</button>
						))}
					</div>

					{/* Info Card */}
					<div className="   flex w-full flex-col space-y-5 rounded-2xl border border-[#A09898] p-5 text-black sm:w-[90%] sm:p-6 lg:h-[390px] lg:w-[85%]">
						<h2 className="ml-12 text-center text-lg font-semibold leading-tight sm:text-left sm:text-xl">
							{selectedShop.name} {selectedShop.location}
						</h2>

						<div className="ml-12 space-y-4">
							{/* Address */}
							<div className="flex items-start gap-3 text-sm">
								<div className="relative h-4 w-4 sm:h-6 sm:w-6">
									<Image src="/images/locationIcon.svg" alt="location" fill />
								</div>
								<div>
									<div className="font-bold">Address</div>
									<div>{selectedShop.address}</div>
								</div>
							</div>

							{/* Phone */}
							<div className="flex items-start gap-3 text-sm">
								<div className="relative h-4 w-4 sm:h-6 sm:w-6">
									<Image src="/images/phoneIcon.svg" alt="phone" fill />
								</div>
								<div>
									<div className="font-bold">Phone</div>
									<div>{selectedShop.phone}</div>
								</div>
							</div>

							{/* Starts */}
							<div className="flex items-start gap-3 text-sm">
								<div className="relative h-4 w-4 sm:h-6 sm:w-6">
									<Image src="/images/timeStart.svg" alt="start time" fill />
								</div>
								<div>
									<div className="font-bold">Starts</div>
									<div>{selectedShop.startTime}</div>
								</div>
							</div>

							{/* Ends */}
							<div className="flex items-start gap-3 text-sm">
								<div className="relative h-4 w-4 sm:h-6 sm:w-6">
									<Image src="/images/TimeEnd.svg" alt="end time" fill />
								</div>
								<div>
									<div className="font-bold">Ends</div>
									<div>{selectedShop.endTime}</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
