import { clsx } from "clsx";
import { redirect } from "next/navigation";
import { LinkWithChannel } from "../atoms/LinkWithChannel";
import { type ProductListItemFragment, type VariantDetailsFragment } from "@/gql/graphql";
import { getHrefForVariant } from "@/lib/utils";

export function VariantSelector({
	variants,
	product,
	selectedVariant,
	channel,
}: {
	variants: readonly VariantDetailsFragment[];
	product: ProductListItemFragment;
	selectedVariant?: VariantDetailsFragment;
	channel: string;
}) {
	if (!selectedVariant && variants.length === 1 && variants[0]?.quantityAvailable) {
		redirect("/" + channel + getHrefForVariant({ productSlug: product.slug, variantId: variants[0].id }));
	}

	return (
		variants.length > 1 && (
			<fieldset className="my-4" role="radiogroup" data-testid="VariantSelector">
				<legend className="sr-only">Variants</legend>
				<div className="flex flex-wrap gap-3">
					{variants.map((variant) => {
						const isDisabled = !variant.quantityAvailable;
						const isCurrentVariant = selectedVariant?.id === variant.id;

						return (
							<LinkWithChannel
								key={variant.id}
								prefetch={true}
								scroll={false}
								href={
									isDisabled
										? "#"
										: getHrefForVariant({
												productSlug: product.slug,
												variantId: variant.id,
											})
								}
								className={clsx(
									isCurrentVariant
										? "border-[#807C7C] bg-[#A0D4A3] text-black hover:bg-[#607e62]"
										: "border-[#807C7C] bg-transparent text-neutral-900 hover:bg-neutral-200",

									"h-[34px] w-[100px] sm:h-[48px] sm:w-[110px] md:h-[42px] md:w-[120px]",

									"flex items-center justify-center",

									"overflow-hidden text-ellipsis whitespace-nowrap rounded-full border text-center text-sm font-semibold",
									// Accessibility and disabled states
									"focus-within:outline focus-within:outline-2 aria-disabled:cursor-not-allowed aria-disabled:bg-neutral-100 aria-disabled:text-neutral-800 aria-disabled:opacity-50",
									isDisabled && "pointer-events-none",
								)}
								role="radio"
								tabIndex={isDisabled ? -1 : undefined}
								aria-checked={isCurrentVariant}
								aria-disabled={isDisabled}
							>
								<span className="w-full truncate px-2 text-center">{variant.name}</span>
							</LinkWithChannel>
						);
					})}
				</div>
			</fieldset>
		)
	);
}
