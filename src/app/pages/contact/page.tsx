import Link from "next/link";
import Image from "next/image";
import { Josefin_Sans, Lato } from 'next/font/google';

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


export default function Contact (){
    return(
        <>
        <div className="w-full bg-[#F6F5FF] h-60 ">
            <div className="max-w-[1210px] px-2 h-full flex items-center m-auto">
                <div>
            <h1 className={`textColor block text-[36px] font-bold ${josefin.className}`}>Contact Us</h1>
            <ul className={`flex gap-2 text-[16px] ${lato.className} font-extrabold`}>
                <Link href={'/'}>
                <li>Home</li>
                </Link>
                <li>.</li>
                <li>Pages</li>
                <li className="h-4 text-[#FB2E86]">.</li>
                <Link href={'/pages/contact'}>
                <li className="text-[#FB2E86]">Contact us</li>
                </Link>
            </ul>
                </div>
            </div>
        </div>














        <div className="max-w-[1210px] px-2 h-full grid grid-cols-1 md:grid-cols-2 md:mx-auto mt-20 mx-2">
            <div>
            <h2 className="textColor text-[36px] font-bold">Information About us</h2>
            <p className="pr-2 text-[#8A8FB9] max-w-[600px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.</p>
            <div className="flex items-center gap-4 my-10">
                <div className="w-6 h-6 rounded-full bg-[#5625DF]">
                </div>
                <div className="w-6 h-6 rounded-full bg-[#FF27B7]"></div>
                <div className="w-6 h-6 rounded-full bg-[#37DAF3]"></div>
            </div>
            </div>
            <div>
                <h2 className="textColor text-[36px] font-bold">Contact Way</h2>
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className=" relative mt-4">
                        <div className="w-[45px] h-[45px] bg-[#5726DF] rounded-full flex">
                        </div>
                        <span className="absolute top-4 -mt-4 left-12 ml-3 text-[#8A8FB9]">
                            <p className="text-[16px]">Tel: 877-67-88-99</p>
                            <p className="text-[16px]">E-Mail: shop@store.com</p>
                        </span>
                    </div>
                    <div className=" relative mt-12 md:mt-4">
                        <div className="w-[45px] h-[45px] bg-[#FB2E86] rounded-full flex">
                        </div>
                        <span className="absolute top-4 -mt-4 left-12 ml-3 text-[#8A8FB9]">
                            <p className="text-[16px]">Support Forum</p>
                            <p className="text-[16px]">For over 24hr</p>
                        </span>
                    </div>
                    <div className=" relative mt-12">
                        <div className="w-[45px] h-[45px] bg-[#FFB265] rounded-full flex">
                        </div>
                        <span className="absolute top-4 -mt-4 left-12 ml-3 text-[#8A8FB9]">
                            <p className="text-[16px]">20 Margaret st, London</p>
                            <p className="text-[16px]">Great britain, 3NM98-LK</p>
                        </span>
                    </div>
                    <div className=" relative mt-12">
                        <div className="w-[45px] h-[45px] bg-[#1BE982] rounded-full flex">
                        </div>
                        <span className="absolute top-4 -mt-4 left-12 ml-3 text-[#8A8FB9]">
                            <p className="text-[16px]">Free standard shipping</p>
                            <p className="text-[16px]">on all orders.</p>
                        </span>
                    </div>
                </div>
            </div>
        </div>










        <div className="max-w-[1210px] h-full flex justify-center items-center flex-col lg:flex-row-reverse md:mx-auto mt-20 mx-2 mb-28 ">
  <div className="px-2 min-h-[300px] min-w-[300px]">
    <Image
      src={'/contact.png'}
      width={600}
      height={600}
      alt="contact-image"
    ></Image>
  </div>
  <div className="px-2">
    <h2 className="textColor text-[36px] font-bold">Get In Touch</h2>
    <p className="pr-2 text-[#8A8FB9] max-w-[600px] mt-2">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque
      ultrices tristique amet erat vitae eget dolor los vitae lobortis quis
      bibendum quam.
    </p>
    <div className="contact-form mt-10 space-y-8 max-w-[560px]">
      {/* Row 1: Name and Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Your Name*"
          required
          className="w-full p-3 border border-gray-300 rounded placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="email"
          placeholder="Your E-mail"
          className="w-full p-3 border border-gray-300 rounded placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      {/* Row 2: Subject */}
      <input
        type="text"
        required
        placeholder="Subject*"
        className="w-full p-3 border border-gray-300 rounded placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      {/* Row 3: Message */}
      <textarea
        placeholder="Type Your Message*"
        rows={6}
        required
        className="w-full p-3 border border-gray-300 rounded placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      ></textarea>
      <button className="bg-[#FB2E86] w-[150px] h-[45px] text-white">
        Send Mail
      </button>
    </div>
  </div>
</div>


        </>
    )
}