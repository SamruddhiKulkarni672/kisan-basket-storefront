"use client";
import React from "react";
import Image from "next/image";

interface Category {
  id: number;
  name: string;
  image: string;
  bgColor: string;
}

const categories: Category[] = [
  {
    id: 1,
    name: "Vegetables",
    image: "/images/category1.svg",
    bgColor: "#D0D9CE",
  },
  {
    id: 2,
    name: "Fruits",
    image: "/images/category2.svg",
    bgColor: "#DDC9C5",
  },
  {
    id: 3,
    name: "Dairy",
    image: "/images/category3.svg",
    bgColor: "#E6DECA",
  },
  {
    id: 4,
    name: "Snacks",
    image: "/images/category4.svg",
    bgColor: "#E6D9DA",
  },
];

const AllCategories = () => {
  return (
    <div className="relative w-full">
      {/* Gradient fade effect to indicate scrollable content */}
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white to-transparent sm:hidden" />
      
      <div className="flex w-full gap-4 overflow-x-auto py-4 pl-4 scrollbar-hide sm:flex-wrap sm:justify-center sm:gap-8 sm:overflow-x-visible sm:py-0 sm:pl-0">
        {categories.map((category) => (
          <div 
            key={category.id} 
            className="flex-shrink-0 text-center first:ml-4 sm:first:ml-0"
          >
            <div
              className="relative h-24 w-24 overflow-hidden rounded-full border-white sm:my-1 sm:h-32 sm:w-32 md:my-2 lg:my-4"
              style={{ backgroundColor: category.bgColor }}
            >
              <div className="absolute inset-2">
                <Image 
                  src={category.image} 
                  alt={`${category.name} image`} 
                  fill 
                  className="object-contain" 
                />
              </div>
            </div>
            <p className="mt-2 text-sm font-medium sm:text-lg">{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCategories;

// "use client";
// import React from "react";
// import Image from "next/image";

// interface Category {
// 	id: number;
// 	name: string;
// 	image: string;
// 	bgColor: string;
// }

// const categories: Category[] = [
// 	{
// 		id: 1,
// 		name: "Vegetables",
// 		image: "/images/category1.svg",
// 		bgColor: "#D0D9CE",
// 	},
// 	{
// 		id: 2,
// 		name: "Fruits",
// 		image: "/images/category2.svg",
// 		bgColor: "#DDC9C5",
// 	},
// 	{
// 		id: 3,
// 		name: "Dairy",
// 		image: "/images/category3.svg",
// 		bgColor: "#E6DECA",
// 	},
// 	{
// 		id: 4,
// 		name: "Snacks",
// 		image: "/images/category4.svg",
// 		bgColor: "#E6D9DA",
// 	},
// ];

// const AllCategories = () => {
// 	return (
// 		<div className="flex flex-wrap justify-center gap-8 ">
// 			{categories.map((category) => (
// 			<div key={category.id} className="text-center">
//   <div
//     className="relative my-1 h-32 w-32 overflow-hidden rounded-full border-white md:my-2 lg:my-4"
//     style={{ backgroundColor: category.bgColor }}
//   >
//     <div className="absolute inset-2">
//       <Image
//         src={category.image}
//         alt={`${category.name} image`}
//         fill
//         className="object-contain"
//       />
//     </div>
//   </div>
//   <p className="mt-2 text-lg font-medium">{category.name}</p>
// </div>
// 			))}
// 		</div>
// 	);
// };

// export default AllCategories;
