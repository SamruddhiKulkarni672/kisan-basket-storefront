"use client";
import React, { useState } from "react";
import TabSwitcher from "./TabSwitcher";
import OutletCard from "./OutletCard";

const outletData = [
	{
		name: "Magarpatta",
		image: "/images/outlet.jpg",
		address: "lorem epsum uijoi n xsnxjniu",
		phone: "9860862963",
		starts: "Monday–Friday 9AM",
		ends: "Monday–Friday 8PM",
		mapEmbedUrl: "https://www.google.com/maps/embed?...", // Replace with actual map URL
	},
	// Add more outlet data here...
];

export default function OutletList() {
	const [selectedTab, setSelectedTab] = useState("Magarpatta");
	const currentOutlet = outletData.find((o) => o.name === selectedTab)!;

	return (
		<div className="space-y-6">
			<TabSwitcher
				tabs={["Magarpatta", "Baner", "Hadapsar", "Bhugaon"]}
				selected={selectedTab}
				onSelect={setSelectedTab}
			/>
			<OutletCard outlet={currentOutlet} />
		</div>
	);
}
