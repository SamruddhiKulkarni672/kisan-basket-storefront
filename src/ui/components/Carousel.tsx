"use client";
import React, { useEffect, useState } from "react";

type MediaItem = {
	type: "image" | "video" | "youtube";
	src: string;
};

const mediaItems: MediaItem[] = [
	{ type: "image", src: "/images/image1.png" },
	{ type: "image", src: "/images/image2.png" },
	{
		type: "youtube",
		src: "https://www.youtube.com/embed/o_CnpEKJuvc?autoplay=1&mute=1&loop=1&playlist=o_CnpEKJuvc",
	},
];

const Carousel: React.FC = () => {
	const [current, setCurrent] = useState(0);

	const nextSlide = () => {
		setCurrent((prev) => (prev === mediaItems.length - 1 ? 0 : prev + 1));
	};

	const prevSlide = () => {
		setCurrent((prev) => (prev === 0 ? mediaItems.length - 1 : prev - 1));
	};

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrent((prev) => (prev === mediaItems.length - 1 ? 0 : prev + 1));
		}, 6000);

		return () => clearInterval(interval);
	}, []); // ✅ only run once

	return (
		<div className="mt-10 flex h-[400px] w-screen items-center justify-center">
			<div className="relative h-full w-full overflow-hidden">
				{mediaItems.map((item, index) => {
					const isActive = index === current;
					const commonClasses = `absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
						isActive ? "opacity-100 z-10" : "opacity-0 z-0"
					}`;

					if (item.type === "image") {
						return (
							<img
								key={index}
								src={item.src}
								alt={`slide-${index}`}
								className={`${commonClasses} object-cover`}
							/>
						);
					}

					if (item.type === "video") {
						return (
							<video
								key={index}
								src={item.src}
								autoPlay={isActive}
								muted
								loop
								playsInline
								preload="auto"
								className={`${commonClasses} bg-black object-cover`}
							/>
						);
					}

					if (item.type === "youtube" && isActive) {
						return (
							<iframe
								key={index}
								src={item.src}
								allow="autoplay; encrypted-media"
								allowFullScreen
								title={`YouTube video ${index}`}
								className={`${commonClasses} h-full w-full`}
							></iframe>
						);
					}

					return null;
				})}

				{/* Navigation Buttons */}
				<button
					onClick={prevSlide}
					className="absolute left-4 top-1/2 z-20 w-12 -translate-y-1/2 transform rounded-full bg-black bg-opacity-50 p-3 text-2xl text-white"
				>
					❮
				</button>
				<button
					onClick={nextSlide}
					className="absolute right-4 top-1/2 z-20 w-12 -translate-y-1/2 transform rounded-full bg-black bg-opacity-50 p-3 text-2xl text-white"
				>
					❯
				</button>
			</div>
		</div>
	);
};

export default Carousel;
