import React from "react";
import Image from "next/image";
import { shoppexData } from "../Data-File/shoppex-data/data";

const ShoppexProps = () => {
  return (
    <div className="mt-5">
      <div className="flex justify-center items-center p-4">
        <h1 className="text-[#151875] text-[32px] font-extrabold">
          What Shopex Offers!
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {shoppexData.map((data, index) => {
          return (
            <div
              key={index}
              className="bg-white w-full h-[350px] p-4 flex flex-col justify-center items-center space-y-4 shadow-md hover:shadow-lg transition-all duration-300 rounded-lg hover:scale-105 hover:bg-[#f1f1f1]"
            >
              {/* Image Section with hover effect */}
              <div className="flex justify-center items-center w-20 h-20 mb-4 overflow-hidden hover:scale-110 transition-all duration-300">
                <Image
                  src={data.imageUrl}
                  alt="Image"
                  width={80}
                  height={80}
                  className="rounded-full object-cover"
                />
              </div>
              {/* Heading */}
              <h1 className="text-[#151875] text-lg font-semibold text-center">
                {data.heading}
              </h1>
              {/* Paragraph */}
              <p className="text-[#8A8FB9] text-sm text-center mt-2">
                {data.paragraph}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShoppexProps;
