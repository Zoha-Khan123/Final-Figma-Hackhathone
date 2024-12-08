import {blog} from '@/app/components/blog'
import { Card } from '@/components/ui/card'
import Image from 'next/image'

export default function Blog(){
    return(
        <section className="flex justify-center font-bold my-5">
            <div>
            <h1 className="textColor text-4xl flex justify-center items-center my-10">Latest Blog</h1>
            <div  className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10'>
                {blog.map((blog,index)=>(
                    <Card key={index}>
                        <Image src={blog.image} height={300} width={300} alt='img'></Image>
                        <Image 
                        src={'/Vector.png'} 
                        height={10} 
                        width={10} 
                        alt='write'
                        className='inline-block mx-2 my-3'></Image>
                        <span className='textColor text-xs font-thin mr-5'>{blog.writerName}</span>
                        <Image 
                        src={'/Vector(1).png'} 
                        height={10} 
                        width={10} 
                        alt='write'
                        className='inline-block  mx-2 my-3'></Image>
                        <span className='textColor text-xs font-thin'>{blog.date}</span>

                        <h2 className='textColor my-4  ml-4'>{blog.title}</h2>

                        <p className='text-sm font-thin max-w-72 text-[#72718F] ml-4'>{blog.description}</p>

                        <div className='underline my-4 text-sm font-thin textColor ml-4'>Read more</div>
                    </Card>
                ))}
            </div>
            </div>
        </section>
    )
}