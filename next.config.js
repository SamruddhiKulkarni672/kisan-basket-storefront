/** @type {import('next').NextConfig} */
const config = {
	images: {
		domains: ["localhost"], // also add IPs or domain names as needed

		remotePatterns: [
			{
				hostname: "*",
			},
		],
	},
	experimental: {
		typedRoutes: false,
	},

	async redirects() {
		return [
			{
				source: "/",
				destination: "/kisan-basket",
				permanent: false,
			},
		];
	},
	// used in the Dockerfile
	output:
		process.env.NEXT_OUTPUT === "standalone"
			? "standalone"
			: process.env.NEXT_OUTPUT === "export"
				? "export"
				: undefined,
};

export default config;
