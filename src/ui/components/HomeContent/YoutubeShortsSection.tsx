"use client";

import React, { useRef, useState } from "react";
import { FaYoutube } from "react-icons/fa";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const shorts = [
	{
		id: "short1",
		title: "Wear it everyday",
		videoId: "ypeCMPvjB1w",
	},
	{
		id: "short2",
		title: "Elegant Dress",
		videoId: "ifxuWU7zClA",
	},
	{
		id: "short3",
		title: "Behind the Scenes",
		videoId: "6B7qMSmuFjE",
	},
	{
		id: "short4",
		title: "Glam Fashion",
		videoId: "Z_kpY5fIkC4",
	},
	{
		id: "short5",
		title: "Glam Fashion",
		videoId: "Z_kpY5fIkC4",
	},
];

export default function YouTubeShortsCarousel() {
	const scrollRef = useRef<HTMLDivElement>(null);
	const [activeVideoIndex, setActiveVideoIndex] = useState(0);

	const scroll = (direction: "left" | "right") => {
		if (scrollRef.current) {
			scrollRef.current.scrollBy({
				left: direction === "left" ? -300 : 300,
				behavior: "smooth",
			});

			setActiveVideoIndex((prev) => {
				const nextIndex =
					direction === "left" ? Math.max(0, prev - 1) : Math.min(shorts.length - 1, prev + 1);
				return nextIndex;
			});
		}
	};

	return (
		<div className="mx-auto max-w-screen-xl px-2 py-8">
			{/* Header */}
			<div className="mb-6 flex items-center justify-between">
				<div className="flex items-center gap-3">
					<div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-lg font-bold text-white">
						KB
					</div>
					<div>
						<h2 className="text-lg font-semibold">Our latest YouTube Shorts</h2>
						<p className="text-sm text-gray-500">{shorts.length} posts</p>
					</div>
				</div>
			</div>

			{/* Carousel */}
			<div className="relative">
				<button
					onClick={() => scroll("left")}
					className="absolute left-0 top-1/2 z-20 -translate-y-1/2 rounded-full bg-[#A9B243] p-2 shadow md:p-3"
				>
					<FaChevronLeft />
				</button>

				<div
					ref={scrollRef}
					className="no-scrollbar flex w-full gap-6 overflow-x-auto scroll-smooth px-5 md:px-8"
				>
					{shorts.map((short, index) => (
						<div
							key={short.id}
							className="relative flex-shrink-0 overflow-hidden rounded-3xl shadow-md"
							style={{
								aspectRatio: "9 / 16",
								minWidth: "270px",
								maxWidth: "260px",
								boxShadow: "0px -29px 17px 0px #00000075 inset",
							}}
						>
							{index === activeVideoIndex ? (
								<iframe
									className="h-full w-full rounded-xl"
									src={`https://www.youtube.com/embed/${short.videoId}?autoplay=1&mute=1&playsinline=1`}
									title={short.title}
									frameBorder="0"
									allow="autoplay; encrypted-media"
									allowFullScreen
								></iframe>
							) : (
								<div
									className="relative h-full w-full"
									style={{ boxShadow: "0px -29px 17px 0px #00000075 inset" }}
								>
									<img
										src={`https://img.youtube.com/vi/${short.videoId}/hqdefault.jpg`}
										alt={short.title}
										className="h-full w-full rounded-xl object-cover"
									/>
									<div className="absolute inset-0 rounded-xl bg-black/30" />

									{/*  Square Overlay */}
									<div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
										<div className="h-[420px] w-[235px] border-2 border-[#cdcaca]" />
									</div>

									<div className="absolute bottom-0 left-0 right-0 rounded-b-xl bg-gradient-to-t from-black via-[#444638]/70 to-transparent p-3 text-white">
										<h3 className="text-sm font-semibold">{short.title}</h3>
									</div>

									<a
										href={`https://www.youtube.com/watch?v=${short.videoId}`}
										target="_blank"
										rel="noopener noreferrer"
										className="absolute inset-0 z-0 flex items-center justify-center"
									>
										<div className="relative h-16 w-16">
											<Image src="/images/playButton.svg" alt="Play Button" fill className="object-contain" />
										</div>
									</a>
								</div>
							)}
						</div>
					))}
				</div>

				<button
					onClick={() => scroll("right")}
					className="absolute right-0 top-1/2 z-20 -translate-y-1/2 rounded-full bg-[#A9B243] p-2 shadow md:p-3"
				>
					<FaChevronRight />
				</button>
			</div>
		</div>
	);
}
