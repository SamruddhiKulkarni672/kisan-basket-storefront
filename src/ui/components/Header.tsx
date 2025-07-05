"use client";
import { Logo } from "./Logo";
import { Nav } from "./nav/Nav";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/Link";
import { useRouter } from "next/navigation";

export function Header({ channel }: { channel: string }) {
	const router = useRouter();
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [showSearch, setShowSearch] = useState(false);
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const toggleMenu = () => setIsMenuOpen((prev) => !prev);
	return (
		<header className="sticky top-0 z-20 bg-neutral-100/50 bg-white">
			<div className="mx-auto max-w-7xl px-3 sm:px-8">
				<div className="flex h-16 justify-between gap-4 md:gap-8">
					<div
						onClick={() => router.push("/kisan-basket")}
						className="h-[50px] w-[120px]  cursor-pointer md:h-[64px] md:w-[150px]"
						style={{ position: "relative" }}
					>
						<Image
							src="/images/kisanbasketLogo.svg"
							alt="kisan basket image"
							fill
							style={{ objectFit: "contain" }}
						/>
					</div>
					<div className="hidden items-center justify-center text-center font-jua text-[16px] font-normal leading-[20px]  tracking-[0%] text-[#242424] md:flex md:space-x-4 lg:space-x-8 lg:text-[20px]">
						<Link href="/">Home</Link>
						<Link href="/kisan-basket/about">About</Link>
						<Link href="/kisan-basket/shop">Shop</Link>
						{/* <div className="hidden lg:flex">
							<SearchBar channel={channel} />
						</div> */}

						<Link href="/kisan-basket/outlet">Outlet</Link>
						<Link href="/kisan-basket/contact">Contact</Link>
						<Link href="/kisan-basket/contact">Blog</Link>
					</div>
					<div className="hidden items-center md:flex ">
						{/* <FaSearch /> */}

						<div className="cursor-pointer " style={{ position: "relative", width: "60px", height: "34px" }}>
							<Image
								onClick={() => router.push("/kisan-basket/products")}
								src="/images/search.svg"
								alt="kisan basket image"
								fill
								style={{ objectFit: "contain" }}
							/>
						</div>
						<div
							onClick={() => router.push("/kisan-basket/cart")}
							className="cursor-pointer "
							style={{ position: "relative", width: "60px", height: "34px" }}
						>
							<Image src="/images/cart.svg" alt="kisan basket image" fill style={{ objectFit: "contain" }} />
						</div>
						<div
						// onClick={() => setIsDropdownOpen(!isDropdownOpen)}
						>
							<div
								className="cursor-pointer "
								style={{ position: "relative", width: "60px", height: "34px" }}
							>
								<Image
									onClick={() => router.push("/kisan-basket/login")}
									src="/images/profileicon.svg"
									alt="kisan basket image"
									fill
									style={{ objectFit: "contain" }}
								/>
							</div>
						</div>
					</div>
					{/* Mobile Menu Button */}
					<button
						className="text-headerTextColor rounded-md p-2 font-semibold hover:text-black md:hidden"
						onClick={toggleMenu}
						aria-label="Toggle Menu"
					>
						{isMenuOpen ? (
							<div className="h-[30px] w-[30px]">X</div>
						) : (
							<div className="" style={{ position: "relative", width: "30px", height: "32px" }}>
								<Image
									src="/images/menu.svg"
									alt="kisan basket image"
									fill
									style={{ objectFit: "contain" }}
								/>
							</div>
						)}
					</button>
					{/* <Nav channel={channel} /> */}
				</div>
				{/* Mobile Menu */}
				{isMenuOpen && (
					<nav className="text-headerTextColor space-y-2 bg-white px-4 pb-4 font-jua font-normal shadow-md md:hidden">
						<Link
							href="/"
							className="block py-1  transition hover:text-green-700"
							onClick={() => setIsMenuOpen(false)}
						>
							Home
						</Link>
						<Link
							href="/kisan-basket/about"
							className="block py-1  transition hover:text-green-700"
							onClick={() => setIsMenuOpen(false)}
						>
							About
						</Link>
						<Link
							href="/kisan-basket/shop"
							className="block py-1  transition hover:text-green-700"
							onClick={() => setIsMenuOpen(false)}
						>
							Shop
						</Link>

						<Link
							href="/kisan-basket/outlet"
							className="block py-1  transition hover:text-green-700"
							onClick={() => setIsMenuOpen(false)}
						>
							Outlet
						</Link>
						<Link
							href="/kisan-basket/contact"
							className="block py-1  transition hover:text-green-700"
							onClick={() => setIsMenuOpen(false)}
						>
							Contact
						</Link>
						<Link
							href="/kisan-basket/blog"
							className="block py-1  transition hover:text-green-700"
							onClick={() => setIsMenuOpen(false)}
						>
							Blog
						</Link>

						<div className="block py-2  transition hover:text-green-700" onClick={() => setIsMenuOpen(false)}>
							{" "}
							Cart
							{/* Cart ({products.length}) */}
						</div>
						<div className="relative">
							<div className="">
								<div
									onClick={() => router.push("/kisan-basket/login")}
									// onClick={() => setIsDropdownOpen(!isDropdownOpen)}
									className="text-destructive-foreground block  cursor-pointer rounded-md bg-[#646A36] px-2 py-2 text-sm text-white shadow-sm "
								>
									Sign In
								</div>
								{/* <RiArrowDropDownLine className="h-6 w-6" /> */}
							</div>
							{isDropdownOpen && (
								<div className="absolute  z-50 mt-1 w-40 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
									<div
										onClick={() => {
											setIsMenuOpen(false);
											setIsDropdownOpen(false);
										}}
										className="block rounded-t-md px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50"
									>
										Sign Up
									</div>
									<Link
										href="kisan-basket/login"
										className="text-destructive-foreground ml-2  block cursor-pointer rounded-md bg-[#646A36] px-2 py-2 text-sm text-white shadow-sm "
									>
										Sign In
										{/* <RiArrowDropDownLine className="h-6 w-6" /> */}
									</Link>
								</div>
							)}
						</div>
						{/* <Link href="/login">
							<Button
							  variant="destructive"
							  className="px-2 py-2 text-white rounded-lg"
							>
							  Sign In
							</Button>
						  </Link> */}
					</nav>
				)}
			</div>
		</header>
	);
}

// import { Logo } from "./Logo";
// import { Nav } from "./nav/Nav";

// export function Header({ channel }: { channel: string }) {
// 	return (
// 		<header className="sticky top-0 z-20 bg-neutral-100/50 backdrop-blur-md">
// 			<div className="mx-auto max-w-7xl px-3 sm:px-8">
// 				<div className="flex h-16 justify-between gap-4 md:gap-8">
// 					<Logo />
// 					<Nav channel={channel} />
// 				</div>
// 			</div>
// 		</header>
// 	);
// }
