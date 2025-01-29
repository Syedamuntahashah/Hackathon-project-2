"use client"
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { Product } from "../../../../types/products";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation"; 
import { addToCart } from "@/app/actions/actions";
import Swal from 'sweetalert2';



const ProductDetail = () => {
  const { slug } = useParams(); 
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;  

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

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    Swal.fire({
      position: window.innerWidth < 768 ? "top" : "bottom-right", 
      icon: "success",
      title: `<span class="text-sm md:text-lg font-medium text-gray-800">${product.name} added to cart!</span>`,
      showConfirmButton: false,
      timer: 2000,
      customClass: {
        popup: "w-64 md:w-80 p-4 md:p-6 rounded-lg shadow-lg bg-white",
        title: "text-gray-800",
      },
    });
    addToCart(product);
  };
  

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Loading...</p>
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
                width={553}
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
            <h1 className="text-3xl md:text-[42px] leading-[48px] md:leading-[63px]">{product.name}</h1>
            <p className="text-xl text-[#9F9F9F]">
              Price: ${product.price.toFixed(2)}
            </p>
             <div className="flex gap-3 py-2 items-center">
                     <Image src="/Group88.png" alt="" width={124} height={20} />
                     <div className="border-l border-[#9F9F9F] pl-3">
                       <p className="text-[13px] leading-[19.5px]">5 Customer Review</p>
                     </div>
                    </div> 
                    <p className="text-sm leading-6">
                    Setting the bar as one of the loudest speakers in its class the <br />
                    Kilburn is a compact stout-hearted hero with a well-balanced <br />
                    audio which boasts a clear midrange and extended highs for a <br />
                    sound.
                    </p>     
            {product.discountPercentage > 0 && (
              <p className="text-red-500 mb-4">
                Discount: {product.discountPercentage}%
              </p>
            )}
            <p
              className={`mb-4 ${product.stockLevel > 0 ? "text-green-500" : "text-red-500"}`}
            >
              {product.stockLevel > 0 ? "In Stock" : "Out of Stock"}
            </p>
            <div className="py-6">
        <p className="text-sm text-[#9F9F9F]">Size</p>
        <div className="flex gap-3 mt-2">
          <button className="rounded-md hover:bg-[#FBEBB5] bg-[#e6e6e6f1] w-[30px] h-[30px] text-[13px]">L</button>
          <button className="rounded-md hover:bg-[#FBEBB5] bg-[#e6e6e6f1] w-[30px] h-[30px] text-[13px]">XL</button>
          <button className="rounded-md hover:bg-[#FBEBB5] bg-[#e6e6e6f1] w-[30px] h-[30px] text-[13px]">XS</button>
        </div>
      </div>

      <div className="py-6">
        <p className="text-sm text-[#9F9F9F]">Color</p>
        <div className="flex gap-3 mt-2">
          <button className="rounded-full bg-[#816DFA] w-[30px] h-[30px]"></button>
          <button className="rounded-full bg-black w-[30px] h-[30px]"></button>
          <button className="rounded-full bg-[#CDBA7B] w-[30px] h-[30px]"></button>
        </div>
      </div>
      <div className="flex items-center gap-4">
        
    <button className="flex items-center justify-center border border-black px-10 rounded-2xl w-auto h-[64px] shadow-lg hover:scale-110 transition-transform 
    duration-300 ease-in-out" onClick={(e) => handleAddToCart(e, product)}>
              <p className="text-[20px] leading-[30px]">Add to Cart</p>
            </button> 
          </div>
          <div className="py-10">
         <div className="border-t-2 w-full md:w-[605px]"></div>
        </div>
        <div className="space-y-2">
                   <div className="flex gap-6">
                     <p>SKU</p>
                     <p>:</p>
                     <p>SS001</p>
                   </div>
                   <div className="flex gap-6">
                     <p> Category :{product.category}</p>
                   </div>
                   <div className="flex gap-6">
                    <p>Description : {product.description}</p>
                   </div>
                   <div className="flex gap-6">
                     <p>Tags</p>
                     <p>:</p>
                     <p>Sofa Chair Home Shop</p>
                   </div>
                   <div className="flex pb-20 items-center gap-6">
                     <p>Share</p>
                     <p>:</p>
                     <div className="flex gap-3">
                       <Image src="/FB.png" alt="fb" width={20} height={20} />
                       <Image src="/in.png" alt="linkedin" width={20} height={20} />
                       <Image src="/tw.png" alt="twitter" width={20} height={20} />
                       <Image src="/heart1.png" alt="like" width={25} height={31} />
                     </div>
                   </div>
                 </div>
        </div>  
      </div>
     <div className="border-t-2"></div>
       <Footer />
    </div>
    </div>
  );
};

export default ProductDetail;
