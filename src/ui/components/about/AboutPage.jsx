"use client";

import HeroSection from "@/ui/components/about/HeroSection";
import OurStorySection from "@/ui/components/about/OurStorySection";
import MissionValues from "@/ui/components/about/MissionValues";

export default function AboutPage() {
	return (
		<main className="bg-white text-gray-800">
			<HeroSection />
			<OurStorySection />
			<section>
				<MissionValues />
			</section>
		</main>
	);
}
