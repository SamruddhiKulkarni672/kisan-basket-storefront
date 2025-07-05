"use client";

import React from "react";
import Image from "next/image";
import { loginAction } from "./LoginAction";
import { useFormState } from "react-dom";
import login from "../../../public/images/login.svg";
const initialState = {
	message: "",
	fieldErrors: {
		email: "",
		password: "",
	},
};

export function LoginForm() {
	const [formState, action] = useFormState(loginAction, initialState);

	return (
		<div className="mx-auto mt-12 w-full max-w-lg shadow-lg">
			<form className="rounded border p-8 shadow-md" action={action}>
				<Image src={login} alt="Login" className="mb-6 h-52 w-full object-contain" />

				<div className="mb-4">
					<input
						type="email"
						name="email"
						placeholder="Email"
						className="w-full rounded border bg-neutral-50 px-4 py-2"
					/>
					{formState.fieldErrors.email && (
						<p className="text-sm text-red-600">{formState.fieldErrors.email}</p>
					)}
				</div>
				<div className="mb-4">
					<input
						type="password"
						name="password"
						placeholder="Password"
						autoComplete="off"
						className="w-full rounded border bg-neutral-50 px-4 py-2"
					/>
					{formState.fieldErrors.password && (
						<p className="text-sm text-red-600">{formState.fieldErrors.password}</p>
					)}
				</div>

				{formState.message && <p className="mb-4 text-center text-sm text-red-600">{formState.message}</p>}

				<div className="flex w-full items-center justify-center">
					<button
						className="w-full rounded bg-[#646A36] px-4 py-2 text-neutral-200 hover:bg-neutral-700"
						type="submit"
					>
						Log In
					</button>
				</div>
			</form>
		</div>
	);
}
