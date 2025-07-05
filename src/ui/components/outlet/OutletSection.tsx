import Image from "next/image";
import { ReactElement } from "react";

interface OutletSectionProps {
	id: number;
	imageSrc: string;
	title: string;
	description: string;
	bestFor: string;
	signatureFeature: string;
	sectionImageSrc: string;
}

const OutletSection = ({
	id,
	imageSrc,
	title,
	description,
	bestFor,
	signatureFeature,
	sectionImageSrc,
}: OutletSectionProps): ReactElement => {
	const isOdd = id % 2 !== 0;

	return (
		<div className="my-2 lg:my-2">
			<div className="mx-auto w-full max-w-7xl px-4 md:px-2 lg:px-4">
				<div className={`flex flex-col items-center md:flex-row ${isOdd ? "md:flex-row-reverse" : ""}`}>
					{/* image - always 40% width */}
					<div className="mb-2 w-full md:mb-0 md:w-[40%] lg:w-[40%]">
						<div className="relative h-[200px] w-full sm:h-[300px] md:h-[300px] md:w-[320px] lg:h-[466px] lg:w-[410px]">
							<Image
								src={imageSrc}
								alt={title}
								fill
								style={{ objectFit: "contain" }}
								className="object-contain"
							/>
						</div>
					</div>

					{/* content - always 60% width */}
					<div className="w-full px-4 md:w-[60%] md:px-0">
						<h1 className="font-amatica text-[22px] font-bold leading-[100%] tracking-[0.07em] text-[#389DA8] md:text-[32px] lg:text-[64px]">
							{title}
						</h1>
						<p className="mt-2 font-amatica text-[16px] font-bold leading-[110%] sm:text-[24px] md:mt-6 md:text-[18px] lg:max-w-[660px] lg:text-[32px]">
							{description}
						</p>
						<p className="mt-3 font-amatica text-[16px] font-bold leading-[110%] md:mt-2 md:text-[18px] lg:text-[36px]">
							Best For: {bestFor}
						</p>
						<p className="mt-3 font-amatica text-[16px] font-bold leading-[110%] sm:text-[18px] md:mt-4 lg:text-[36px]">
							Signature Feature: {signatureFeature}
						</p>
					</div>
				</div>
			</div>
			{/* section image */}
			<div className="relative h-[60px] w-full sm:h-[80px] md:h-[100px] lg:my-4 lg:h-[134px]">
				<Image
					src={sectionImageSrc}
					alt={`${title} section divider`}
					fill
					style={{ objectFit: "contain" }}
					className="object-contain"
				/>
			</div>
		</div>
	);
};

export default OutletSection;

// import Image from "next/image";
// import { ReactElement } from "react";

// interface OutletSectionProps {
// 	imageSrc: string;
// 	title: string;
// 	description: string;
// 	bestFor: string;
// 	signatureFeature: string;
// 	sectionImageSrc: string;
// }

// const OutletSection = ({
// 	imageSrc,
// 	title,
// 	description,
// 	bestFor,
// 	signatureFeature,
// 	sectionImageSrc,
// }: OutletSectionProps): ReactElement => {
// 	return (
// 		<div className="my-2 lg:my-2">
// 			<div className="mx-auto w-full max-w-7xl px-4 md:px-2  lg:px-4">
// 				<div className="flex flex-col items-center md:flex-row">
// 					{/* image */}
// 					<div className="mb-2 w-full md:mb-0 md:w-[40%] lg:w-[40%]">
// 						<div className="relative  h-[200px] w-full sm:h-[300px]  md:h-[300px] md:w-[320px]  lg:h-[466px] lg:w-[410px]">
// 							<Image
// 								src={imageSrc}
// 								alt={title}
// 								fill
// 								style={{ objectFit: "contain" }}
// 								className="object-contain"
// 							/>
// 						</div>
// 					</div>
// 					{/* content */}
// 					<div className="w-full px-4 md:w-[60%] md:px-0">
// 						<h1 className="font-amatica text-[22px] font-bold leading-[100%] tracking-[0.07em] text-[#389DA8] md:text-[32px]  lg:text-[64px]">
// 							{title}
// 						</h1>
// 						<p className="mt-2 font-amatica text-[16px] font-bold leading-[110%] sm:text-[24px] md:mt-6 md:text-[18px] lg:max-w-[660px] lg:text-[32px]">
// 							{description}
// 						</p>
// 						<p className="mt-3 font-amatica text-[16px] font-bold leading-[110%]  md:mt-2 md:text-[18px] lg:text-[36px]">
// 							Best For: {bestFor}
// 						</p>
// 						<p className="mt-3 font-amatica text-[16px] font-bold leading-[110%] sm:text-[18px] md:mt-4  lg:text-[36px]">
// 							Signature Feature: {signatureFeature}
// 						</p>
// 					</div>
// 				</div>
// 			</div>
// 			{/* section image */}
// 			<div className="relative h-[60px] w-full  sm:h-[80px] md:h-[100px] lg:my-4 lg:h-[134px]">
// 				<Image
// 					src={sectionImageSrc}
// 					alt={`${title} section divider`}
// 					fill
// 					style={{ objectFit: "contain" }}
// 					className="object-contain"
// 				/>
// 			</div>
// 		</div>
// 	);
// };

// export default OutletSection;
