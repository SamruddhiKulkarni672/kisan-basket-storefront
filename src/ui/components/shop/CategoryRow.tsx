import Image from "next/image";
import TextHeading from "./TextHeading";
const CategoryRow = ({ label }: { label: string }) => (
	<div className="ml-6 mr-2 mt-4 flex cursor-pointer justify-between">
		<TextHeading className="text-[12px] font-bold text-[#494747]">{label}</TextHeading>
		<div className="relative h-5 w-5">
			<Image src="/images/categorycheckicon.svg" alt="check icon" fill style={{ objectFit: "cover" }} />
		</div>
	</div>
);
export default CategoryRow;
