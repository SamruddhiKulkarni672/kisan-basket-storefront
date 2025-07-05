import React from "react";
import Link from "next/link";
const Breadcrumb = () => (
  <div className="bg-white py-4 px-6 border-b">
    <div className="max-w-7xl mx-auto">
      <nav className="text-sm text-gray-600">
        <span>
          <Link href="/" className="hover:text-black">
            Home
          </Link>
        </span>
        <span className="mx-2">{">"}</span>
        <span className="text-gray-900 font-medium">Contact Us</span>
      </nav>
    </div>
  </div>
);

export default Breadcrumb;
