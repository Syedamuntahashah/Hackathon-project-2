"use client";

import { Product } from "../../../types/products";
import React, { useEffect, useState } from "react";
import {
  getCartItems,
  removeFromCart,
  updateCartQuantity,
} from "../actions/actions";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Swal from "sweetalert2";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useRouter } from "next/navigation";


const CartPage = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    setCartItems(getCartItems());
  }, []);

  const handleRemove = (id: string) => {
    Swal.fire({
      title: '<span class="text-lg md:text-xl font-semibold text-gray-800">Remove this item?</span>',
      html: '<p class="text-sm md:text-base text-gray-600">This action cannot be undone once confirmed!</p>',
      icon: "warning",
      showCancelButton: true,
      buttonsStyling: false,
      confirmButtonText: '<span class="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition">Yes, remove it!</span>',
      cancelButtonText: '<span class="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition">Cancel</span>',
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(id);
        setCartItems(getCartItems());
        Swal.fire({
          title: '<span class="text-lg md:text-xl font-semibold text-gray-800">Item Removed!</span>',
          html: '<p class="text-sm md:text-base text-gray-600">The item has been successfully removed from your cart.</p>',
          icon: "success",
          confirmButtonText: '<span class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">Okay</span>',
          buttonsStyling: false,
        });
      }
    });
  };
  

  const handleQuantityChange = (id: string, quantity: number) => {
    updateCartQuantity(id, quantity);
    setCartItems(getCartItems());
  };

  const handleIncrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product) {
      handleQuantityChange(id, product.stockLevel + 1);
    }
  };

  const handleDecrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product && product.stockLevel > 1) {
      handleQuantityChange(id, product.stockLevel - 1);
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.stockLevel,
      0
    );
  };

  const router = useRouter()
  const handleProceed = () => {
    Swal.fire({
      title: "Processing your order...",
      text: "Please wait a moment.",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Proceed",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "Success!",
          "Your order has been successfully processed!",
          "success"
        );
        router.push('/CheckOut');
        setCartItems([]);
      }
    });
  };

  return (
    <div>
      <Header/>  
    <div className="p-6 bg-gray-100 min-h-screen">
    <h1 className="text-3xl font-bold mb-8 text-gray-800 text-center md:text-left">
    🛒 Your Shopping Cart
  </h1>

  {cartItems.length > 0 ? (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {cartItems.map((item) => (
        <div
          key={item._id}
          className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all"
        >
          <div className="flex flex-col items-center">
            {item.image && (
              <Image
                src={urlFor(item.image).url()}
                className="w-32 h-32 object-cover rounded-lg"
                alt={item.name}
                width={500}
                height={500}
              />
            )}
            <div className="text-center mt-4">
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <p className="text-gray-500">Price: <span className="font-bold text-green-600">${item.price}</span></p>
            </div>
          </div>

          <div className="flex justify-center items-center mt-4 space-x-4">
            <button
              onClick={() => handleDecrement(item._id)}
              className="px-3 py-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
            >
              ➖
            </button>
            <span className="text-lg font-semibold">{item.stockLevel}</span>
            <button
              onClick={() => handleIncrement(item._id)}
              className="px-3 py-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
            >
              ➕
            </button>
          </div>

          <button
            onClick={() => handleRemove(item._id)}
            className="w-full mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          >
            Remove ❌
          </button>
        </div>
      ))}
    </div>
  ) : (
    <p className="text-gray-600 text-center text-lg">Your cart is empty. 🛒</p>
  )}

  {cartItems.length > 0 && (
    <div className="mt-8 bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Total:</h2>
        <p className="text-xl font-bold text-gray-800">
          ${calculateTotal().toFixed(2)}
        </p>
      </div>
      <button
        onClick={handleProceed}
        className="mt-4 w-full px-4 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
      >
        Proceed to Checkout 🚀
      </button>
    </div>
  )}
</div>
<Footer/>
</div>
 );
};

export default CartPage;