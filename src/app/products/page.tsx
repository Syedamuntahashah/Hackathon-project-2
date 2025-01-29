"use client"
import { useState, useEffect } from 'react';
import { client } from '@/sanity/lib/client'; 
import { Product } from '../../../types/products';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
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
    <div className='max-w-6xl mx-auto px-4 py-8'>
      <h1 className='text-2xl font-bold mb-6 text-center'>Our Best Selling Products</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
      {products.map((product , index) => (
        <div key={index}
        className='flex flex-wrap justify-center gap-11 max-w-7xl mx-auto px-4'
        >
          <Link href={`/products/${product.slug.current}`}>
           {product.image && (
            <Image 
            src={urlFor(product.image).url()}
            alt='image'
            width={287}
            height={287}
            className='w-full h-48'
            />
           )}
           <h2 className='poppins-regular-400 font-normal text-[16px] leading-6 mt-4 mb-2'>{product.name}</h2>
          <h1 className='font-medium text-[20px] sm:text-[24px] leading-9'>
            Rs. {product.price}</h1>
            </Link>
        </div>
      ))}
      </div>
    </div>
  );
};

export default ProductListing;

