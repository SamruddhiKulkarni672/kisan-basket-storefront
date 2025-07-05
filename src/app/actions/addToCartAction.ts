"use server";

import * as Checkout from "@/lib/checkout";
import { executeGraphQL } from "@/lib/graphql";
import { CheckoutAddLineDocument } from "@/gql/graphql";
import { revalidatePath } from "next/cache";

export async function addToCartAction({
	productVariantId,
	channel,
}: {
	productVariantId: string;
	channel: string;
}) {
	const checkout = await Checkout.findOrCreate({
		checkoutId: await Checkout.getIdFromCookies(channel),
		channel,
	});

	if (!checkout) return;

	await Checkout.saveIdToCookie(channel, checkout.id);

	await executeGraphQL(CheckoutAddLineDocument, {
		variables: {
			id: checkout.id,
			productVariantId,
		},
		cache: "no-cache",
	});

	revalidatePath("/cart");
}
