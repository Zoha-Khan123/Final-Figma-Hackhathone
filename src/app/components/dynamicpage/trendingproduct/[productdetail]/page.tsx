import { trendingProduct } from "@/app/components/trendingProduct"; // Adjust the path as necessary
import Image from "next/image";
import Link from "next/link";

export default function ProductDetail({params}: {params: { productdetail: string };}) {
  
    const selectedProduct = trendingProduct.find((p) => p.id === params.productdetail);

    // Filter out the selected product from the data to show related products
    
    
    if (!selectedProduct) {
      return <p>Product not found!</p>; // Handle case where product is not found
    }
    const relatedProducts = trendingProduct.filter((p) => p.id !== selectedProduct.id);

  return (
    <div>
    <div className="flex flex-col justify-center items-center mt-10 sm:flex-row">
      <div className="image p-6">
      <Image
        src={selectedProduct.image}
        width={500}
        height={400}
        alt={selectedProduct.title}
        className="bg-violet-100 rounded-xl mr-10"
      />
      </div>
      <div className="p-4">
      <h1 className="text-4xl my-6">{selectedProduct.title}</h1>
      <p className="max-w-80 text-justify">{selectedProduct.description}</p>
      <br />
      <br />
      <p className="text-lg font-bold">Price: ${selectedProduct.price.toFixed(2)}</p>
      </div>
        </div>
        <br />
        <br />
        <br />





        {/* Related Products Section */}
        <div className="flex justify-center items-center">
          <div>

        <h2 className="text-2xl">Related Products</h2>
        <br />
        <br />
        <div className="grid max-w-[1200px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 px-6 py-6 gap-5 mb-10">
          {relatedProducts.slice(0, 5).map((product) => (
            <Link key={product.id} href={`/components/dynamicpage/trendingproduct/${product.id}`}>
              <div className="w-full h-40 relative bg-white ">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={100}
                  height={100}
                  className=" w-full h-full object-contain"
                  />
                <p>{product.title}</p>
                <span>${product.price.toFixed(2)}</span>
              </div>
            </Link>
          ))}
          </div>
        </div>
        </div>
    </div>
  );
}
