'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Lato, Josefin_Sans } from "next/font/google"; // Import Josefin font
import {FaStar } from "react-icons/fa";
import { shopItemLeftSidebar } from '../shop-left-sidebar';
import Checkbox from './checkbox';

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


export default function Pages() {

  // Array of custom colors
  const colorArray = ["#DE9034", "#E60584", "#5E37FF"];

  return (
    <>
      <div className={`w-full bg-[#F6F5FF] h-60 ${josefin.className}`}>
        <div className="max-w-[1210px] px-2 h-full flex items-center m-auto">
          <div>
            <h1 className="textColor block text-[36px] font-bold">Shop Left Sidebar</h1>
            <ul className="flex gap-2 text-[16px]">
              <Link href={'/'}>
                <li>Home</li>
              </Link>
              <li className="font-extrabold ">.</li>
              <li>Pages</li>
              <li className="font-extrabold h-4 text-[#FB2E86]">.</li>
              <Link href={'/components/pages'}>
                <li className="text-[#FB2E86]">Shop Left Sidebar</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>










      <div className="max-w-[1210px] px-2 h-full my-20 sm:flex justify-between items-center m-auto">
        <div>
          <h2 className={`textColor font-bold ${josefin.className}`}>Ecommerce Acceories & Fashion item </h2>
          <p className={`text-[10px] text-[#8A8FB9] ${lato.className}`}>About 9,620 results (0.62 seconds)</p>
        </div>

        <div className='my-6 '>
          <span className='mx-4'>
            <label htmlFor="" className='textColor'>Per Page:</label>
            <input type="text" name="" id="" className=' w-14 rounded-none ml-2 border-neutral-200 border' />
          </span>
          <span className='mx-4'>
            <label htmlFor="" className='textColor'>Sort By:</label>
            <input type="text" placeholder='Best Match' name="" id="" className=' w-16 placeholder:text-[9px] place-items-center rounded-none ml-2 border-neutral-200 border' />
          </span>
          <span className='mx-4 mt-3 block lg:inline'>
            <label htmlFor="" className='textColor'>View:</label>
            <Image src={'/shopGridProducts/clarity_grid-view-solid.png'} height={10} width={10} alt='img' className='inline mx-1'></Image>
            <Image src={'/shopGridProducts/fa-solid_list.png'} height={10} width={10} alt='img' className='inline '></Image>
            <input type="text" name="" id="" className=' max-w-18 rounded-none ml-2 border-neutral-200 border' />
          </span>
        </div>
      </div>














      <div className='max-w-[1210px] px-2 h-full text-[11px] space-x-4 flex justify-between md:text-base items-start mx-auto md:space-x-12'>

        <div className='max-w-40 md:max-w-52 '>
          <div>
            <h2 className={`underline underline-offset-4 font-bold textColor mb-3 text-sm sm:text-lg ${josefin.className}`}>Product Brand</h2>
            <div className={`text-[#7E81A2] space-y-2 ${lato.className}`}>
            

              <Checkbox uncheckedBgColor={'#E5E0FC'} checkedBgColor={'#603EFF'} title='Coster Furniture' />
              <Checkbox uncheckedBgColor={'#E5E0FC'} checkedBgColor={'#603EFF'} title='Fusion Dot High Fashion' />
              <Checkbox uncheckedBgColor={'#E5E0FC'} checkedBgColor={'#603EFF'} title='Unique Furniture Restore' />
              <Checkbox uncheckedBgColor={'#E5E0FC'} checkedBgColor={'#603EFF'} title='Dream Furniture Flipping' />
              <Checkbox uncheckedBgColor={'#E5E0FC'} checkedBgColor={'#603EFF'} title='Young Repurposed' />
              <Checkbox uncheckedBgColor={'#E5E0FC'} checkedBgColor={'#603EFF'} title='Green DIY furniture' />
            </div>
          </div>




          <div className='mt-10'>
            <h2 className={`underline underline-offset-4 font-bold textColor mb-3 text-sm sm:text-lg ${josefin.className}`}>Discount Offer</h2>
            <div className={`text-[#7E81A2] space-y-2 ${lato.className}`}>

              <Checkbox uncheckedBgColor={'#FFDBF1'} checkedBgColor={'#FF3EB2'} title='20% Cashback' />
              <Checkbox uncheckedBgColor={'#FFDBF1'} checkedBgColor={'#FF3EB2'} title='5% Cashback Offer' />
              <Checkbox uncheckedBgColor={'#FFDBF1'} checkedBgColor={'#FF3EB2'} title='25% Discount Offer' />
            </div>
          </div>



          <div className='mt-10'>
            <h2 className={`underline underline-offset-4 font-bold textColor mb-3 text-sm sm:text-lg ${josefin.className}`}>Rating Item</h2>
            <div className={`text-[#7E81A2] space-y-2 ${lato.className}`}>

            <div className='flex justify-start items-center'>

              <Checkbox uncheckedBgColor={'#FFF6DA'} checkedBgColor={'#FFCC2E'} />
              <FaStar className='text-yellow-500 mx-[1px] w-2 h-2 sm:w-4 sm:h-4 ml-1'/>
              <FaStar className='text-yellow-500 mx-[1px] w-2 h-2 sm:w-4 sm:h-4'/>
              <FaStar className='text-yellow-500 mx-[1px] w-2 h-2 sm:w-4 sm:h-4'/>
              <FaStar className='text-yellow-500 mx-[1px] w-2 h-2 sm:w-4 sm:h-4'/>
              <FaStar className='mx-[1px] w-2 h-2 sm:w-4 sm:h-4'/>
              <span className='text-black'>(2341)</span>
            </div>



            <div className='flex justify-start items-center'>

              <Checkbox uncheckedBgColor={'#FFF6DA'} checkedBgColor={'#FFCC2E'} />
              <FaStar className='text-yellow-500 mx-[1px] w-2 h-2 sm:w-4 sm:h-4 ml-1'/>
              <FaStar className='text-yellow-500 mx-[1px] w-2 h-2 sm:w-4 sm:h-4'/>
              <FaStar className='text-yellow-500 mx-[1px] w-2 h-2 sm:w-4 sm:h-4'/>
              <FaStar className='mx-[1px] w-2 h-2 sm:w-4 sm:h-4'/>
              <FaStar className='mx-[1px] w-2 h-2 sm:w-4 sm:h-4'/>
              <span className='text-black'>(1726)</span>
            </div>


            <div className='flex justify-start items-center'>

<Checkbox uncheckedBgColor={'#FFF6DA'} checkedBgColor={'#FFCC2E'} />
<FaStar className='text-yellow-500 mx-[1px] w-2 h-2 sm:w-4 sm:h-4 ml-1'/>
<FaStar className='text-yellow-500 mx-[1px] w-2 h-2 sm:w-4 sm:h-4'/>
<FaStar className='mx-[1px] w-2 h-2 sm:w-4 sm:h-4'/>
<FaStar className='mx-[1px] w-2 h-2 sm:w-4 sm:h-4'/>
<FaStar className='mx-[1px] w-2 h-2 sm:w-4 sm:h-4'/>
<span className='text-black'>(258)</span>
</div>
              

              
            <div className='flex justify-start items-center'>

<Checkbox uncheckedBgColor={'#FFF6DA'} checkedBgColor={'#FFCC2E'} />
<FaStar className='text-yellow-500 mx-[1px] w-2 h-2 sm:w-4 sm:h-4 ml-1'/>
<FaStar className='text-yellow-500 mx-[1px] w-2 h-2 sm:w-4 sm:h-4'/>
<FaStar className='mx-[1px] w-2 h-2 sm:w-4 sm:h-4'/>
<FaStar className='mx-[1px] w-2 h-2 sm:w-4 sm:h-4'/>
<FaStar className='mx-[1px] w-2 h-2 sm:w-4 sm:h-4'/>
<span className='text-black'>(25)</span>
</div>
            </div>
          </div>





          <div className='mt-10'>
            <h2 className={`underline underline-offset-4 font-bold textColor mb-3 text-sm sm:text-lg ${josefin.className}`}>Categories</h2>
            <div className={`text-[#7E81A2] space-y-2 ${lato.className}`}>

              <Checkbox uncheckedBgColor={'#FFDBF1'} checkedBgColor={'#FF3EB2'} title='Prestashop' />
              <Checkbox uncheckedBgColor={'#FFDBF1'} checkedBgColor={'#FF3EB2'} title='Magento' />
              <Checkbox uncheckedBgColor={'#FFDBF1'} checkedBgColor={'#FF3EB2'} title='Bigcommerce' />
              <Checkbox uncheckedBgColor={'#FFDBF1'} checkedBgColor={'#FF3EB2'} title='osCommerce' />
              <Checkbox uncheckedBgColor={'#FFDBF1'} checkedBgColor={'#FF3EB2'} title='3dcart' />
              <Checkbox uncheckedBgColor={'#FFDBF1'} checkedBgColor={'#FF3EB2'} title='Bags' />
              <Checkbox uncheckedBgColor={'#FFDBF1'} checkedBgColor={'#FF3EB2'} title='Accessories' />
              <Checkbox uncheckedBgColor={'#FFDBF1'} checkedBgColor={'#FF3EB2'} title='Jewellery' />
              <Checkbox uncheckedBgColor={'#FFDBF1'} checkedBgColor={'#FF3EB2'} title='Watches' />
            </div>
          </div>




          <div className='mt-10'>
            <h2 className={`underline underline-offset-4 font-bold textColor mb-3 text-sm sm:text-lg ${josefin.className}`}>Price Filter</h2>
            <div className={`text-[#7E81A2] space-y-2 ${lato.className}`}>

              <Checkbox uncheckedBgColor={'#FFDBF1'} checkedBgColor={'#FF3EB2'} title='$0.00 - $150.00' />
              <Checkbox uncheckedBgColor={'#FFDBF1'} checkedBgColor={'#FF3EB2'} title='$150.00 - $350.00' />
              <Checkbox uncheckedBgColor={'#FFDBF1'} checkedBgColor={'#FF3EB2'} title='$150.00 - $504.00' />
              <Checkbox uncheckedBgColor={'#FFDBF1'} checkedBgColor={'#FF3EB2'} title='$450.00 +' />
            </div>
          </div>


          <input type="text" placeholder='$10.00 - 20000$' className='border-[1px] my-5 rounded placeholder:pl-2 placeholder-opacity-15
                 border-[#BCBDDB]' />




<div className="mt-10">
  <h2 className={`underline underline-offset-4 font-bold textColor mb-3 text-sm sm:text-lg ${josefin.className}`}>Filter By Color</h2>
  <div className={`text-[#7E81A2] space-y-2 ${lato.className}`}>
    <div className="flex flex-wrap">
      <div className="flex items-center space-x-1 basis-1/3">
        <div className="h-3 w-3 rounded-full bg-[#5E37FF]"></div>
        <span>Blue</span>
      </div>
      <div className="flex items-center space-x-1 basis-1/3">
        <div className="h-3 w-3 rounded-full bg-[#FF9437]"></div>
        <span>Orange</span>
      </div>
      <div className="flex items-center space-x-1 basis-1/3">
        <div className="h-3 w-3 rounded-full bg-[#FFBF95]"></div>
        <span>Brown</span>
      </div>
      <div className="flex items-center space-x-1 basis-1/3">
        <div className="h-3 w-3 rounded-full bg-[#33D221]"></div>
        <span>Green</span>
      </div>
      <div className="flex items-center space-x-1 basis-1/3">
        <div className="h-3 w-3 rounded-full bg-[#E248FF]"></div>
        <span>Purple</span>
      </div>
      <div className="flex items-center space-x-1 basis-1/3">
        <div className="h-3 w-3 rounded-full bg-[#26CBFF]"></div>
        <span>Sky</span>
      </div>
    </div>
  </div>
</div>
</div>















        <div className=" w-full flex flex-col space-y-10 justify-between mb-10">
          {shopItemLeftSidebar.map((items) => {
            return (
              <div key={items.id} className="flex flex-col md:flex-row">
                {/* Left side */}
                <div>
                  <Image
                    src={items.imageUrl}
                    alt="Image"
                    width={400}
                    height={400}
                  ></Image>
                </div>

                {/* Right side */}
                <div className="max-w-[800px] space-y-4 flex flex-col justify-center space-x-5">
                  <div className="flex items-center gap-2 sm:gap-6 ml-2 sm:ml-4">
                    <h1
                      className={`${josefin.className} text-[#111C85] ml-1 text-lg sm:text-2xl font-bold`}
                    >
                      {items.heading}
                    </h1>

                    {/* bullets */}
                    <div className="flex space-x-1">
                      {Array.from({ length: items.bullets }).map((_, index) => {
                        const bulletColor =
                          colorArray[index % colorArray.length]; // Loop through colors
                        return (
                          <div
                            key={index}
                            className="flex justify-center items-center"
                          >
                            <div
                              className="h-2 w-2 sm:w-4 sm:h-4 rounded-full mr-2"
                              style={{ backgroundColor: bulletColor }} // Apply dynamic background color
                            ></div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* prices */}
                  <div className="flex gap-2 sm:gap-4">
                    <p
                      className={`${josefin.className} text-[#111C85] text-xl `}
                    >
                      {items.currencySymbol}
                      {items.price}
                    </p>
                    <p
                      className={`${josefin.className} text-[#111C85] text-xl`}
                    >
                      {items.currencySymbol}
                      {items.discountPrice}
                    </p>
                    {/* stars */}
                    <div className="flex justify-center items-center gap-1 sm:gap-2">
                      {items.stars.map((StarIcon, index) => {
                        return (
                          <div key={index}>
                            <StarIcon className="text-yellow-500 w-4 h-4" />
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* paragraph */}
                  <p
                    className={`${lato.className} text-[#9295AA] text-sm sm:text-xl leading-normal`}
                  >
                    {items.paragraph}
                  </p>

                  {/* Icons */}
                  <div className=" flex space-x-6 sm:pt-5">
                    {items.icons.map((IconComponent, index) => {
                      return (
                        <div key={index}>
                          <IconComponent className="text-[#535399] w-3 h-3 sm:w-5 sm:h-5" />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>


    </>
  )
}