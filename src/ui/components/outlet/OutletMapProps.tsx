interface OutletMapProps {
	url: string;
}

export default function OutletMap({ url }: OutletMapProps) {
	return (
		<div className="mt-4 h-64 w-full overflow-hidden rounded-lg">
			<iframe src={url} className="h-full w-full border-none" allowFullScreen loading="lazy" />
		</div>
	);
}
