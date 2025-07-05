"use client";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full lg:h-[60vh] md:h-[30vh] h-[30vh] overflow-hidden">
      <Image
        src="/images/about1.png"
        alt="Farm Background"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-xl lg:text-5xl md:text-3xl font-bold mb-2">
          Fresh From Farm to Your Table
        </h1>
        <p className="text-lg md:text-xl">
          Connecting Farmers with Consumers Since 2018
        </p>
      </div>
    </section>
  );
}
