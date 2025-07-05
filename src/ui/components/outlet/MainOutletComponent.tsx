import React from "react";
import Image from "next/image";
import ShopPage from "@/ui/components/HomeContent/OutletSection";
import OutletSection from "./OutletSection";
import OutletList from "@/ui/components/outlets/OutletList";
const MainOutletComponent = () => {
	const outlets = [
		{
			id: 0,
			imageSrc: "/images/outlet1.svg",
			title: "Banner Outlet",
			description:
				"Nestled in the heart of a bustling tech neighborhood, our Baner outlet is a go-to spot for health-conscious professionals.",
			bestFor: "On-the-go shoppers, corporate crowd",
			signatureFeature: "Quick Grab Section",
			sectionImageSrc: "/images/outletsectionimage1.svg",
		},

		{
			id: 1,
			imageSrc: "/images/outlet1.svg",
			title: "Downtown Outlet",
			description:
				"Located in the city center, this outlet serves busy urban dwellers looking for quick, healthy options.",
			bestFor: "Urban professionals, students",
			signatureFeature: "Express Lunch Counter",
			sectionImageSrc: "/images/outletsectionimage2.svg",
		},
		{
			id: 2,
			imageSrc: "/images/outlet1.svg",
			title: "Downtown Outlet",
			description:
				"Located in the city center, this outlet serves busy urban dwellers looking for quick, healthy options.",
			bestFor: "Urban professionals, students",
			signatureFeature: "Express Lunch Counter",
			sectionImageSrc: "/images/outletsectionimage3.svg",
		},
		{
			id: 3,
			imageSrc: "/images/outlet1.svg",
			title: "Downtown Outlet",
			description:
				"Located in the city center, this outlet serves busy urban dwellers looking for quick, healthy options.",
			bestFor: "Urban professionals, students",
			signatureFeature: "Express Lunch Counter",
			sectionImageSrc: "/images/outletsectionimage4.svg",
		},
	];
	return (
		<div>
			{/* title */}
			<div className="relative h-[80px] w-full  md:h-[150px] lg:h-[260px]">
				<Image
					src="/images/outlettitleimage.svg"
					alt="kisan basket image"
					fill
					className="object-contain lg:object-cover"
				/>
				<div className="absolute inset-0 z-10 flex items-center lg:ml-32 ">
					<h1 className="text-custom shadow-custom w-[280px] px-4 font-konkhmer  text-[18px] leading-tight tracking-[0em] text-[#FAF8EF] md:w-[500px] md:px-8 md:text-[30px] lg:w-[700px] lg:px-0 lg:text-[55px]">
						Step in for health, taste, and trust.
					</h1>
				</div>
			</div>

			{/* outlet main content */}
			<div className="bg-[#F1F3F4]">
				{/* home image */}
				<div className=" hidden lg:flex lg:justify-end   lg:px-24 lg:py-16">
					<div className="relative  h-[120px]  w-[140px]  md:h-[229px] md:w-[240px] ">
						<Image
							src="/images/outlethomeimage.svg"
							alt="kisan basket image"
							fill
							className="object-contain lg:object-cover"
						/>
					</div>
				</div>
				{/* shop outlet section */}
				<div>
					<ShopPage />
				</div>
				{/* <div>
					<main className="min-h-screen bg-[#EAE6E6] p-4 md:p-10">
      <OutletList />
    </main>
				</div> */}
			</div>
			{/* what make unique section  whatmakesuniquetitle.svg */}
			<div className=" bg-[#F1F3F4]">
				{/* heading  */}
				<div className="flex items-center justify-center">
					<div className="relative mt-4 h-[50px] w-[250px] md:mt-6 md:h-[74px] md:w-[320px] lg:mb-20 lg:mt-32 lg:h-[100px] lg:w-[700px] ">
						<Image
							src="/images/whatmakesuniquetitle.svg"
							alt="From to Table Journey Title"
							fill
							style={{ objectFit: "contain" }}
						/>
					</div>
				</div>

				<div>
					{outlets.map((outlet) => (
						<OutletSection
							key={outlet.id}
							id={outlet.id}
							imageSrc={outlet.imageSrc}
							title={outlet.title}
							description={outlet.description}
							bestFor={outlet.bestFor}
							signatureFeature={outlet.signatureFeature}
							sectionImageSrc={outlet.sectionImageSrc}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default MainOutletComponent;
