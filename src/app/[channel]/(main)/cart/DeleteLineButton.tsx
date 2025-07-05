"use client";

import { useTransition } from "react";
import { deleteLineFromCheckout } from "./actions";
import { RxCross1 } from "react-icons/rx";

type Props = {
	lineId: string;
	checkoutId: string;
};

export const DeleteLineButton = ({ lineId, checkoutId }: Props) => {
	const [isPending, startTransition] = useTransition();

	return (
		<button
			type="button"
			onClick={() => {
				if (isPending) return;
				startTransition(() => deleteLineFromCheckout({ lineId, checkoutId }));
			}}
			aria-disabled={isPending}
			title="Remove item"
			className="flex h-8 w-8 items-center justify-center rounded-full border border-[#383e45] text-[#41252c] transition-all hover:bg-red-200 hover:text-red-800 disabled:opacity-50"
		>
			{isPending ? (
				<svg
					className="h-4 w-4 animate-spin"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
				>
					<circle
						className="opacity-25"
						cx="12"
						cy="12"
						r="10"
						stroke="currentColor"
						strokeWidth="4"
					></circle>
					<path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
				</svg>
			) : (
				<RxCross1 className="h-4 w-4" />
			)}
			<span className="sr-only">Remove item</span>
		</button>
	);
};
