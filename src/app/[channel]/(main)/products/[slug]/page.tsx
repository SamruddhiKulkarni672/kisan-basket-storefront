import edjsHTML from "editorjs-html";
import { revalidatePath } from "next/cache";
import { notFound } from "next/navigation";
import { type ResolvingMetadata, type Metadata } from "next";
import xss from "xss";
import { invariant } from "ts-invariant";
import { type WithContext, type Product } from "schema-dts";
import { AddButton } from "./AddButton";
import { VariantSelector } from "@/ui/components/VariantSelector";
import { executeGraphQL } from "@/lib/graphql";
import { formatMoney, formatMoneyRange } from "@/lib/utils";
import { CheckoutAddLineDocument, ProductDetailsDocument, ProductListDocument } from "@/gql/graphql";
import * as Checkout from "@/lib/checkout";
import { AvailabilityMessage } from "@/ui/components/AvailabilityMessage";
import { FaIndianRupeeSign } from "react-icons/fa6";

import Image from "next/image";

export async function generateMetadata(
	props: {
		params: Promise<{ slug: string; channel: string }>;
		searchParams: Promise<{ variant?: string }>;
	},
	parent: ResolvingMetadata,
): Promise<Metadata> {
	const [searchParams, params] = await Promise.all([props.searchParams, props.params]);

	const { product } = await executeGraphQL(ProductDetailsDocument, {
		variables: {
			slug: decodeURIComponent(params.slug),
			channel: params.channel,
		},
		revalidate: 60,
	});

	if (!product) {
		notFound();
	}

	const productName = product.seoTitle || product.name;
	const variantName = product.variants?.find(({ id }) => id === searchParams.variant)?.name;
	const productNameAndVariant = variantName ? `${productName} - ${variantName}` : productName;

	return {
		title: `${product.name} | ${product.seoTitle || (await parent).title?.absolute}`,
		description: product.seoDescription || productNameAndVariant,
		alternates: {
			canonical: process.env.NEXT_PUBLIC_STOREFRONT_URL
				? process.env.NEXT_PUBLIC_STOREFRONT_URL + `/products/${encodeURIComponent(params.slug)}`
				: undefined,
		},
		openGraph: product.thumbnail
			? {
					images: [
						{
							url: product.thumbnail.url,
							alt: product.name,
						},
					],
				}
			: null,
	};
}

export async function generateStaticParams({ params }: { params: { channel: string } }) {
	const { products } = await executeGraphQL(ProductListDocument, {
		revalidate: 60,
		variables: { first: 20, channel: params.channel },
		withAuth: false,
	});

	const paths = products?.edges.map(({ node: { slug } }) => ({ slug })) || [];
	return paths;
}

const parser = edjsHTML();

export default async function Page(props: {
	params: Promise<{ slug: string; channel: string }>;
	searchParams: Promise<{ variant?: string }>;
}) {
	const [searchParams, params] = await Promise.all([props.searchParams, props.params]);

	const { product } = await executeGraphQL(ProductDetailsDocument, {
		variables: {
			slug: decodeURIComponent(params.slug),
			channel: params.channel,
		},
		revalidate: 60,
	});

	if (!product) {
		notFound();
	}

	const description = product?.description ? parser.parse(JSON.parse(product?.description)) : null;

	const variants = product.variants;
	const selectedVariantID = searchParams.variant;
	const selectedVariant = variants?.find(({ id }) => id === selectedVariantID);

	async function addItem() {
		"use server";

		const checkout = await Checkout.findOrCreate({
			checkoutId: await Checkout.getIdFromCookies(params.channel),
			channel: params.channel,
		});
		invariant(checkout, "This should never happen");

		await Checkout.saveIdToCookie(params.channel, checkout.id);

		if (!selectedVariantID) {
			return;
		}

		await executeGraphQL(CheckoutAddLineDocument, {
			variables: {
				id: checkout.id,
				productVariantId: decodeURIComponent(selectedVariantID),
			},
			cache: "no-cache",
		});

		revalidatePath("/cart");
	}

	const isAvailable = variants?.some((variant) => variant.quantityAvailable) ?? false;

	const price = selectedVariant?.pricing?.price?.gross
		? formatMoney(selectedVariant.pricing.price.gross.amount, selectedVariant.pricing.price.gross.currency)
		: isAvailable
			? formatMoneyRange({
					start: product?.pricing?.priceRange?.start?.gross,
					stop: product?.pricing?.priceRange?.stop?.gross,
				})
			: "";

	const productJsonLd: WithContext<Product> = {
		"@context": "https://schema.org",
		"@type": "Product",
		image: product.thumbnail?.url,
		...(selectedVariant
			? {
					name: `${product.name} - ${selectedVariant.name}`,
					description: product.seoDescription || `${product.name} - ${selectedVariant.name}`,
					offers: {
						"@type": "Offer",
						availability: selectedVariant.quantityAvailable
							? "https://schema.org/InStock"
							: "https://schema.org/OutOfStock",
						priceCurrency: selectedVariant.pricing?.price?.gross.currency,
						price: selectedVariant.pricing?.price?.gross.amount,
					},
				}
			: {
					name: product.name,
					description: product.seoDescription || product.name,
					offers: {
						"@type": "AggregateOffer",
						availability: product.variants?.some((variant) => variant.quantityAvailable)
							? "https://schema.org/InStock"
							: "https://schema.org/OutOfStock",
						priceCurrency: product.pricing?.priceRange?.start?.gross.currency,
						lowPrice: product.pricing?.priceRange?.start?.gross.amount,
						highPrice: product.pricing?.priceRange?.stop?.gross.amount,
					},
				}),
	};

	return (
		<section className=" bg-[#EFEEEE]   p-8 md:px-[100px]">
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(productJsonLd),
				}}
			/>
			<form className="grid grid-cols-1 gap-6 md:grid-cols-2" action={addItem}>
				{/* Left: Product Image (Styled like reference) */}
				<div className="flex items-center justify-center rounded-2xl bg-white p-8 shadow-xl">
					<Image
						src="/ac1968ee-a374-4adc-b962-c82ad31f40c9.png"
						alt={product.name}
						width={500}
						height={500}
						className="rounded-xl"
						priority
					/>
				</div>

				{/* Right: Product Details */}
				<div className="flex flex-col justify-center px-6 py-0">
					<h1 className="mb-2 text-2xl font-bold text-neutral-800">{product.name}</h1>
					<div className="mt-2 flex items-center gap-1 text-sm leading-[1.2] text-[#81859C] line-through sm:text-base">
						<FaIndianRupeeSign />
						500
					</div>
					<p className="mt-2  text-lg font-bold text-neutral-900">{price}</p>

					{description && (
						<>
							<h2 className="text-md  mt-4   font-bold text-neutral-900">Description</h2>

							<div className="mt-2 space-y-4 text-sm text-neutral-600">
								{description.map((content) => (
									<div key={content} dangerouslySetInnerHTML={{ __html: xss(content) }} />
								))}
							</div>
						</>
					)}

					{variants && (
						<div className="mb-4">
							<h2 className="text-md mb mt-2 font-bold text-neutral-900">Size</h2>
							<VariantSelector
								selectedVariant={selectedVariant}
								variants={variants}
								product={product}
								channel={params.channel}
							/>
						</div>
					)}

					{/* Quantity Selector */}
					<h2 className="text-md mb mt-2 font-bold text-neutral-900">Quantity</h2>

					<div
						className="mt-2 flex w-[120px] items-center justify-between  rounded-full  bg-white px-4 py-2  "
						style={{
							boxShadow: "5px 7px 8.8px 2px #615A5A40",
						}}
					>
						<button type="button" className="text-lg font-bold text-neutral-700 transition hover:scale-105">
							−
						</button>
						<span className="text-base font-medium text-neutral-800">1</span>
						<button type="button" className="text-lg font-bold text-neutral-700 transition hover:scale-105">
							+
						</button>
					</div>

					<AvailabilityMessage isAvailable={isAvailable} />

					<div className="mt-6">
						<AddButton disabled={!selectedVariantID || !selectedVariant?.quantityAvailable} />
					</div>
				</div>
			</form>

			<div
				className="mx-auto my-2 w-full   rounded-3xl border-4 border-[#f5f2f2] bg-[#C0D1D0] px-4 py-6 shadow-md sm:my-3 sm:px-6 sm:py-8 md:my-4 md:px-10 md:py-10 lg:my-6 lg:px-24"
				style={{
					boxShadow: "5px 7px 8.8px 2px #615A5A40",
				}}
			>
				<h3 className="mb-4 text-base font-semibold text-gray-800 sm:text-lg md:text-xl">Features</h3>
				<ul className="list-inside list-disc space-y-2 text-sm text-gray-800 sm:text-base md:text-lg">
					<li>Made from ancient Khapli (Emmer) wheat – a heritage grain</li>
					<li>Low in gluten – easy to digest and gut-friendly</li>
					<li>Diabetic-friendly – low glycemic index</li>
					<li>Rich in fiber, protein, iron, and B-vitamins</li>
					<li>Makes soft, flavorful rotis with a nutty aroma</li>
					<li>No chemicals or preservatives</li>
					<li>100% natural and organically grown</li>
				</ul>
			</div>
		</section>
	);
}
