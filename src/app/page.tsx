import Image from "next/image";
import { featuredList } from "@/app/components/featuredlist";
import { latestProduct } from "./components/latestProduct";
import { trendingProduct } from "./components/trendingProduct";
import HomePage from "@/app/components/homepage/page";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { topCategories } from "./components/topCategories";
import ShoppexProps from "./components/shoppex/page";
import Trending from "./components/trending/page";
import Blog from "./components/blog/page";
import DiscountItem from "./components/discount/page";
import NewsLetter from "./components/news-letter/page";

export default function Home() {
  return (
    <main className="josefin">
      <HomePage />

      {/* Featured Section */}

      <div className="flex justify-center items-center">
        <h1 className="text-4xl font-bold mt-24">Featured Products</h1>
      </div>
      <div>
        <section className="flex justify-center">
          <div className="grid max-w-[1000px] sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-6 py-6 gap-5">
            {featuredList.map((Product, idx) => (
              <div key={idx}>
                <Card className="min-h-64 shadow-md rounded-none group transition-all duration-300 hover:bg-[#2F1AC4]">
                  {/* Image Container */}
                  <div className="w-full h-64 relative bg-white overflow-hidden">
                    <Image
                      src={Product.image}
                      alt="image"
                      width={400}
                      height={400}
                      className="w-full h-full object-contain bg-[#F6F7FB]"
                    />

                    {/* View Details Button */}
                    <Link
                      href={`components/dynamicpage/featuredproduct/${Product.id}`}
                    >
                      <div className="absolute flex justify-center items-center top-2 left-10 gap-2 transform -translate-x-1/2 duration-300 opacity-0 group-hover:opacity-100">
                        <div>
                          <Image
                            src={"/cart.png"}
                            width={25}
                            height={25}
                            alt="img"
                          ></Image>
                        </div>
                        <div>
                          <Image
                            src={"/uil_heart-alt.png"}
                            width={15}
                            height={15}
                            alt="img"
                          ></Image>
                        </div>
                        <div>
                          <Image
                            src={"/uil_search-plus.png"}
                            width={15}
                            height={15}
                            alt="img"
                          ></Image>
                        </div>
                      </div>
                      <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-[#08D15F] text-white text-xs font-semibold py-2 px-4 rounded transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                        View Details
                      </button>
                    </Link>
                  </div>

                  {/* Product Title */}
                  <h3 className="font-bold mt-2 text-center text-lg text-[#FB2E86] my-2 transition-colors duration-300 group-hover:text-white">
                    {Product.title}
                  </h3>

                  {/* Color Options */}
                  <div className="flex justify-center items-center gap-1 my-2">
                    <div className="bg-[#05E6B7] w-3 h-1 rounded-full group-hover:bg-white transition-colors"></div>
                    <div className="bg-[#F701A8] w-3 h-1 rounded-full group-hover:bg-white transition-colors"></div>
                    <div className="bg-[#00009D] w-3 h-1 rounded-full group-hover:bg-white transition-colors"></div>
                  </div>

                  {/* Product Code */}
                  <div className="code text-[var(--textColor)] flex justify-center items-center text-base my-2 transition-colors duration-300 group-hover:text-white">
                    Code - {Product.code}
                  </div>

                  {/* Product Price */}
                  <div className="price text-[var(--textColor)] flex justify-center items-center text-base my-2 transition-colors duration-300 group-hover:text-white">
                    $ {Product.price.toFixed(2)}
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </section>
      </div>
      <br />
      <br />

      {/* Latest Product Section */}

      <div className="flex justify-center items-center mt-10">
        <h1 className="text-textColor text-4xl font-bold mb-5">
          Latest Products
        </h1>
      </div>
      <div>
        <ul className="flex justify-center items-center flex-wrap gap-4 md:gap-10 textColor]">
          <li className="hover:text-[#FB2E86] text-sm transition ease-in-out duration-200 hover:underline">
            New Arrival
          </li>
          <li className="hover:text-[#FB2E86] transition ease-in-out duration-200 hover:underline">
            Best Seller
          </li>
          <li className="hover:text-[#FB2E86] transition ease-in-out duration-200 hover:underline">
            Featured
          </li>
          <li className="hover:text-[#FB2E86] transition ease-in-out duration-200 hover:underline">
            Special Offer
          </li>
        </ul>
      </div>

      <div>
        <section className="flex justify-center">
          <div className="grid max-w-[1000px] sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-6 py-6 gap-5">
            {latestProduct.map((Product, idx) => (
              <div key={idx}>
                <Card className="min-h-64 border-none rounded-none group transition-all duration-300 hover:bg-[#F7F7F7]">
                  {/* Image Container */}
                  <div className="w-full h-64 relative bg-white overflow-hidden">
                    <Image
                      src={Product.image}
                      alt="image"
                      width={300}
                      height={300}
                      className="w-full h-full object-contain bg-[#F7F7F7]"
                    />
                    {/* View Details Button */}
                    <Link
                      href={`components/dynamicpage/latestproduct/${Product.id}`}
                    >
                      {" "}
                      <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-[#08D15F] text-white text-xs font-semibold py-2 px-4 rounded transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                        View Details
                      </button>
                    </Link>
                  </div>
                  <div className="flex justify-between items-center">
                    {/* Product Title */}
                    <h3 className="font-bold mt-2 text-center text-sm textColor my-2 transition-colors duration-300">
                      {Product.title}
                    </h3>

                    {/* Product Price */}
                    <div className="price text-[var(--textColor)] flex justify-center items-center text-base my-2 transition-colors duration-300">
                      $ {Product.price.toFixed(2)}{" "}
                      <del className="ml-3 px-2 text-red-500">$65</del>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </section>
      </div>

      <ShoppexProps />

      <Trending />
      <DiscountItem></DiscountItem>
      
      {/* Trending Products */}

      <div className="flex justify-center items-center mt-24">
        <h1 className="text-textColor text-4xl font-bold mb-5">
          Trending Products
        </h1>
      </div>

      <div>
        <section className="flex items-center justify-center">
          <div className="grid max-w-[1000px] p-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-6 py-6 gap-5">
            {trendingProduct.map((Product, idx) => (
              <div key={idx}>
                <Card className="min-h-64 border-none rounded-none group transition-all duration-300 hover:bg-[#F7F7F7]">
                  {/* Image Container */}
                  <div className="w-full h-64 relative overflow-hidden p-3">
                    <Image
                      src={Product.image}
                      alt="image"
                      width={400}
                      height={400}
                      className="w-full h-full object-contain bg-[#F7F7F7]"
                    />
                    {/* View Details Button */}
                    <Link
                      href={`components/dynamicpage/trendingproduct/${Product.id}`}
                    >
                      {" "}
                      <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-[#08D15F] text-white text-xs font-semibold py-2 px-4 rounded transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                        View Details
                      </button>
                    </Link>
                  </div>
                  <div className="flex flex-col justify-between items-center">
                    {/* Product Title */}
                    <h3 className="font-bold mt-2 text-center text-sm textColor my-2 transition-colors duration-300">
                      {Product.title}
                    </h3>

                    {/* Product Price */}
                    <div className="price text-[var(--textColor)] flex justify-center items-center text-base my-2 transition-colors duration-300">
                      $ {Product.price.toFixed(2)}{" "}
                      <del className="ml-3 px-2 text-[#1518754D]">$65</del>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </section>
        <div className="flex justify-center items-center gap-2">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
            <div className="max-w-[420px] h-[270px] p-4 bg-[#31208A0D]">
              <p className="text-[26px] textColor">23% off in all products</p>
              <p className="text-[#FB2E86] underline">Shop Now</p>
              <Image
                src={"/image-1162.png"}
                height={180}
                width={180}
                alt="img"
                className="ml-24"
              ></Image>
            </div>
            <div className="max-w-[420px] h-[270px] p-4 bg-[#31208A0D]">
              <p className="text-[26px] textColor">23% off in all products</p>
              <p className="text-[#FB2E86] underline">View Collection</p>
              <Image
                src={"/image-1161.png"}
                height={250}
                width={250}
                alt="img"
                className="ml-6 mt-16"
              ></Image>
            </div>
            <div className="textColor  flex flex-col justify-center items-center">
              <div className="w-[267px] h-[74px] flex items-center my-1">
                <div>
                  <Image
                    src={"/image-30.png"}
                    width={90}
                    height={90}
                    alt="img"
                    className="bg-[#F5F6F8]"
                  ></Image>
                </div>
                <div>
                  <div>Executive Seat chair</div>
                  <del className="text-xs">$32.00</del>
                </div>
              </div>
              <div className="w-[267px] h-[74px] flex items-center my-1">
                <div>
                  <Image
                    src={"/image-19.png"}
                    width={90}
                    height={90}
                    alt="img"
                    className="bg-[#F5F6F8]"
                  ></Image>
                </div>
                <div>
                  <div>Executive Seat chair</div>
                  <del className="text-xs">$32.00</del>
                </div>
              </div>
              <div className="w-[267px] h-[74px] flex items-center my-1">
                <div>
                  <Image
                    src={"/image-28.png"}
                    width={100}
                    height={100}
                    alt="img"
                    className="bg-[#F5F6F8]"
                  ></Image>
                </div>
                <div>
                  <div>Executive Seat chair</div>
                  <del className="text-xs">$32.00</del>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />

      {/* Top Categories*/}

      <div className="flex justify-center items-center mt-16">
        <h1 className="text-textColor text-4xl font-bold mb-5">
          Top Categories
        </h1>
      </div>

      <div>
        <section className="flex justify-center">
          <div className="grid max-w-[1000px] p-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-6 py-6 gap-5">
            {topCategories.map((Product, idx) => (
              <div key={idx}>
                <div className="min-h-64 border-none rounded-none group transition-all duration-300 ">
                  {/* Image Container */}
                  <div className="w-full h-64 relative overflow-hidden p-3 ">
                    <Image
                      src={Product.image}
                      alt="image"
                      width={400}
                      height={400}
                      className="w-full h-full rounded-full object-contain bg-[#31208A0D]"
                    />
                    {/* View Details Button */}
                    <Link
                      href={`components/dynamicpage/trendingproduct/${Product.id}`}
                    >
                      {" "}
                      <button className="absolute bottom-12 left-1/2 transform -translate-x-1/2 bg-[#08D15F] text-white text-[10px] font-semibold py-2 px-4 rounded transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                        View Shop
                      </button>
                    </Link>
                  </div>
                  <div className="flex flex-col justify-between items-center">
                    {/* Product Title */}
                    <h3 className="font-medium mt-2 text-center text-sm textColor  transition-colors duration-300">
                      {Product.title}
                    </h3>

                    {/* Product Price */}
                    <div className="price text-[var(--textColor)] flex justify-center items-center text-base my-1 transition-colors duration-300">
                      $ {Product.price.toFixed(2)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      
      <NewsLetter/>

      <Blog />
    </main>
  );
}
