"use client"
import Header from "@/components/Header"
import Footer from "@/components/Footer";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getCartItems } from "../actions/actions";
import { Product } from "../../../types/products";
import { urlFor } from "@/sanity/lib/image";
import { client } from "@/sanity/lib/client";
import Swal from "sweetalert2";

function CheckOut() {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [discount, setDiscount] = useState<number>(0);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    countryRegion: "",
    streetAddress: "",
    city: "",
    province: "",
    zipCode: "",
    phone: "",
    email: "",
    additionalInformation: "", 
  });

  const [formErrors, setFormErrors] = useState({
    firstName: false,
    lastName: false,
    companyName: false,
    countryRegion: false,
    streetAddress: false,
    city: false,
    province: false, 
    zipCode: false,
    phone: false,
    email: false,
    additionalInformation: false, 
  });

  useEffect(() => {
    setCartItems(getCartItems());
    const appliedDiscount = localStorage.getItem("Discountapplied");
    if (appliedDiscount) {
      setDiscount(Number(appliedDiscount));
    }
  }, []);

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.stockLevel,
    0
  );
  const total = Math.max(subtotal - discount, 0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.id]: e.target.value,
    });
  };

  const validateForm = () => {
    const errors = {
      firstName: !formValues.firstName.trim(),
      lastName: !formValues.lastName.trim(),
      companyName: false,
      countryRegion: !formValues.countryRegion.trim(),
      streetAddress: !formValues.streetAddress.trim(),
      city: !formValues.city.trim(),
      province: !formValues.province.trim(),
      zipCode: false,
      phone: !formValues.phone.trim(),
      email: !formValues.email.trim(),
      additionalInformation: false,
    };
    setFormErrors(errors);
    return Object.values(errors).every((error) => !error);
  };

  const handlePlaceOrder = async () => {
    Swal.fire({
      title: 'Processing your order....',
      text: 'Please wait a moment :)',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Proceed'
    }).then((result) => {
      if (result.isConfirmed) {
        if (validateForm()) {
          localStorage.removeItem('Discountapplied');
          Swal.fire(
            'Success!',
            "Your Order has been successfully Procssed!",
            'success'
          );
        } else {
          Swal.fire(
            'Error!',
            "Please fill in all the fields before Proceeding!",
            'error'
          );
        }
      }
    }
  );
    
    
    if (!validateForm()) {
      return;
    }

    const orderData = {
      _type: 'order',
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      companyName: formValues.companyName,
      countryRegion: formValues.countryRegion,
      streetAddress: formValues.streetAddress,
      city: formValues.city,
      province: formValues.province,
      zipCode: formValues.zipCode,
      phone: formValues.phone,
      email: formValues.email,
      additionalInformation: formValues.additionalInformation,
      cartItems: cartItems.map(item => ({
        _type: 'reference',
        _ref: item._id
      })),
      total: total,
      discount: discount,
      orderDate: new Date().toISOString()
    };
    try {
      await client.create(orderData)
      localStorage.removeItem("Discountapplied")
      console.log('order placed successfully')
    } catch (error) {
      console.error("error creating order" , error)
    }

    
  };

  return (
    <div>
      <Header />
      <div>
        <div className="w-full h-[316px] bg-[url('/background1.png')] bg-cover bg-center bg-no-repeat py-16 px-4 md:py-20 lg:py-24 relative">
          <div className="flex justify-center items-center">
            <Image src="/logo.png" alt="logo" width={77} height={77} /> 
          </div>
          <div className="flex justify-center items-center">
            <h1 className="font-medium text-[48px] leading-[72px] text-black">Checkout</h1>
          </div>
          <div className="flex justify-center items-center">
            <button className="font-bold text-[16px] leading-6 text-black">Home {'>'}</button>
            <h1 className="text-[16px] leading-6 text-black">checkout</h1>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-10">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Billing Details Section (Left Side) */}
            <div className="w-full lg:w-2/3">
              <h1 className="font-semibold text-3xl mb-6">Billing Details</h1>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="font-medium text-base py-2">First Name</label>
                  <input
                    id="firstName"
                    placeholder="Enter Your First Name"
                    value={formValues.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-400"
                  />
                  {formErrors.firstName && (
                    <p className="text-sm text-red-500">
                      First name is required.
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="lastName" className="font-medium text-base py-2">Last Name</label>
                  <input
                    id="lastName"
                    placeholder="Enter Your Last Name"
                    value={formValues.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-400"
                  />
                  {formErrors.lastName && (
                    <p className="text-sm text-red-500">
                      Last name is required.
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-4">
                <label htmlFor="companyName" className="font-medium text-base py-2">Company Name (Optional)</label>
                <input
                  id="companyName"
                  placeholder="Enter Your Company Name"
                  value={formValues.companyName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
              </div>

              <div className="mt-4">
                <label htmlFor="countryRegion" className="font-medium text-base py-2">Country / Region</label>
                <input
                  id="countryRegion"
                  placeholder="Sri Lanka"
                  value={formValues.countryRegion}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
                {formErrors.countryRegion && (
                  <p className="text-sm text-red-500">
                    Country is required.
                  </p>
                )}
              </div>

              <div className="mt-4">
                <label htmlFor="streetAddress" className="font-medium text-base py-2">Street Address</label>
                <input
                  id="streetAddress"
                  placeholder="Enter Your Street Address"
                  value={formValues.streetAddress}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
                {formErrors.streetAddress && (
                  <p className="text-sm text-red-500">
                    Street Address is required.
                  </p>
                )}
              </div>

              <div className="mt-4">
                <label htmlFor="city" className="font-medium text-base py-2">Town / City</label>
                <input
                  id="city"
                  placeholder="Enter Your City Name"
                  value={formValues.city}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
                {formErrors.city && (
                  <p className="text-sm text-red-500">
                    Town/City is required.
                  </p>
                )}
              </div>

              <div className="mt-4">
                <label htmlFor="province" className="font-medium text-base py-2">Province</label>
                <input
                  id="province"
                  placeholder="Western Province"
                  value={formValues.province}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
                {formErrors.province && (
                  <p className="text-sm text-red-500">
                    Province is required.
                  </p>
                )}
              </div>

              <div className="mt-4">
                <label htmlFor="zipCode" className="font-medium text-base py-2">ZIP Code</label>
                <input
                  id="zipCode"
                  placeholder="Enter Your Zip Code"
                  value={formValues.zipCode}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
              </div>

              <div className="mt-4">
                <label htmlFor="phone" className="font-medium text-base py-2">Phone</label>
                <input
                  id="phone"
                  placeholder="Your Phone Number"
                  value={formValues.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
                {formErrors.phone && (
                  <p className="text-sm text-red-500">
                    Phone Number is required.
                  </p>
                )}
              </div>

              <div className="mt-4">
                <label htmlFor="email" className="font-medium text-base py-2">Email Address</label>
                <input
                  id="email"
                  placeholder="Enter Your Email Address"
                  value={formValues.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
                {formErrors.email && (
                  <p className="text-sm text-red-500">
                    Email Address is required.
                  </p>
                )}
              </div>

              <div className="mt-4">
                <label htmlFor="additionalInformation" className="font-medium text-base py-2">Additional Information</label>
                <input
                  id="additionalInformation"
                  placeholder="Additional Information"
                  value={formValues.additionalInformation}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/3 bg-gray-100 px-6 py-6">
              <h2 className="font-semibold text-xl">Order Summary</h2>
              {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div
                  key={item._id}
                  className="flex items-center gap-4 py-3 border-b"
                >
                  <div className="w-16 h-16 rounded overflow-hidden">
                    {item.image && (
                      <Image
                        src={urlFor(item.image).url()}
                        alt={item.name}
                        width={64}
                        height={64}
                        className="object-cover w-full h-full"
                      />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-medium">{item.name}</h3>
                    <p className="text-xs text-gray-500">
                      Quantity: {item.stockLevel}
                    </p>
                  </div>
                  <p className="text-sm font-medium">
                    ${item.price * item.stockLevel}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-500">Your cart is empty.</p>
            )}
              <div>
                <p className="font-medium">Subtotal: ${subtotal}</p>
                <p className="font-medium">Discount: ${discount}</p>
                <p className="font-medium">Total: ${total}</p>
              </div>

              <button
                onClick={handlePlaceOrder}
                className="w-full mt-6 py-3 bg-yellow-600 text-white font-bold text-lg rounded-xl"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CheckOut;
