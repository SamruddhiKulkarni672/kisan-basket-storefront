import OutletMap from "./OutletMap";

interface OutletProps {
	outlet: {
		name: string;
		image: string;
		address: string;
		phone: string;
		starts: string;
		ends: string;
		mapEmbedUrl: string;
	};
}

export default function OutletCard({ outlet }: OutletProps) {
	return (
		<div className="grid grid-cols-1 gap-8 rounded-xl bg-white p-6 shadow-md lg:grid-cols-2">
			<div className="overflow-hidden rounded-lg">
				<img src={outlet.image} alt={outlet.name} className="h-full w-full rounded-lg object-cover" />
			</div>

			<div className="space-y-4">
				<h2 className="text-3xl font-semibold">{outlet.name}</h2>
				<div className="space-y-2 text-gray-700">
					<p>
						<span className="font-semibold">📍 Address:</span> {outlet.address}
					</p>
					<p>
						<span className="font-semibold">📞 Phone:</span> {outlet.phone}
					</p>
					<p>
						<span className="font-semibold">⏱️ Starts:</span> {outlet.starts}
					</p>
					<p>
						<span className="font-semibold">⏰ Ends:</span> {outlet.ends}
					</p>
				</div>
				<OutletMap url={outlet.mapEmbedUrl} />
			</div>
		</div>
	);
}
