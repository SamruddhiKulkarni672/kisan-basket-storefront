import Image from "next/image";
const IconText = ({
	icon,
	text,
	textClass = "text-[12px] text-[#878181]",
}: {
	icon: string;
	text: string;
	textClass?: string;
}) => (
	<div className="flex items-center gap-2">
		<div className="relative h-5 w-5">
			<Image src={icon} alt="icon" fill style={{ objectFit: "cover" }} />
		</div>
		<div className={`font-medium leading-5 tracking-[0] ${textClass}`}>{text}</div>
	</div>
);
export default IconText;
