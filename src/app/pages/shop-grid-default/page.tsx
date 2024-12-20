import Link from 'next/link'
import Image from 'next/image'
import { Lato, Josefin_Sans } from "next/font/google"; // Import Josefin font
import { shopGridProducts } from '../shop-grid';

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
  

export default function ShopGridDefault(){
    return(
        <>
          <div className={`w-full bg-[#F6F5FF] h-60 ${josefin.className}`}>
            <div className="max-w-[1210px] px-2 h-full flex items-center m-auto">
                <div>
            <h1 className="textColor block text-[36px] font-bold">Shop Grid Default</h1>
            <ul className="flex gap-2 text-[16px]">
                <Link href={'/'}>
                <li>Home</li>
                </Link>
                <li className="font-extrabold ">.</li>
                <li>Pages</li>
                <li className="font-extrabold h-4 text-[#FB2E86]">.</li>
                <Link href={'/components/pages'}>
                <li className="text-[#FB2E86]">Shop Grid Default</li>
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











        <div>
        <section className="flex justify-center">
          <div className="grid max-w-[1200px] sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-5 gap-14">
            {shopGridProducts.map((Product, idx) => (
              <div key={idx}>
                <div className="min-h-64 rounded-none group transition-all duration-300">
                  {/* Image Container */}
                  <div className="w-full h-64 relative overflow-hidden">
                    <Image
                      src={Product.image}
                      alt="image"
                      width={400}
                      height={400}
                      className="w-full h-full object-contain bg-[#F6F7FB] transition duration-300 hover:bg-[#EBF4F3]"
                    />



                    {/* View Details Button */}
                    <Link href={`components/dynamicpage/featuredproduct/${Product.id}`}>
                    <div className="absolute flex flex-col justify-center items-center bottom-2 left-4 gap-2 transform -translate-x-1/2 duration-300 opacity-0 group-hover:opacity-100">
                    <div>
                      <Image src={'/cart.png'} width={25} height={25} alt="img"></Image>
                    </div>
                      <div>
                      <Image src={'/uil_search-plus.png'} width={15} height={15} alt="img"></Image>
                      </div>
                      <div>
                      <Image src={'/uil_heart-alt.png'} width={15} height={15} alt="img"></Image>
                      </div>
                    </div>
                  </Link>

                  </div>

                  {/* Product Title */}
                  <h3 className="font-bold mt-2 text-center text-lg textColor my-2 ">
                    {Product.title}
                  </h3>

                  {/* Color Options */}
                  <div className="flex justify-center items-center gap-1 my-2">
                    <div className="bg-[#DE9034] w-2 h-2 rounded-full"></div>
                    <div className="bg-[#EC42A2] w-2 h-2 rounded-full"></div>
                    <div className="bg-[#8568FF] w-2 h-2 rounded-full"></div>
                  </div>


                  {/* Product Price */}
                  <div className="price text-[var(--textColor)] flex justify-center items-center text-base my-2 gap-3">
                    $ {Product.price.toFixed(2)}
                  <del className='text-[#EC42A2]'>$42</del>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>





                <div className='flex justify-center items-center my-16 max-w[900px]'>
                    <Image src={'/Logos.png'} width={900} height={900} alt='img'></Image>
                </div>





        </>
    )
}