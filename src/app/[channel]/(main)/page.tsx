import AllCategories from "@/ui/components/category/AllCategories";
import { ProductListingSection } from "@/ui/components/ProductListingSection";
import ProcessImagesComponent from "@/ui/components/ProcessImagesComponent";
import Carousel from "@/ui/components/Carousel";
import ShopPage from "@/ui/components/HomeContent/OutletSection";
import YouTubeShortsCarousel from "@/ui/components/HomeContent/YoutubeShortsSection";

export default async function HomePage({
	params,
	searchParams,
}: {
	params: { channel: string };
	searchParams?: { cursor?: string };
}) {
	return (
		<main
			className="no-scrollbar mx-auto bg-[#F3F0F0]"
			style={{ scrollbarWidth: "none", msOverflowStyle: "none", overflowY: "scroll" }}
		>
			<Carousel />
			{/* Categories */}
			<div className="flex w-full items-center justify-center p-2 md:p-4 lg:p-8">
				<AllCategories />
			</div>

			{/* Products */}
			<div>
				<ProductListingSection
					channel={params.channel}
					cursor={typeof searchParams?.cursor === "string" ? searchParams.cursor : null}
				/>
			</div>

			<div>
				<YouTubeShortsCarousel />
			</div>

			{/* Process Steps */}
			<div>
				<ProcessImagesComponent />
			</div>

			<ShopPage />
		</main>
	);
}

// import { ProductListByCollectionDocument } from "@/gql/graphql";
// import { executeGraphQL } from "@/lib/graphql";
// import { ProductList } from "@/ui/components/ProductList";

// export const metadata = {
// 	title: "ACME Storefront, powered by Saleor & Next.js",
// 	description:
// 		"Storefront Next.js Example for building performant e-commerce experiences with Saleor - the composable, headless commerce platform for global brands.",
// };

// export default async function Page(props: { params: Promise<{ channel: string }> }) {
// 	const params = await props.params;
// 	const data = await executeGraphQL(ProductListByCollectionDocument, {
// 		variables: {
// 			slug: "featured-products",
// 			channel: params.channel,
// 		},
// 		revalidate: 60,
// 	});

// 	if (!data.collection?.products) {
// 		return null;
// 	}

// 	const products = data.collection?.products.edges.map(({ node: product }) => product);

// 	return (
// 		<section className="mx-auto max-w-7xl p-8 pb-16 ">
// 			<h2 className="sr-only">Product list</h2>

// 			<ProductList products={products} />

// 		</section>
// 	);
// }
