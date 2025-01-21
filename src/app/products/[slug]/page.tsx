"use client";

import { client } from "@/sanity/lib/client"; 
import { urlFor } from "@/sanity/lib/image";
import { Product } from "../../../../types/products";
import Image from "next/image";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React from "react";

interface ProductDetailProps {
  params: { slug: string };
}

const ProductDetail = ({ params }: ProductDetailProps) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const { slug } = params;  // Grabbing the slug directly from params

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const query = `*[_type == "product" && slug.current == $slug][0]{
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
          category
        }`;

        const productData = await client.fetch(query, { slug });

        if (productData) {
          setProduct(productData);
          setLoading(false);
        } else {
          setError("Product not found");
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching product details:", error);
        setError("There was an error fetching the product details.");
        setLoading(false);
      }
    };

    fetchProduct();
  }, [slug]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Loading...</p>  {/* You can replace this with a spinner or animation */}
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Product not found!</p>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            {product.image ? (
              <Image
                src={urlFor(product.image).url()}
                alt={product.name}
                width={500}
                height={500}
                className="rounded-lg object-cover"
              />
            ) : (
              <div className="w-full h-64 bg-gray-300 flex items-center justify-center text-white rounded-lg">
                No Image Available
              </div>
            )}
          </div>
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-gray-700 mb-4">{product.description}</p>
            <p className="text-lg font-semibold mb-2">
              Price: ${product.price.toFixed(2)}
            </p>
            {product.discountPercentage > 0 && (
              <p className="text-red-500 mb-4">
                Discount: {product.discountPercentage}%
              </p>
            )}
            <p className="text-gray-600 mb-4">Category: {product.category}</p>
            <p
              className={`mb-4 ${product.stockLevel > 0 ? "text-green-500" : "text-red-500"}`}
            >
              {product.stockLevel > 0 ? "In Stock" : "Out of Stock"}
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;






