"use client";
import { LinkWithChannel } from "../atoms/LinkWithChannel";
import { useTransition } from "react";
import { addToCartAction } from "@/app/actions/addToCartAction";
import { ProductListItemFragment } from "@/gql/graphql";
import { formatMoneyRange } from "@/lib/utils";
import Image from "next/image";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { useRouter } from "next/navigation";

const staticImages = [
  "/images/category1.svg",
  "/images/category2.svg",
  "/images/category3.svg",
  "/images/category4.svg",
];

export function ProductElement({
  product,
  loading,
  priority,
}: {
  product: ProductListItemFragment;
  loading: "eager" | "lazy";
  priority?: boolean;
}) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const imageIndex = parseInt(product.id.replace(/\D/g, ""), 10) % staticImages.length;
  const staticImage = staticImages[imageIndex];
  const staticRating = 4;

  const variantId = product.variants?.[0]?.id;
  const channel = "default-channel";

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!variantId) return;

    startTransition(() => {
      addToCartAction({ productVariantId: variantId, channel }).then(() => {
        router.refresh();
      });
    });
  };

  return (
    <li data-testid="ProductElement" className="flex justify-center md:block">
      <LinkWithChannel href={`/products/${product.slug}`} key={product.id}>
        <div
          className="w-[270px] rounded-[24px] bg-white shadow-lg md:w-full"
          style={{ boxShadow: "5px 7px 8.8px 2px #615A5A40" }}
        >
          <div className="rounded-[24px] border-4 border-white">
            {/* Image wrapper */}
            <div className="relative h-[140px] w-full overflow-hidden rounded-[24px] bg-[#B4CDCB] sm:h-[160px] md:h-[200px] lg:h-[260px]">
              {staticImage && (
                <Image
                  src={staticImage}
                  alt={product.name}
                  fill
                  className="object-contain p-6"
                  loading={loading}
                  priority={priority}
                />
              )}
            </div>

            {/* Text section */}
            <div className="p-2 px-3 sm:px-4">
              <div className="group relative w-full max-w-[200px] sm:max-w-[240px] md:max-w-[180px] lg:max-w-[220px]">
                <h4 className="cursor-default truncate text-sm font-medium capitalize leading-[1.2] text-[#363842] sm:text-base lg:text-lg">
                  {product.name}
                </h4>

                {/* Tooltip if name is long */}
                {product.name.length > 20 && (
                  <div className="absolute left-0 top-full z-10 mt-2 hidden w-72 rounded-md bg-[#B4CDCB] p-2 text-sm shadow-md group-hover:block">
                    {product.name}
                  </div>
                )}
              </div>

              <p className="mt-1 text-xs text-[#35394C] sm:text-sm">{product.category?.name}</p>

              {/* Ratings */}
              <div className="mt-1 flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="relative h-3 w-3 sm:h-4 sm:w-4">
                    <Image
                      src="/images/ratingimage.svg"
                      alt="rating"
                      fill
                      style={{
                        objectFit: "contain",
                        opacity: i < staticRating ? 1 : 0.2,
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* Price */}
              <div className="mt-2 flex items-center gap-1 text-xs text-[#81859C] line-through sm:text-sm">
                <FaIndianRupeeSign />
                99
              </div>

              <div className="mt-1 flex items-center gap-1 text-base font-semibold text-[#363842] sm:text-lg">
                {product?.pricing?.priceRange?.start?.gross
                  ? formatMoneyRange({
                      start: product.pricing.priceRange.start.gross,
                      stop: product.pricing.priceRange.stop?.gross,
                    })
                  : "₹80"}
              </div>
            </div>

            {/* Add to cart button */}
            <button
              className="m-3 flex h-[34px] w-[calc(100%-24px)] items-center justify-center rounded-[8px] bg-[#A9B243] text-xs font-semibold text-white sm:h-[38px] sm:rounded-[10px] sm:text-sm md:text-[16px]"
              style={{
                boxShadow: `0px 4px 5.7px 0px #4A454540, inset 0px 5px 4px 0px #6B676740`,
                textShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)`,
              }}
              onClick={handleAddToCart}
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </LinkWithChannel>
    </li>
  );
}
// "use client";
// import { LinkWithChannel } from "../atoms/LinkWithChannel";
// import { useTransition } from "react";
// import { addToCartAction } from "@/app/actions/addToCartAction";
// import { ProductListItemFragment } from "@/gql/graphql";
// import { formatMoneyRange } from "@/lib/utils";
// import Image from "next/image";
// import { FaIndianRupeeSign } from "react-icons/fa6";
// import { useRouter } from "next/navigation";

// const staticImages = [
// 	"/images/category1.svg",
// 	"/images/category2.svg",
// 	"/images/category3.svg",
// 	"/images/category4.svg",
// ];

// export function ProductElement({
// 	product,
// 	loading,
// 	priority,
// }: {
// 	product: ProductListItemFragment;
// 	loading: "eager" | "lazy";
// 	priority?: boolean;
// }) {
// 	const [isPending, startTransition] = useTransition();
// 	const router = useRouter();

// 	const imageIndex = parseInt(product.id.replace(/\D/g, ""), 10) % staticImages.length;
// 	const staticImage = staticImages[imageIndex];
// 	const staticRating = 4;

// 	const variantId = product.variants?.[0]?.id;
// 	const channel = "default-channel";

// 	const handleAddToCart = () => {
// 		if (!variantId) return;

// 		startTransition(() => {
// 			addToCartAction({ productVariantId: variantId, channel }).then(() => {
// 				router.refresh();
// 			});
// 		});
// 	};

// 	return (
// 		<li data-testid="ProductElement">
// 			<LinkWithChannel href={`/products/${product.slug}`} key={product.id}>
// 				<div
// 					className="w-full rounded-[310px] bg-white"
// 					style={{
// 						borderRadius: "32px",
// 						boxShadow: "5px 7px 8.8px 2px #615A5A40",
// 					}}
// 				>
// 					<div className="rounded-[32px] border-8 border-white">
// 						<div className="relative h-[159px] w-full overflow-hidden rounded-[32px] bg-[#B4CDCB] md:h-[200px]  lg:h-[290px]">
// {staticImage && (
// 	<Image
// 		src={staticImage}
// 		alt={product.name}
// 		fill
// 		className="object-contain p-6"
// 		loading={loading}
// 		priority={priority}
// 	/>
// )}
// 						</div>

// 						<div className="p-2 pl-6">
// 							<div className="group relative w-fit">
// 								<h4 className="cursor-default text-[14px] font-medium capitalize leading-[1.2] text-[#363842] sm:text-lg md:text-[16px]">
// 									{product.name.length > 20 ? product.name.slice(0, 20) + "..." : product.name}
// 								</h4>
// 								{/* Tooltip shown only if name is longer than 40 characters */}
// 								{product.name.length > 20 && (
// 									<div className="absolute left-0 top-full z-10 mt-2 hidden w-72 rounded-md bg-[#B4CDCB] p-2 text-sm shadow-md group-hover:block">
// 										{product.name}
// 									</div>
// 								)}
// 							</div>
// 							<p className="mt-1 text-sm text-[#35394C]" data-testid="ProductElement_Category">
// 								{product.category?.name}
// 							</p>
// 							<div className="mt-1 flex items-center space-x-1 text-xs text-[#35394C]">
// 								{[...Array(5)].map((_, i) => (
// 									<div key={i} className="relative h-3 w-3 sm:h-4 sm:w-4">
// 										<Image
// 											src="/images/ratingimage.svg"
// 											alt="rating"
// 											fill
// 											style={{
// 												objectFit: "contain",
// 												opacity: i < staticRating ? 1 : 0.2,
// 											}}
// 										/>
// 									</div>
// 								))}
// 							</div>
// 							<div className="mt-2 flex items-center gap-1 text-sm leading-[1.2] text-[#81859C] line-through sm:text-base">
// 								<FaIndianRupeeSign />
// 								99
// 							</div>
// 							<div className="mt-1 flex items-center gap-1 text-xl font-semibold text-[#363842] lg:text-2xl">
// 								{product?.pricing?.priceRange?.start?.gross
// 									? formatMoneyRange({
// 											start: product.pricing.priceRange.start.gross,
// 											stop: product.pricing.priceRange.stop?.gross,
// 										})
// 									: "₹80"}
// 							</div>
// 						</div>

// 						{/* add to cart section */}
// 						<div
// 							className="font-inter m-4 mt-1 flex h-[38px] cursor-pointer items-center justify-center rounded-[10px] bg-[#A9B243] text-[14px] font-semibold leading-[1.2] text-white sm:rounded-[11px] md:text-[20px]"
// 							style={{
// 								boxShadow: `0px 4px 5.7px 0px #4A454540, inset 0px 5px 4px 0px #6B676740`,
// 								textShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)`,
// 							}}
// 						>
// 							ADD TO CART
// 						</div>
// 					</div>
// 				</div>
// 			</LinkWithChannel>
// 		</li>
// 	);
// }
