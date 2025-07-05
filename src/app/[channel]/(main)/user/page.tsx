"use client";
import { Suspense } from "react";
import { Loader } from "@/ui/atoms/Loader";
import AllCategories from "@/ui/components/category/AllCategories";

import Image from "next/image";
export default function HomePage() {
	return (
		<Suspense fallback={<Loader />}>
			<main className="mx-auto max-w-7xl p-8">
				<AllCategories />
				<div className="flex justify-center">
					<div className="relative h-64 w-64 lg:h-[110px] lg:w-[450px]">
						<Image src="/images/bestsellerimage.svg" alt="Kisan Basket" fill className="object-contain" />
					</div>
				</div>
			</main>
		</Suspense>
	);
}
