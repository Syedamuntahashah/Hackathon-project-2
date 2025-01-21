"use client"
import { useState, useEffect } from 'react';
import { client } from '@/sanity/lib/client'; 
import { Product } from '../../../types/products';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';


const ProductListing = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData: Product[] = await client.fetch(`*[_type == "product"]{
  _id,
  name,
  image {
    asset->{
      _id,
      url
    }
  },
  price,
  description,
  discountPercentage,
  isFeaturedProduct,
  stockLevel,
  category,
  slug
}
`);
        setProducts(productsData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []); 

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Header/>
    <div className='max-w-6xl mx-auto px-4 py-8'>
      <h1 className='text-2xl font-bold mb-6 text-center'>Our Best Selling Products</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
      {products.map((product , index) => (
        <div key={index}
        className='border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200'
        >
          <Link href={`/products/${product.slug.current}`}>
           {product.image && (
            <Image 
            src={urlFor(product.image).url()}
            alt='image'
            width={200}
            height={200}
            className='w-full h-48 object-cover rounded-md'
            />
           )}
           <h2 className='text-lg font-semibold mt-4'>{product.name}</h2>
          <h1 className='text-md font-bold mt-4'>
            {product.price}</h1>
            <p className='text-gray-500 mt-5'>
              {product.description}
            </p>
            </Link>
        </div>
      ))}
      </div>
    </div>
    <main className="w-full bg-[#FAF4F4] py-8 px-4 flex justify-center">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl text-center">
    
    <div className="flex flex-col items-center">
      <h1 className="font-medium text-[28px] md:text-[32px] leading-[40px] md:leading-[48px] text-black">
        Free Delivery
      </h1>
      <p className="text-[#9F9F9F] mt-2">
        For all orders over $50 consectetur <br /> adipiscing elit.
      </p>
    </div>
    
    <div className="flex flex-col items-center">
      <h1 className="font-medium text-[28px] md:text-[32px] leading-[40px] md:leading-[48px] text-black">
        90 Days Return
      </h1>
      <p className="text-[#9F9F9F] mt-2">
        If goods have problems <br /> consectetur adipiscing elit.
      </p>
    </div>
    
    <div className="flex flex-col items-center">
      <h1 className="font-medium text-[28px] md:text-[32px] leading-[40px] md:leading-[48px] text-black">
        Secure Payment
      </h1>
      <p className="text-[#9F9F9F] mt-2">
        100% secure payment <br /> consectetur adipiscing elit.
      </p>
    </div>

  </div>
</main>
    <Footer/>
    </div>
  );
};

export default ProductListing;

