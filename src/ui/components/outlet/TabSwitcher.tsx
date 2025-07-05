interface TabSwitcherProps {
	tabs: string[];
	selected: string;
	onSelect: (tab: string) => void;
}

export default function TabSwitcher({ tabs, selected, onSelect }: TabSwitcherProps) {
	return (
		<div className="flex flex-wrap gap-4">
			{tabs.map((tab) => (
				<button
					key={tab}
					onClick={() => onSelect(tab)}
					className={`rounded-full px-4 py-2 text-lg font-semibold transition ${
						selected === tab ? "bg-[#A6AF4D] text-white" : "border border-gray-400 bg-white text-black"
					}`}
				>
					{tab}
				</button>
			))}
		</div>
	);
}
