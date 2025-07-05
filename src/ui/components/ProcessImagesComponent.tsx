"use client";

import React from "react";
import Image from "next/image";

const ProcessImagesComponent = () => {
	return (
		<div>
			<div className="relative hidden  overflow-hidden bg-[#A9BFCB] py-4 md:block md:py-6 lg:pb-20 lg:pt-14">
				{/* 🍃 Decorative Leaf Images */}
				<div>
					{/* Top-left leaf */}
					<div className="absolute left-2 top-2 z-0 h-[40px] w-[40px] md:h-[60px] md:w-[60px] lg:h-[80px] lg:w-[80px]">
						<Image src="/images/leafimage.svg" alt="Decorative Leaf" fill style={{ objectFit: "contain" }} />
					</div>

					{/* Bottom-right leaf */}
					<div className="absolute bottom-4 right-2 z-0 h-[50px] w-[50px] md:h-[70px] md:w-[70px] lg:h-[100px] lg:w-[100px]">
						<Image src="/images/leafimage.svg" alt="Decorative Leaf" fill style={{ objectFit: "contain" }} />
					</div>

					{/* Mid-left leaf */}
					<div className="absolute left-0 top-1/2 z-0 hidden h-[60px] w-[60px] md:block lg:h-[90px] lg:w-[90px]">
						<Image src="/images/leafimage.svg" alt="Decorative Leaf" fill style={{ objectFit: "contain" }} />
					</div>
				</div>

				{/* Title */}
				<div className="relative z-10 mb-4 flex justify-center md:mb-6 lg:my-4 lg:mb-10">
					<div className="relative h-[40px] w-[180px] md:h-[64px] md:w-[220px] lg:h-[88px] lg:w-[565px]">
						<Image
							src="/images/fromtotablejourneytitle.svg"
							alt="From to Table Journey Title"
							fill
							style={{ objectFit: "contain" }}
						/>
					</div>
				</div>

				{/* Process Steps */}
				<div className="relative z-10 flex flex-wrap items-center justify-center gap-4 px-4">
					{/* Step: Farmer */}
					<div className="flex flex-col items-center">
						<div className="relative h-[80px] w-[80px] md:h-[140px] md:w-[140px] lg:h-[220px] lg:w-[220px]">
							<Image src="/images/farmerimage.svg" alt="Farmer" fill style={{ objectFit: "contain" }} />
						</div>
						<h2 className="mt-2 font-amatica text-[20px] font-bold leading-[100%] md:text-[32px] lg:text-[48px]">
							Farmer
						</h2>
					</div>

					{/* Arrow */}
					<div className="relative h-[20px] w-[28px] md:h-[25px] md:w-[36px]">
						<Image src="/images/nexticon.svg" alt="Next arrow" fill style={{ objectFit: "contain" }} />
					</div>

					{/* Step: Packaging */}
					<div className="flex flex-col items-center">
						<div className="relative h-[80px] w-[80px] md:h-[140px] md:w-[140px] lg:h-[220px] lg:w-[220px]">
							<Image src="/images/packagingimage.svg" alt="Packaging" fill style={{ objectFit: "contain" }} />
						</div>
						<h2 className="mt-2 font-amatica text-[20px] font-bold leading-[100%] md:text-[32px] lg:text-[48px]">
							Packaging
						</h2>
					</div>

					{/* Arrow */}
					<div className="relative h-[20px] w-[28px] md:h-[25px] md:w-[36px]">
						<Image src="/images/nexticon.svg" alt="Next arrow" fill style={{ objectFit: "contain" }} />
					</div>

					{/* Step: Consumer */}
					<div className="flex flex-col items-center">
						<div className="relative h-[70px] w-[70px] md:h-[120px] md:w-[120px] lg:h-[158px] lg:w-[158px]">
							<Image src="/images/consumerimage.svg" alt="Consumer" fill style={{ objectFit: "contain" }} />
						</div>
						<h2 className="mt-2 font-amatica text-[20px] font-bold leading-[100%] md:text-[32px] lg:mt-12 lg:text-[48px]">
							Consumer
						</h2>
					</div>
				</div>

				{/* Description */}
				<div className="relative z-10 mt-6 flex justify-center px-4 lg:mt-16">
					<p className="max-w-[90%] text-center font-amatica text-[16px] font-bold leading-[100%] md:text-[20px] lg:max-w-[500px] lg:text-[24px]">
						Yes you heard it right!!! We supply product directly from farm without processing
					</p>
				</div>
			</div>
			{/* for mobile devices */}
			<div className="w-full bg-[#BBCED9] md:hidden">
				<div className="relative aspect-[4/3] h-[221px] w-full">
					{" "}
					{/* Adjust aspect ratio as needed */}
					<Image
						src="/images/farmtotablemobileimage.svg"
						alt="From to Table Journey Title"
						fill
						className="object-cover"
					/>
				</div>
			</div>
		</div>
	);
};

export default ProcessImagesComponent;

// import React from "react";
// import Image from "next/image";
// const ProcessImagesComponent = () => {
// 	return (
// 		<div className="my-2 bg-[#A9BFCB] py-2 md:my-4 md:py-4 lg:my-10 lg:py-10">
// 			<div className="flex items-center justify-center">
// 				{/* title */}
// 				<div
// 					className="cursor-pointer  md:h-[64px]  md:w-[150px] lg:h-[88px] lg:w-[565px]"
// 					style={{ position: "relative" }}
// 				>
// 					<Image src="/images/fromtotablejourneytitle.svg" alt="" fill style={{ objectFit: "contain" }} />
// 				</div>
// 			</div>

// 			{/* former to consumer images */}
// 			<div className="my-2 flex items-center justify-center md:my-4">
// 				{/* first div */}
// 				<div className="flex flex-col items-center justify-center ">
// 					{/* image */}
// 					<div
// 						className="h-[64px]  w-[150px]  cursor-pointer lg:h-[220px] lg:w-[220px]"
// 						style={{ position: "relative" }}
// 					>
// 						<Image src="/images/farmerimage.svg" alt="" fill style={{ objectFit: "contain" }} />
// 					</div>
// 					{/* title */}
// 					<h1 className="font-amatica text-[48px] font-bold leading-[100%] tracking-[0%]">Farmer</h1>
// 				</div>
// 				{/* arrow */}
// 				<div>
// 					<div className="  h-[25px] w-[36px] cursor-pointer" style={{ position: "relative" }}>
// 						<Image src="/images/nexticon.svg" alt="" fill style={{ objectFit: "contain" }} />
// 					</div>
// 				</div>
// 				{/* second div */}
// 				<div className="flex flex-col items-center justify-center ">
// 					{/* image */}
// 					<div
// 						className="h-[64px]  w-[150px]  cursor-pointer lg:h-[220px] lg:w-[220px]"
// 						style={{ position: "relative" }}
// 					>
// 						<Image src="/images/packagingimage.svg" alt="" fill style={{ objectFit: "contain" }} />
// 					</div>
// 					{/* title */}
// 					<h1 className="font-amatica text-[48px] font-bold leading-[100%] tracking-[0%]">Packaging</h1>
// 				</div>
// 				{/* arrow */}
// 				<div>
// 					<div className="  h-[25px] w-[36px] cursor-pointer" style={{ position: "relative" }}>
// 						<Image src="/images/nexticon.svg" alt="" fill style={{ objectFit: "contain" }} />
// 					</div>
// 				</div>
// 				{/* third div */}
// 				<div className="flex flex-col items-center justify-center ">
// 					{/* image */}
// 					<div
// 						className="h-[64px]  w-[150px]  cursor-pointer lg:h-[158px] lg:w-[158px]"
// 						style={{ position: "relative" }}
// 					>
// 						<Image src="/images/consumerimage.svg" alt="" fill style={{ objectFit: "contain" }} />
// 					</div>
// 					{/* title */}
// 					<h1 className="font-amatica text-[48px] font-bold leading-[100%] tracking-[0%]">Consumer</h1>
// 				</div>
// 			</div>
// 			{/* information */}
// 			<div className="items-center-justify-center flex max-w-[467px] lg:my-4">
// 				<p className="font-amatica text-center text-[24px] font-bold leading-[100%]">
// 					Yes you heard it right!!! , we supply product directly from farm without processing
// 				</p>
// 			</div>
// 		</div>
// 	);
// };

// export default ProcessImagesComponent;
