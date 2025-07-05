"use client";
import Image from "next/image";

export default function OurStorySection() {
  return (
    <section className="lg:py-16 md:py-8 py-4 px-6 lg:px-20 max-w-7xl mx-auto lg:mx-10 md:mx-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 lg:gap-24 items-center">
        <div className="rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/images/fruits.webp"
            alt="Farmers working in field"
            width={500}
            height={300}
            className="object-cover w-full h-auto"
          />
        </div>
        <div>
          <h2 className="lg:text-3xl md:text-xl text-lg font-bold text-gray-800 mb-4">Our Story</h2>
          <p className="text-gray-700 mb-4 text-[14px]  lg:text-[18px]">
            Kisan Basket began with a simple mission: to bridge the gap between
            local farmers and urban consumers. We believe in providing fresh,
            quality produce while supporting our farming community.
          </p>
          <p className="text-gray-700 mb-4 text-[14px]  lg:text-[18px]">
            Our journey started in a small village market, where we recognized
            the need for a direct connection between farmers and consumers.
            Today, we’re proud to serve thousands of customers across multiple
            cities, maintaining our commitment to quality and sustainability.
          </p>
        </div>
      </div>
    </section>
  );
}
