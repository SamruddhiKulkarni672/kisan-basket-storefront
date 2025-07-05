"use server";

import { getServerAuthClient } from "@/app/config";

export async function loginAction(prevState: any, formData: FormData) {
	const email = formData.get("email")?.toString() || "";
	const password = formData.get("password")?.toString() || "";

	const fieldErrors: { email?: string; password?: string } = {};

	if (!email) fieldErrors.email = "Email is required";
	if (!password) fieldErrors.password = "Password is required";

	if (Object.keys(fieldErrors).length > 0) {
		return { message: "", fieldErrors };
	}

	try {
		const { data } = await (await getServerAuthClient()).signIn({ email, password }, { cache: "no-store" });

		if (data.tokenCreate.errors.length > 0) {
			return {
				message: data.tokenCreate.errors.map((e: any) => e.message).join(", "),
				fieldErrors: {},
			};
		}

		return { message: "", fieldErrors: {} };
	} catch (error) {
		return {
			message: "Something went wrong. Please try again.",
			fieldErrors: {},
		};
	}
}
