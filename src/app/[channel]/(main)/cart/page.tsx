import Image from "next/image";
import { CheckoutLink } from "./CheckoutLink";
import { DeleteLineButton } from "./DeleteLineButton";
import * as Checkout from "@/lib/checkout";
import { formatMoney, getHrefForVariant } from "@/lib/utils";
import { LinkWithChannel } from "@/ui/atoms/LinkWithChannel";

export const metadata = {
	title: "Shopping Cart",
};

export default async function Page(props: { params: Promise<{ channel: string }> }) {
	const params = await props.params;
	const checkoutId = await Checkout.getIdFromCookies(params.channel);

	const checkout = await Checkout.find(checkoutId);
	if (!checkout || checkout.lines.length < 1) {
		return (
			<section className="mx-auto max-w-7xl p-8">
				<h1 className="mt-8 text-3xl font-bold text-neutral-900">Your Shopping Cart is empty</h1>
				<p className="my-12 text-sm text-neutral-500">
					Looks like you haven’t added any items to the cart yet.
				</p>
				<LinkWithChannel
					href="/products"
					className="inline-block max-w-full rounded border border-transparent bg-neutral-900 px-6 py-3 text-center font-medium text-neutral-50 hover:bg-neutral-800 aria-disabled:cursor-not-allowed aria-disabled:bg-neutral-500 sm:px-16"
				>
					Explore products
				</LinkWithChannel>
			</section>
		);
	}

	return (
		<>
			{/* <section className="mx-auto   bg-[#dfe8ec] px-12 pt-10">
				<h1 className="text-3xl  font-bold text-neutral-900">Your Cart</h1>
				<p className="mt-2 text-sm text-neutral-500">Review your selected items before checkout.</p>
			</section> */}
			<div className="   flex flex-col gap-8 bg-[#dfe8ec] p-5 lg:flex-row">
				{/* Product List */}
				<ul
					data-testid="CartProductList"
					role="list"
					className="mb-28  w-full divide-y divide-[#aeb1b2] border-b border-t px-4 py-3   lg:w-2/3"
				>
					{checkout.lines.map((item) => (
						<li key={item.id} className="flex items-center justify-between gap-4 py-6">
							{/* Image */}
							<div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-full border bg-neutral-50">
								{item.variant?.product?.thumbnail?.url && (
									<Image
										src={item.variant.product.thumbnail.url}
										alt={item.variant.product.thumbnail.alt ?? ""}
										width={96}
										height={96}
										className="h-full w-full rounded-full object-cover"
									/>
								)}
							</div>

							{/* Product Info */}
							<div className="flex min-w-0 max-w-sm flex-1 flex-col justify-center px-4">
								<LinkWithChannel
									href={getHrefForVariant({
										productSlug: item.variant.product.slug,
										variantId: item.variant.id,
									})}
								>
									<h2 className="truncate text-sm font-semibold text-neutral-900">
										{item.variant?.product?.name}
									</h2>
									<p className="mt-1 text-sm text-neutral-500">{item.variant?.product?.category?.name}</p>
								</LinkWithChannel>
							</div>

							{/* Quantity Selector   */}
							<div className="flex items-center gap-2 rounded-full border border-[#383e45] px-3 py-1 text-sm font-medium text-neutral-700">
								<button className="text-xl">−</button>
								<span>{item.quantity}</span>
								<button className="text-xl">+</button>
							</div>

							{/* Price (Static format) */}
							<p className="w-20 text-right text-sm font-semibold text-neutral-900">
								$ {Number(item.totalPrice?.gross?.amount || 0).toFixed(2)}
							</p>

							{/* Delete Button */}
							<DeleteLineButton checkoutId={checkoutId} lineId={item.id} />
						</li>
					))}
				</ul>

				{/* Order Info */}
				<div className="w-full lg:mt-12 lg:w-1/3">
					<div className="rounded-xl  border-2 border-[#d0dee9] bg-neutral-50 px-4 py-2">
						<div className="flex items-center justify-between gap-2 py-2">
							<div>
								<p className="font-semibold text-neutral-900">Your Total</p>
								<p className="mt-1 text-sm text-neutral-500">Shipping will be calculated in the next step</p>
							</div>
							<div className="font-medium text-neutral-900">
								{formatMoney(checkout.totalPrice.gross.amount, checkout.totalPrice.gross.currency)}
							</div>
						</div>
					</div>
					<div className="mt-10 text-center">
						<CheckoutLink
							checkoutId={checkoutId}
							disabled={!checkout.lines.length}
							className="w-full rounded-full bg-[#473629]"
						/>
					</div>
				</div>
			</div>
		</>
	);
}
