"use client";

import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { getCartItems, removeFromCart, updateCartQuantity } from "../actions/actions";
import { urlFor } from "@/sanity/lib/image";
import { Product } from "../../../types/products";

function Cart() {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const router = useRouter();

  // Load cart items on mount
  useEffect(() => {
    setCartItems(getCartItems());
  }, []);

  // Remove item from cart
  const handleRemove = (id: string) => {
    Swal.fire({
      title:
        '<span class="text-lg md:text-xl font-semibold text-gray-800">Remove this item?</span>',
      html: '<p class="text-sm md:text-base text-gray-600">This action cannot be undone once confirmed!</p>',
      icon: "warning",
      showCancelButton: true,
      buttonsStyling: false,
      confirmButtonText:
        '<span class="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition">Yes, remove it!</span>',
      cancelButtonText:
        '<span class="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition">Cancel</span>',
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(id);
        setCartItems(getCartItems());
        Swal.fire({
          title:
            '<span class="text-lg md:text-xl font-semibold text-gray-800">Item Removed!</span>',
          html: '<p class="text-sm md:text-base text-gray-600">The item has been successfully removed from your cart.</p>',
          icon: "success",
          confirmButtonText:
            '<span class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">Okay</span>',
          buttonsStyling: false,
        });
      }
    });
  };

  // Change quantity and update state
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

  // Calculate the cart total
  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.stockLevel,
      0
    );
  };

  // Proceed to checkout with confirmation
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
        Swal.fire("Success!", "Your order has been successfully processed!", "success");
        router.push("/CheckOut");
        setCartItems([]);
      }
    });
  };

  return (
    <div>
      <Header />

      {/* Hero Section */}
      <div>
        <div className="w-full h-[316px] bg-[url('/background1.png')] bg-cover bg-center bg-no-repeat py-16 px-4 md:py-20 lg:py-24 relative">
          <div className="flex justify-center items-center">
            <Image src="/logo.png" alt="logo" width={77} height={77} />
          </div>
          <div className="flex justify-center items-center">
            {/* Adjusted for mobile: smaller text and tighter line-height */}
            <h1 className="font-medium text-[32px] md:text-[48px] leading-[48px] md:leading-[72px] text-black">
              Cart
            </h1>
          </div>
          <div className="flex justify-center items-center space-x-2">
            <button className="font-bold text-[14px] md:text-[16px] leading-6 text-black">
              Home {'>'}
            </button>
            <h1 className="text-[14px] md:text-[16px] leading-6 text-black">cart</h1>
          </div>
        </div>
      </div>

      {/* Cart Section */}
      <section className="flex flex-col md:flex-row justify-between items-start pt-16 p-4 md:px-16 gap-8">
        {/* Left Section: Cart Items */}
        <div className="w-full md:flex-1 md:max-w-[800px]">
          {/* Table Header */}
          <div className="bg-[#FFF9E5] p-4 md:p-6 mb-6">
            <div className="flex justify-between items-center flex-wrap">
              <div className="flex gap-4 sm:gap-12 md:gap-24 flex-wrap">
                <p className="font-bold text-[14px] md:text-[16px] leading-6">Product</p>
                <p className="font-bold text-[14px] md:text-[16px] leading-6">Price</p>
              </div>
              <div className="flex gap-4 sm:gap-6 md:gap-10 flex-wrap">
                <p className="font-bold text-[14px] md:text-[16px] leading-6">Quantity</p>
                <p className="font-bold text-[14px] md:text-[16px] leading-6">Subtotal</p>
              </div>
            </div>
          </div>

          {/* Cart Items List */}
          <div className="bg-white p-4 md:p-6 shadow-md rounded-md">
            {cartItems.length > 0 ? (
              cartItems.map((item, index) => (
                <div
                  key={item._id}
                  className={`flex items-center gap-4 md:gap-8 flex-wrap ${
                    index !== cartItems.length - 1 ? "border-b border-gray-200 pb-4 mb-4" : ""
                  }`}
                >
                  {/* Product Image */}
                  <div className="bg-[rgb(251,235,181)] rounded-md p-2">
                    {item.image ? (
                      <Image
                        src={urlFor(item.image).url()}
                        alt={item.name}
                        width={100}
                        height={100}
                        className="object-cover"
                      />
                    ) : (
                      <Image
                        src="/placeholder.png"
                        alt={item.name}
                        width={100}
                        height={100}
                        className="object-cover"
                      />
                    )}
                  </div>

                  {/* Product Name */}
                  <p className="font-medium text-[14px] md:text-[16px] text-[#9F9F9F] flex-1">
                    {item.name}
                  </p>

                  {/* Price */}
                  <p className="font-medium text-[14px] md:text-[16px] text-[#9F9F9F]">
                    Rs.{" "}
                    {item.price.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                    })}
                  </p>

                  {/* Quantity Controls */}
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleDecrement(item._id)}
                      className="border border-[#9F9F9F] h-8 w-8 rounded-[5px] flex items-center justify-center text-[14px]"
                    >
                      -
                    </button>
                    <p className="text-[14px] md:text-[16px]">{item.stockLevel}</p>
                    <button
                      onClick={() => handleIncrement(item._id)}
                      className="border border-[#9F9F9F] h-8 w-8 rounded-[5px] flex items-center justify-center text-[14px]"
                    >
                      +
                    </button>
                  </div>

                  {/* Subtotal */}
                  <p className="font-medium text-[14px] md:text-[16px]">
                    Rs.{" "}
                    {(item.price * item.stockLevel).toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                    })}
                  </p>

                  {/* Remove (Delete) Button */}
                  <button onClick={() => handleRemove(item._id)} aria-label="Remove item">
                    <Image src="/bin.png" alt="Delete" width={20} height={20} />
                  </button>
                </div>
              ))
            ) : (
              <p className="text-gray-600 text-center text-lg">
                Your cart is empty. 🛒
              </p>
            )}
          </div>
        </div>

        {/* Right Section: Cart Totals and Checkout */}
        <div className="w-full md:w-[350px] lg:w-[393px] bg-[#FFF9E5] p-4 md:p-8 rounded-md shadow-md">
          <h2 className="text-center font-bold text-[20px] md:text-[24px] leading-[28px] md:leading-[36px] mb-8">
            Cart Totals
          </h2>
          <div className="mt-6">
            <div className="flex justify-between items-center px-4 md:px-8 mb-6">
              <p className="leading-6 font-semibold text-[14px] md:text-[16px]">Subtotal</p>
              <p className="text-[#9F9F9F] text-[14px] md:text-[16px]">
                Rs.{" "}
                {calculateTotal().toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                })}
              </p>
            </div>
            <div className="flex justify-between items-center px-4 md:px-8 mb-6">
              <p className="leading-6 font-semibold text-[14px] md:text-[16px]">Total</p>
              <p className="text-[#B88E2F] text-[14px] md:text-[16px]">
                Rs.{" "}
                {calculateTotal().toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                })}
              </p>
            </div>
            <div className="px-8">
              <button
                onClick={handleProceed}
                className="border border-black rounded-[15px] w-full h-[58px] flex items-center justify-center hover:bg-gray-100 transition"
              >
                <p className="text-[14px] md:text-[16px] font-medium">Check Out</p>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information Section */}
      <main className="w-full bg-[#FAF4F4] py-8 px-4 flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl text-center">
          <div className="flex flex-col items-center">
            <h1 className="font-medium text-[24px] md:text-[28px] leading-[32px] md:leading-[40px] text-black">
              Free Delivery
            </h1>
            <p className="text-[#9F9F9F] mt-2 text-[12px] md:text-[14px]">
              For all orders over $50 consectetur <br /> adipiscing elit.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <h1 className="font-medium text-[24px] md:text-[28px] leading-[32px] md:leading-[40px] text-black">
              90 Days Return
            </h1>
            <p className="text-[#9F9F9F] mt-2 text-[12px] md:text-[14px]">
              If goods have problems <br /> consectetur adipiscing elit.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <h1 className="font-medium text-[24px] md:text-[28px] leading-[32px] md:leading-[40px] text-black">
              Secure Payment
            </h1>
            <p className="text-[#9F9F9F] mt-2 text-[12px] md:text-[14px]">
              100% secure payment <br /> consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Cart;
