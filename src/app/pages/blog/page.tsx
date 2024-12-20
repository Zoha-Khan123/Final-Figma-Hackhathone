import { Link } from "lucide-react";
import Image from "next/image";
import { Josefin_Sans, Lato } from "next/font/google";
import { blogData } from "../blog";
import Sidebar from "./sidebar";

// Use Lato font
const lato = Lato({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});
const josefin = Josefin_Sans({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const Blog = () => {
  return (
    <>
      {/* Header Section */}
      <div className="w-full bg-[#F6F5FF] h-60">
        <div className="max-w-[1210px] px-4 h-full flex items-center mx-auto">
          <div>
            <h1
              className={`text-[#151875] text-[28px] md:text-[36px] font-bold ${josefin.className}`}
            >
              Blog Page
            </h1>
            <ul
              className={`flex flex-wrap gap-2 text-[14px] md:text-[16px] ${lato.className} font-extrabold`}
            >
              <Link href={"/"}>
                <li>Home</li>
              </Link>
              <li>.</li>
              <li>Pages</li>
              <li className="h-4 text-[#FB2E86]">.</li>
              <Link href={"/pages/blog"}>
                <li className="text-[#FB2E86]">Blog Page</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>










      {/* Main Content Section */}
      <div className="max-w-[1210px]  px-4 mx-auto my-20 flex flex-col lg:flex-row gap-5">

        {/* Blog Posts */}
        <div className="w-full lg:w-2/3 space-y-10 px-4">
          {blogData.map((data, index) => (
            <div key={index} className="space-y-5">
              {/* Image */}
              <div>
                <Image
                  src={data.blogImageUrl}
                  alt="Image"
                  width={700}
                  height={700}
                  className="w-full h-auto rounded-lg"
                />
              </div>

              {/* Icons */}
              <div className="flex flex-wrap gap-5 items-center">
                <div className="flex items-center gap-3">
                  <data.icon2 className="text-[#FB2E86]" />
                  <span
                    className={`bg-[#FFE7F9] text-[#151875] ${josefin.className} px-4 py-1 rounded-lg`}
                  >
                    {data.name}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <data.icon1 className="text-[#FFA454]" />
                  <span
                    className={`bg-[#FFECE2] text-[#151875] ${josefin.className} px-4 py-1 rounded-lg`}
                  >
                    {data.time}
                  </span>
                </div>
              </div>

              {/* Blog Details */}
              <h1
                className={`${josefin.className} text-[#151875] text-2xl md:text-3xl font-extrabold`}
              >
                {data.heading}
              </h1>
              <p
                className={`${lato.className} text-[#8A8FB9] text-[14px] md:text-[16px]`}
              >
                {data.pargarph}
              </p>
              <div className="flex items-center gap-2">
                <h2 className={`${lato.className} text-[#151875] font-bold`}>
                  {data.read}
                </h2>
                <span className="w-2 h-2 border rounded-full bg-[#FB2E86]"></span>
              </div>
            </div>
          ))}

          {/* Counting */}
          <ul
            className={`flex justify-center items-center gap-6 text-[#E0D3F5] ${lato.className}`}
          >
            <li>
              <button className="bg-[#FB2CA8] text-white w-8 h-6 text-center rounded-sm">
                1
              </button>
            </li>
            <li>
              <button className="w-8 h-6 border-2 flex justify-center items-center border-[#E0D3F5] rounded-sm">
                2
              </button>
            </li>
            <li>
              <button className="w-8 h-6 border-2 flex justify-center items-center border-[#E0D3F5] rounded-sm">
                3
              </button>
            </li>
            <li>
              <button className="w-8 h-6 border-2 flex justify-center items-center border-[#E0D3F5] rounded-sm">
                4
              </button>
            </li>
          </ul>


          {/* Image */}
          <div className="max-w-[1000px] flex justify-center items-center mx-auto my-14">
                  <Image src="/Logos.png" alt="Image" width={600} height={600}></Image>
                </div>
        </div>

        {/* Sidebar */}
        <div className="w-full md:w-1/3">
          <Sidebar />
        </div>
      </div>
    </>
  );
};

export default Blog;
