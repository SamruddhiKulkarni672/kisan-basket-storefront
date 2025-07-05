import { type ReactNode } from "react";
import Footer from "@/ui/components/Footer";
import { Header } from "@/ui/components/Header";

export const metadata = {
	title: "Saleor Storefront example",
	description: "Starter pack for building performant e-commerce experiences with Saleor.",
};

export default async function RootLayout(props: { children: ReactNode; params: { channel: string } }) {
	const { params } = props;

	return (
		<>
			<Header channel={params.channel} />
			{/* <Carousel /> */}
			<div className="no-scrollbar scrollbar-hide flex min-h-[calc(100dvh-64px)] flex-col">
				<main className="flex-1">{props.children}</main>

				<Footer channel={params.channel} />
			</div>
		</>
	);
}

// import { type ReactNode } from "react";
// import { Footer } from "@/ui/components/Footer";
// import { Header } from "@/ui/components/Header";
// import Carousel from "@/ui/components/Carousel";
// import { ProductListingSection } from "@/ui/components/ProductListingSection";
// import ProcessImagesComponent from "@/ui/components/ProcessImagesComponent";

// import AllCategories from "@/ui/components/category/AllCategories";

// import Image from "next/image";
// export const metadata = {
// 	title: "Saleor Storefront example",
// 	description: "Starter pack for building performant e-commerce experiences with Saleor.",
// };

// export default async function RootLayout(props: {
// 	children: ReactNode;
// 	params: Promise<{ channel: string }>;
// }) {
// 	const channel = (await props.params).channel;

// 	return (
// 		<>
// 			<Header channel={channel} />

// 			<div className="flex min-h-[calc(100dvh-64px)] flex-col bg-[#F3F0F0] ">
// 				<main className="flex-1 ">
// 					<div>{props.children}</div>

// 					<div>
// 						<main className="mx-auto ">
// 							{/* all categories */}
// 							<div className=" flex w-full  items-center justify-center  p-8">
// 								<AllCategories />
// 							</div>
// 							{/* all products */}
// 							<div>

// 							</div>
// 							<div>
// 								<ProcessImagesComponent />
// 							</div>
// 						</main>
// 					</div>
// 				</main>

// 				<Footer channel={channel} />
// 			</div>
// 		</>
// 	);
// }
