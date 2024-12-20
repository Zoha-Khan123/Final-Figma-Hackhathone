import React from 'react'
import Image from "next/image"
import { Josefin_Sans, Lato } from 'next/font/google';
import { offerProduct, recentPost, saleProduct } from '../blog';
import { FaSearch } from 'react-icons/fa';
import Icons from './icons';

// Use Lato font
const lato = Lato({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});
const josefin = Josefin_Sans({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});
const Sidebar = () => {
  return (
<div className='space-y-5 px-4 lg:px-0 lg:space-x-7'>

{/* search */}
<div className='space-y-5 lg:pl-5'>
<h1 className={`text-[#151875] ${josefin.className} text-2xl font-bold`}>Search</h1>
<div className="relative w-72 flex">
      <input
        type="text"
        placeholder="Enter For Posts"
        className="w-full py-2 pl-10 pr-4 bg-white border border-gray-300 rounded-lg text-[#CBCBE0] focus:outline-none focus:ring-2 focus:ring-[#151875]"
      />
      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white">
        <FaSearch className="w-5 h-5 text-[#CBCBE0]" />
      </span>
    </div>
</div>


{/* Categories */}
<div className='space-y-5'>
<h1 className={`text-[#151875] ${josefin.className} text-2xl font-bold`}>Categories</h1>
<div className={`${josefin.className} text-[#3F509E] grid grid-cols-2 gap-2 text-center`}>
  <p className="bg-[#F939BF] text-white px-4 py-2 border rounded-md">Hobbies(21)</p>
  <p className="border rounded-md hover:bg-[#F939BF] hover:text-white px-4 py-2 transition-colors duration-300">Women(21)</p>
  <p className="border rounded-md hover:bg-[#F939BF] hover:text-white px-4 py-2 transition-colors duration-300">Women(21)</p>
  <p className="border rounded-md hover:bg-[#F939BF] hover:text-white px-4 py-2 transition-colors duration-300">Women(21)</p>
  <p className="border rounded-md hover:bg-[#F939BF] hover:text-white px-4 py-2 transition-colors duration-300">Women(21)</p>
  <p className="border rounded-md hover:bg-[#F939BF] hover:text-white px-4 py-2 transition-colors duration-300">Women(21)</p>
</div>
</div>


{/* Recenet Post */}
<div  className='space-y-5'>
    <h1 className={`text-[#151875] ${josefin.className} text-2xl font-bold`}>Recenet Post</h1>
{
recentPost.map((data)=>{
    return(
        <>
        <div className='flex gap-2'>
            <div><Image src={data.image} alt="Image" width={70} height={61}></Image></div>
            <div><p className={`text-[#3F509E] ${josefin.className}`}>{data.paragraph}</p><p className={`text-[#8A8FB9] ${lato.className}`}>{data.time}</p></div>
        </div>
        </>
    )
})
}
</div>



{/* Sale Product */}
<div  className='space-y-5'>
    <h1 className={`text-[#151875] ${josefin.className} text-2xl font-bold`}>Sale Product</h1>
{
saleProduct.map((data)=>{
    return(
        <>
        <div className='flex gap-2'>
            <div><Image src={data.image} alt="Image" width={70} height={61}></Image></div>
            <div><p className={`text-[#3F509E] ${josefin.className}`}>{data.paragraph}</p><p className={`text-[#8A8FB9] ${lato.className}`}>{data.time}</p></div>
        </div>
        </>
    )
})
}
</div>


{/* Offer Product */}
<div  className='space-y-5'>
    <h1 className={`text-[#151875] ${josefin.className} text-2xl font-bold`}>Offer Product</h1>
<div className='grid grid-cols-2 gap-4 justify-center items-center'>
{
offerProduct.map((data)=>{
    return(
        <>
        <div className='lg:text-center'>
            <Image src={data.image} alt="Image" width={150} height={150}></Image>
            <h1 className={`text-[#151875] ${lato.className} font-bold text-lg`}>{data.paragraph}</h1>
            <p className={`text-[#8A8FB9] ${lato.className}`}>{data.price}</p>
        </div>
        </>
    )
})
}
</div>
</div>


{/* Links */}
<h1 className={`text-[#151875] ${josefin.className} text-2xl font-bold`}>Follow</h1>
<Icons></Icons>



{/* Tags */}
<div  className='space-y-5'>
<h1 className={`text-[#151875] ${josefin.className} text-2xl font-bold`}>Tags</h1>
<div className='grid grid-cols-3 gap-5'>
    <a href="" className={`${lato.className} text-[#151875] text-xl underline`}>General</a>
    <a href="" className={`${lato.className} text-[#FB2E86] text-xl  underline`}>Atsanil</a>
    <a href="" className={`${lato.className} text-[#151875] text-xl  underline`}>Insas.</a>
    <a href="" className={`${lato.className} text-[#151875] text-xl  underline`}>Bibsaas</a>
    <a href="" className={`${lato.className} text-[#151875] text-xl  underline`}>Nulla.</a>
</div>


<div>
</div>
</div>


 </div>
  )
}

export default Sidebar