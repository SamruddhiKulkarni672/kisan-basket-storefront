// components/Footer.server.tsx
import { MenuGetBySlugDocument, ChannelsListDocument } from "@/gql/graphql";
import { executeGraphQL } from "@/lib/graphql";
import FooterClient from "./Footer";

export default async function Footer({ channel }: { channel: string }) {
	const footerLinks = await executeGraphQL(MenuGetBySlugDocument, {
		variables: { slug: "footer", channel },
		revalidate: 60 * 60 * 24,
	});

	const channels = process.env.SALEOR_APP_TOKEN
		? await executeGraphQL(ChannelsListDocument, {
				withAuth: false,
				headers: {
					Authorization: `Bearer ${process.env.SALEOR_APP_TOKEN}`,
				},
			})
		: null;

	return <FooterClient footerLinks={footerLinks} channels={channels} />;
}
