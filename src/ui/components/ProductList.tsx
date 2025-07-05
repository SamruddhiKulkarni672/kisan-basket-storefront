import { ProductElement } from "./ProductElement";
import { type ProductListItemFragment } from "@/gql/graphql";

export const ProductList = ({ products }: { products: readonly ProductListItemFragment[] }) => {
	return (
		<>
			<ul
				role="list"
				data-testid="ProductList"
				className="mt-4 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 md:grid-cols-3 pb-2 md:gap-y-8 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16"
			>
				{products.map((product, index) => (
					<ProductElement
						key={product.id}
						product={product}
						priority={index < 2}
						loading={index < 3 ? "eager" : "lazy"}
					/>
				))}
			</ul>
		</>
	);
};
