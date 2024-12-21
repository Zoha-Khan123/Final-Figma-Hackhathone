import Image from "next/image"
import Link from "next/link"


export default function NotFound(){
    return(
        <>
             <div className="w-full bg-[#F6F5FF] h-60 ">
            <div className="max-w-[1210px] px-2 h-full flex items-center m-auto">
                <div>
            <h1 className="textColor block text-[36px] font-bold">404 Not Found</h1>
            <ul className="flex gap-2 text-[16px]">
                <Link href={'/'}>
                <li>Home</li>
                </Link>
                <li className="font-extrabold ">.</li>
                <li>Pages</li>
                <li className="font-extrabold h-4 text-[#FB2E86]">.</li>
                <Link href={'/'}>
                <li className="text-[#FB2E86]">404 Not Found</li>
                </Link>
            </ul>
                </div>
            </div>
        </div>





        <section className="flex flex-col items-center justify-center h-96 sm:h-screen mb-20">
            <div>
                <Image src={'/404[1].png'} width={800} height={800} alt="404-image"></Image>
            </div>
            <div>
                <Link href="/">
          <button className={`bg-[#FB2E86] text-white mt-4 py-2 px-6 text-sm font-semibold hover:bg-[#f51e74] hover:scale-105 transition-all duration-300 `}>
         Back to Home
         </button>
         </Link>

          </div>
           <div className="max-w-[1000px] flex justify-center items-center mx-auto my-14">
                  <Image src="/Logos.png" alt="Image" width={600} height={600}></Image>
                </div>
        </section>
        </>
    )
}
