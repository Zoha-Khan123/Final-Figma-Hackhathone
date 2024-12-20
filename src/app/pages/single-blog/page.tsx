import Link from 'next/link'
import { Josefin_Sans, Lato } from "next/font/google";
import Image from 'next/image';

import React from 'react'
import { FaCommentDots, FaEnvelope, FaPenNib, FaUser } from 'react-icons/fa';
import { MdOutlineCalendarMonth } from 'react-icons/md';
import { singleBlog } from '../single-blog';
import { Icon } from 'lucide-react';
import Icons from '../blog/icons';
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io';
import Sidebar from '../blog/sidebar';
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


const SingleBlog = () => {
  return (
    <>
    <div className="w-full bg-[#F6F5FF] h-60">
    <div className="max-w-[1210px] px-4 h-full flex items-center mx-auto">
      <div>
        <h1
          className={`text-[#151875] text-[28px] md:text-[36px] font-bold ${josefin.className}`}
        >
          Single Blog
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
            <li className="text-[#FB2E86]">Single Blog</li>
          </Link>
        </ul>
      </div>
    </div>
  </div>





  <div className="max-w-[1210px] px-4 mx-auto my-20 ">
    <div className="flex flex-col lg:flex-row gap-5">

<div>
    {/* Single Blog */}
<div className="w-full lg:max-w-[900px] space-y-10 px-4">


<div>
     <div><Image src="/singleBlog/single-blog-01.png" alt="Image" width={700} height={700} className="w-full h-auto rounded-lg"/> </div>
</div>


 {/* Icons */}
 <div className="flex flex-wrap  md:gap-5 items-center">
                <div className="flex items-center gap-1 md:gap-3">
                  <FaPenNib className="text-[#FB2E86]" />
                  <span
                    className={`bg-[#FFE7F9] text-[#28282a] ${josefin.className} px-4 py-1 rounded-lg`}
                  >
                    Surf Auxion
                  </span>
                </div>
                <div className="flex items-center gap-1 md:gap-3">
                  <MdOutlineCalendarMonth className="text-[#FFA454]" />
                  <span
                    className={`bg-[#FFECE2] text-[#151875] ${josefin.className} px-4 py-1 rounded-lg`}
                  >
                    Aug 09 2020
                  </span>
                </div>
 </div>


 {/* Blog details */}
 <div>
 <h1 className={`${josefin.className} text-[#151875] text-xl md:text-2xl lg:text-3xl font-extrabold`}>Mauris at orci non vulputate diam tincidunt nec.</h1>
 <div className={`${lato.className} text-[#8A8FB9] text-[14px] md:text-[16px] leading-relaxed space-y-12 my-6`}>
 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.</p>
 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, </p>            
<div className={` ${josefin.className} text-[16px] leading-relaxed space-y-3 sm:space-y-0 sm:leading-loose py-6 px-3 text-[#969CB4] bg-[#FAFAFB]` }>
    <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo dictum sapien, amet, consequat.</p> 
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo dictum sapien, amet, consequat toamk risusu”</p>
</div>
 </div>
 </div>


{/* Pics Two */}

<div className='flex flex-col sm:flex-row gap-6'>
    <div><Image src="/singleBlog/single-blog-02.png" alt="Image" width={420} height={400}></Image></div>
    <div><Image src="/singleBlog/single-blog-03.png" alt="Image" width={420} height={400}></Image></div>
</div>


   
{/* paragraph*/}
<div className={`${lato.className} text-[#8A8FB9] text-[14px] md:text-[16px] leading-relaxed space-y-12 my-6`}>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, </p>
</div>



{/* Images */}
<div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
{
    singleBlog.map((blog)=>{
        return(
        <div key={blog.id} className={`${josefin.className} space-y-2`}>
               <Image src={blog.imageUrl} alt="Image" width={200} height={200} className='w-full h-auto'></Image>
               <div className={`${josefin.className}`}>
               <div className="flex flex-col justify-between items-center w-full space-y-1">
               <h1 className='text-xl'>{blog.heading}</h1> 
  {/* Price Section */}
  <p className="text-[#232A69] text-sm ">
    {blog.currencySymbol}{blog.price}.00
    <span className="text-[#FF38B0] ml-2">
      {blog.currencySymbol}{blog.discountPrice}.00
    </span>
  </p>

  {/* Stars Section */}
  <div className="flex items-center gap-1 flex-wrap">
    {blog.stars.map((StarIcon, index) => (
      <StarIcon key={index} className="text-[#FFD659] w-3 h-3" />
    ))}
  </div>
</div>


                    </div>
        </div>
        )
    })
}

</div>


{/* paragraph*/}
<div className={`${lato.className} text-[#8A8FB9] text-[14px] md:text-[16px] leading-relaxed space-y-12 my-6`}>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, </p>
</div>


{/* paragraph*/}
<div className={`${lato.className} text-[#8A8FB9] text-[14px] md:text-[16px] leading-relaxed space-y-12 my-6`}>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, </p>
</div>

{/* Icons */}
<div className='flex justify-center mt-44'>
<Icons/>
</div>


{/* Previous / Next Post */}
<div className={`${lato.className} flex justify-between items-center w-full max-w-4xl mx-auto text-[#8A8FB9] bg-[#FAFAFB] p-2`}>
  <p className="flex items-center">
    <IoIosArrowRoundBack className="w-10 h-8" />
    <span>Previous Post</span>
  </p>
  <p className="flex items-center">
    <span>Next Post</span>
    <IoIosArrowRoundForward className="w-10 h-8" />
  </p>
</div>

{/* Cards */}
<div className="space-y-6 max-w-[700px]">
  {/* 1st card */}
  <div className="flex flex-col md:flex-row items-center md:items-start bg-white shadow-lg rounded-lg p-4 gap-4">
  {/* Image Section */}
  <div className="flex-shrink-0">
    <Image
      src="/singleBlog/single-blog-09.png"
      alt=""
      width={100}
      height={100}
      className="rounded-md object-cover"
    />
  </div>

  {/* Content Section */}
  <div className="text-center md:text-left">
    <h1
      className={`text-[#363385] text-xl font-semibold ${josefin.className}`}
    >
      Sapien ac{" "}
      <span className={`${lato.className} text-[#A3A2B6] text-[14px]`}>
        Jan 09 2020
      </span>
    </h1>
    <p
      className={`${lato.className} text-[#A3A2B6] mt-2 text-[14px] leading-relaxed`}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. At in vitae
      rutrum vulputate consectetur.
    </p>
  </div>
</div>


  {/* 2nd card */}
  <div className="flex flex-col md:flex-row items-center md:items-start bg-white shadow-2xl rounded-lg p-4 gap-4">
  {/* Image Section */}
  <div className="flex-shrink-0">
    <Image
      src="/singleBlog/single-blog-08.png"
      alt=""
      width={100}
      height={100}
      className="rounded-md object-cover"
    />
  </div>

  {/* Content Section */}
  <div className="text-center md:text-left">
    <h1
      className={`text-[#363385] text-xl font-semibold ${josefin.className}`}
    >
      Augue conva{" "}
      <span className={`${lato.className} text-[#A3A2B6] text-[14px]`}>
        Aug 18 2020
      </span>
    </h1>
    <p
      className={`${lato.className} text-[#A3A2B6] mt-2 text-[14px] leading-relaxed`}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. At in vitae
      rutrum vulputate consectetur.
    </p>
  </div>
</div>





{/* Form */}

<div>
  <form>
    {/* Name and Email Inputs in a Row */}
    <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4 sm:mb-10">
      {/* Name Input */}
      <div className="flex items-center border border-gray-300 rounded-md p-2 sm:w-1/2">
        <FaUser className="text-gray-400 w-3 h-3" />
        <input
          type="text"
          placeholder="Your Name"
          className="ml-2 w-full outline-none text-gray-700"
        />
      </div>

      {/* Email Input */}
      <div className="flex items-center border border-gray-300 rounded-md p-2 sm:w-1/2">
        <FaEnvelope className="text-gray-400 w-5 h-5" />
        <input
          type="email"
          placeholder="Write your email"
          className="ml-2 w-full outline-none text-gray-700"
        />
      </div>
    </div>

    {/* Larger Comment Textarea */}
    <div className="flex items-start border border-gray-300 rounded-md p-2 mb-8">
      <FaCommentDots className="text-gray-400 w-5 h-5 mt-1" />
      <textarea
        placeholder="Write your comment"
        className="ml-2 w-full h-40 outline-none text-gray-700 resize-none"
      ></textarea>
    </div>

    {/* Checkbox */}
    <div className="flex mb-6 md:mb-10">
  <input
    type="checkbox"
    id="save-info"
    className="w-4 h-4 rounded"
  />
  <label
    htmlFor="save-info"
    className="ml-2 text-sm text-[#8A91AB] leading-relaxed"
  >
    Save my name, email, and website in this browser for the next time I comment.
  </label>
</div>


    {/* Submit Button */}
    <button
      type="submit"
      className="w-full bg-[#FB2E86] text-white py-2 px-4 rounded-md hover:bg-[#fd4997] transition"
    >
      Continue Shipping
    </button>
  </form>
</div>

    </div>


</div>
      
</div>


 {/* Sidebar */}
 <div className="w-full sm:w-1/3">
          <Sidebar />
        </div>
        </div>


        <div className="flex items-center my-14">
        <Image src="/Logos.png" alt="Image" width={800} height={800}></Image>
      </div>
        </div>




        
</>
  )
}

export default SingleBlog