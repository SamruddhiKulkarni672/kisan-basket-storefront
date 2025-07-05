import Image from "next/image";
import TextHeading from "@/ui/components/shop/TextHeading";
import IconText from "@/ui/components/shop/IconText";
import SectionBox from "@/ui/components/shop/SectionBox";
import CategoryRow from "@/ui/components/shop/CategoryRow";
import ValueBox from "@/ui/components/shop/ValueBox";
import { ProductListingSection } from "@/ui/components/ProductListingSection";

import AllCategories from "@/ui/components/category/AllCategories";
import FilterSidebar from "@/ui/components/shop/FilterSIdebar";

export default async function ShopPage({
	params,
	searchParams,
}: {
	params: { channel: string };
	searchParams?: { cursor?: string };
}) {
	// const [searchTerm, setSearchTerm] = useState("");

	return (
		<div
			className="h-auto min-h-[400px] w-full bg-[#F3F0F0]"
			style={{ boxShadow: "4px 4px 7.2px 0px #716B6B40" }}
		>
			{/* Hero Banner */}
			<div className="relative h-[100px] w-full md:h-[238px]">
				<Image src="/images/shopimage.svg" alt="kisan basket image" fill style={{ objectFit: "cover" }} />
			</div>

			<div className="w-full ">
				{/* Categories */}
				<div className="flex w-full items-center justify-center px-2 ">
					<AllCategories />
				</div>

				{/* Products */}
				<div>
					<ProductListingSection
						channel={params.channel}
						cursor={typeof searchParams?.cursor === "string" ? searchParams.cursor : null}
					/>
				</div>
			</div>
		</div>
	);
}

// import React from "react";
// import Image from "next/image";
// import RangeSlider from "@/ui/components/shop/RangeSlider";
// const page = () => {
// 	return (
// 		<div
// 			className="h-auto min-h-[400px] w-full  bg-[#F3F0F0]"
// 			style={{ boxShadow: "4px 4px 7.2px 0px #716B6B40" }}
// 		>
// 			<div>
// 				{/* shop page image */}
// 				<div className="relative h-[100px] w-full cursor-pointer  md:h-[238px]">
// 					<Image
// 						src="/images/shopimage.svg"
// 						alt="kisan basket image"
// 						fill
// 						style={{ objectFit: "cover" }} // Changed from "contain" to "cover"
// 					/>
// 				</div>

// 				{/* filters section */}
// 				<div className="flex w-full  px-1 py-2 md:px-2 md:py-4 lg:px-6 lg:py-8">
// 					<div className="max-h-[736px] w-[337px] rounded-[16px] bg-[#E6E3E3] md:w-[20%] ">
// 						{/* heading */}
// 						<div className=" flex justify-between px-6 pb-2 pt-10">
// 							<div className="flex w-fit cursor-pointer  items-center gap-1">
// 								<div className="relative h-[20px] w-[20px]">
// 									<Image
// 										src="/images/filtericon.svg"
// 										alt="filter icon image"
// 										fill
// 										style={{ objectFit: "cover" }}
// 									/>
// 								</div>
// 								<div className="text-center text-[15px] font-medium leading-[20px] tracking-[0] text-[#383737]">
// 									Filter
// 								</div>
// 							</div>
// 							<div className="text-center text-[10px] font-medium leading-[20px] tracking-[0] text-[#439DB0]">
// 								Advanced
// 							</div>
// 						</div>
// 						{/*product content */}
// 						<div className="m-2 rounded-[10px] bg-[#FEFEFE] px-2 py-6">
// 							<div className=" ml-2 text-[12px] font-bold leading-[20px] tracking-[0] text-[#242424]">
// 								Product
// 							</div>
// 							{/* search products section */}
// 							<div className="  mt-2 flex h-[33px] items-center gap-4 rounded-[5px] bg-[#F2EDED]">
// 								<div className="relative ml-[20px] h-[20px] w-[20px]">
// 									<Image
// 										src="/images/productsearchicon.svg"
// 										alt="filter icon image"
// 										fill
// 										style={{ objectFit: "cover" }}
// 									/>
// 								</div>
// 								<div className="text-center text-[12px] font-medium leading-[20px] tracking-[0] text-[#878181]">
// 									Search
// 								</div>
// 							</div>
// 							{/* catgories section */}
// 							<div>
// 								{/* category 1 */}
// 								<div className="ml-6 mr-2 mt-4 flex justify-between">
// 									<div className=" text-[12px] font-bold leading-[20px] tracking-[0] text-[#494747]">
// 										Besan atta
// 									</div>
// 									<div className="relative  h-[20px] w-[20px] ">
// 										<Image
// 											src="/images/categorycheckicon.svg"
// 											alt="filter icon image"
// 											fill
// 											style={{ objectFit: "cover" }}
// 										/>
// 									</div>
// 								</div>
// 								{/* category 2 */}
// 								<div className="ml-6 mr-2 mt-4 flex justify-between">
// 									<div className=" text-[12px] font-bold leading-[20px] tracking-[0] text-[#494747]">
// 										Besan atta
// 									</div>
// 									<div className="relative  h-[20px] w-[20px] ">
// 										<Image
// 											src="/images/categorycheckicon.svg"
// 											alt="filter icon image"
// 											fill
// 											style={{ objectFit: "cover" }}
// 										/>
// 									</div>
// 								</div>

// 								{/* category 3 */}
// 								<div className="ml-6 mr-2 mt-4 flex justify-between">
// 									<div className=" text-[12px] font-bold leading-[20px] tracking-[0] text-[#494747]">
// 										Besan atta
// 									</div>
// 									<div className="relative  h-[20px] w-[20px] ">
// 										<Image
// 											src="/images/categorycheckicon.svg"
// 											alt="filter icon image"
// 											fill
// 											style={{ objectFit: "cover" }}
// 										/>
// 									</div>
// 								</div>
// 							</div>
// 						</div>

// 						{/*price content */}
// 						<div className="m-2 rounded-[10px] bg-[#FEFEFE] px-2 py-4">
// 							<div className=" ml-2 text-[12px] font-bold leading-[20px] tracking-[0] text-[#242424]">
// 								Price
// 							</div>
// 							{/* range slider */}
// 							<div>{/* <RangeSlider /> */}</div>
// 							{/* price from start to end */}
// 							<div className="mx-2 mt-4 flex justify-between">
// 								<div className=" h-[36.17307663px] w-[118.4765625px] rounded-[5px] border border-[#E5E3E3] ">
// 									<div className="flex px-8 py-2 text-[12px] font-bold leading-[20px] tracking-[0] text-[#292828]">
// 										500
// 									</div>
// 								</div>
// 								<div className=" h-[36.17307663px] w-[118.4765625px] rounded-[5px] border border-[#E5E3E3] ">
// 									<div className="flex px-8 py-2 text-[12px] font-bold leading-[20px] tracking-[0] text-[#292828]">
// 										5,677
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 						{/* Quantity content  */}
// 						<div className="m-2 rounded-[10px] bg-[#FEFEFE] px-2 py-4">
// 							<div className=" ml-2 text-[12px] font-bold leading-[20px] tracking-[0] text-[#242424]">
// 								Quantity
// 							</div>
// 							{/* range slider */}
// 							<div>{/* <RangeSlider /> */}</div>
// 							{/* price from start to end */}
// 							<div className="mx-2 mt-4 flex justify-between">
// 								<div className=" h-[36.17307663px] w-[118.4765625px] rounded-[5px] border border-[#E5E3E3] ">
// 									<div className="flex items-center justify-center text-center text-[10px] font-bold leading-[20px] tracking-[0] text-[#645959]">
// 										All
// 									</div>
// 								</div>
// 								<div className=" h-[36.17307663px] w-[118.4765625px] rounded-[5px] border border-[#E5E3E3] ">
// 									<div className="flex  text-[10px] font-bold leading-[20px] tracking-[0] text-[#645959]">
// 										250
// 									</div>
// 								</div>
// 								<div className=" h-[36.17307663px] w-[118.4765625px] rounded-[5px] border border-[#E5E3E3] ">
// 									<div className="flex  text-[10px] font-bold leading-[20px] tracking-[0] text-[#645959]">
// 										1 kg
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 					</div>

// 					{/* categories and products */}
// 					<div className="px-1 md:w-[80%] lg:px-2">
// 						<div>categories</div>
// 						<div>products</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default page;
