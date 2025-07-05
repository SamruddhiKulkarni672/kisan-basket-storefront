import Image from "next/image";
import TextHeading from "@/ui/components/shop/TextHeading";
import IconText from "@/ui/components/shop/IconText";
import SectionBox from "@/ui/components/shop/SectionBox";
import CategoryRow from "@/ui/components/shop/CategoryRow";
import ValueBox from "@/ui/components/shop/ValueBox";

export default async function FilterSidebar() {
	return (
		<div>
			{/* Main Content Section */}

			{/* Sidebar - Fixed */}
			<div className="sticky top-4 h-[calc(100vh-2rem)] w-full self-start overflow-y-auto rounded-[16px] bg-[#E6E3E3] md:w-[30%] lg:w-[25%]">
				{/* Filter Header */}
				<div className="flex justify-between px-4 pb-2 pt-6">
					<IconText icon="/images/filtericon.svg" text="Filter" textClass="text-[15px] text-[#383737]" />
					<div className="text-[10px] font-medium leading-[20px] text-[#439DB0]">Advanced</div>
				</div>

				{/* Product Section */}
				<SectionBox>
					<TextHeading>Product</TextHeading>
					{/* <div className="mt-2 flex h-[33px] items-center rounded-[5px] bg-[#F2EDED] px-4">
							<IconText icon="/images/productsearchicon.svg" text="Search" />
						</div> */}
					<div className="mt-2 flex h-[33px] items-center rounded-[5px] bg-[#F2EDED] px-4">
						<div className="relative mr-2 h-4 w-4">
							<Image
								src="/images/productsearchicon.svg"
								alt="Search Icon"
								fill
								style={{ objectFit: "contain" }}
							/>
						</div>
						<input
							type="text"
							placeholder="Search"
							value="Search"
							// onChange={(e) => setSearchTerm(e.target.value)}
							className="w-full border-none bg-transparent text-[12px] text-[#878181] outline-none placeholder:text-[#878181] focus:border-none focus:outline-none"
						/>
					</div>

					{["Fruits", "Vegetables", "Bakery", "Aata", "Oil", "Dryfruits"].map((item, idx) => (
						<CategoryRow key={idx} label={item} />
					))}
				</SectionBox>

				{/* Price Section */}

				<SectionBox>
					<TextHeading>Price</TextHeading>
					<div className="mt-2">{/* <PriceSlider /> */}</div>
					<div className="mt-4 grid grid-cols-2 gap-2">
						<ValueBox value="500" textClass="text-[12px] font-bold text-[#292828]" />
						<ValueBox value="5,677" textClass="text-[12px] font-bold text-[#292828]" />
					</div>
				</SectionBox>

				{/* Quantity Section */}
				<SectionBox>
					<TextHeading>Quantity</TextHeading>
					<div className="mt-2">{/* <RangeSlider /> */}</div>
					<div className="mt-4 grid grid-cols-3 gap-2">
						{["All", "250", "1 kg"].map((qty, idx) => (
							<ValueBox key={idx} value={qty} textClass="text-[10px] font-bold text-[#645959]" />
						))}
					</div>
				</SectionBox>
			</div>
		</div>
	);
}
