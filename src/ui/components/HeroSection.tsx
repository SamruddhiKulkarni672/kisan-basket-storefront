"use client";

import React from "react";
import Image from "next/image";

type HeroSectionProps = {
	imageUrl: string;
	height?: string;
	title?: string;
	subtitle?: string;
};

const HeroSection: React.FC<HeroSectionProps> = ({
	imageUrl = "/images/herosection.svg",
	height = "500px",
	title = "Kisan basket",
	subtitle = "Kisanbasket",
}) => {
	return (
		<div className="relative w-screen overflow-hidden" style={{ height }}>
			<Image src={imageUrl} alt="Hero background" fill priority className="object-cover" />

			{/* {(title || subtitle) && (
				<div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/40 text-center text-white">
					{title && <h1 className="text-4xl font-bold md:text-5xl">{title}</h1>}
					{subtitle && <p className="mt-2 max-w-2xl text-lg md:text-xl">{subtitle}</p>}
				</div>
			)} */}
		</div>
	);
};

export default HeroSection;
