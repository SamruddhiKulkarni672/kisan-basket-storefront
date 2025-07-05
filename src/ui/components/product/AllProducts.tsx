"use client";
import React from "react";
import Image from "next/image";
import { FaStar, FaRegStar } from "react-icons/fa";
import Link from "next/link";
import { FaIndianRupeeSign } from "react-icons/fa6";
interface Product {
	id: number;
	name: string;
	image: string;
	price: string;
	rating: number;
}

const products: Product[] = [
	{
		id: 1,
		name: "Vegetables",
		image: "/images/category1.svg",
		price: "25/kg",
		rating: 4,
	},
	{
		id: 2,
		name: "Fruits",
		image: "/images/category2.svg",
		price: "₹60/kg",
		rating: 4,
	},
	// {
	// 	id: 3,
	// 	name: "Dairy",
	// 	image: "/images/category3.svg",
	// 	price: "₹90/kg",
	// 	rating: 4,
	// },
	// {
	// 	id: 4,
	// 	name: "Snacks",
	// 	image: "/images/category4.svg",
	// 	price: "₹45/pack",
	// 	rating: 4,
	// },
];
//#CCC8D1
const AllProducts = () => {
	return (
		<div className="flex flex-wrap justify-center gap-6  bg-[#efefea] py-10">
			{products.map((product) => (
				<div
					key={product.id}
					className="rounded-[310px] bg-white"
					style={{
						width: "320px",
						height: "490px",
						borderRadius: "32px",
						boxShadow: "5px 7px 8.8px 2px #615A5A40",
					}}
				>
					<div className="rounded-[32px] border-8 border-white">
						{/* Image section */}
						<div className="relative h-[260px] w-full overflow-hidden rounded-[32px] bg-[#B4CDCB]">
							<Image src={product.image} alt={product.name} fill className="object-contain p-6" />
						</div>

						{/* Info section */}
						<div className="p-5">
							<h4 className="text-base font-medium capitalize leading-[1.2] text-[#363842] sm:text-lg md:text-[20px]">
								{product.name}
							</h4>
							<div className="mt-2 flex items-center space-x-1 text-xs text-[#35394C]">
								{[...Array(5)].map((_, i) =>
									i < product.rating ? (
										<FaStar key={i} className="text-xs sm:text-sm" />
									) : (
										<FaRegStar key={i} className="text-xs sm:text-sm" />
									),
								)}
							</div>

							<div className="mt-4 flex items-center gap-1 text-sm leading-[1.2] text-[#81859C] line-through sm:text-base">
								<FaIndianRupeeSign />
								{product.price}
							</div>
							<div className="mt-2 flex items-center gap-1 text-xl font-semibold text-[#363842] sm:text-2xl">
								<FaIndianRupeeSign />
								20
							</div>
							<div
								style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
								className="mt-2 flex cursor-pointer items-center  justify-center rounded-[10px] bg-[#A9B243] text-[14px] font-semibold text-white sm:h-[50px] sm:rounded-[11px]  md:text-[20px]"
							>
								ADD TO CART
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default AllProducts;
