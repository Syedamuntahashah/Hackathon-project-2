import Header from "@/components/Header"
import Footer from "@/components/Footer";
import Image from "next/image";

function CheckOut(){
    return(
        <div>
            <Header />
            <div>
                <div className="w-full h-[316px] bg-[url('/background1.png')] bg-cover bg-center bg-no-repeat py-16 px-4 md:py-20 lg:py-24 relative">
                 <div className="flex justify-center items-center">
                  <Image src="/logo.png" alt="logo" width={77} height={77}/>
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
          <p className="font-medium text-base py-2">First Name</p>
          <input type="text" className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-400" />
        </div>
        <div>
          <p className="font-medium text-base py-2">Last Name</p>
          <input type="text" className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-400" />
        </div>
      </div>

      <div className="mt-4">
        <p className="font-medium text-base py-2">Company Name (Optional)</p>
        <input type="text" className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-400" />
      </div>

      <div className="mt-4">
        <p className="font-medium text-base py-2">Country / Region</p>
        <input type="text" placeholder="Sri Lanka" className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-400" />
      </div>

      <div className="mt-4">
        <p className="font-medium text-base py-2">Street Address</p>
        <input type="text" className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-400" />
      </div>

      <div className="mt-4">
        <p className="font-medium text-base py-2">Town / City</p>
        <input type="text" className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-400" />
      </div>

      <div className="mt-4">
        <p className="font-medium text-base py-2">Province</p>
        <input type="text" placeholder="Western Province" className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-400" />
      </div>

      <div className="mt-4">
        <p className="font-medium text-base py-2">ZIP Code</p>
        <input type="text" className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-400" />
      </div>

      <div className="mt-4">
        <p className="font-medium text-base py-2">Phone</p>
        <input type="text" className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-400" />
      </div>

      <div className="mt-4">
        <p className="font-medium text-base py-2">Email Address</p>
        <input type="text" className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-400" />
      </div>

      <div className="mt-4">
        <p className="font-medium text-base py-2">Additional Information</p>
        <input type="text" className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-400" />
      </div>
    </div>

    {/* Products Section (Right Side) */}
    <div className="w-full lg:w-1/3">
     <div className="flex justify-between">
      <h1 className="font-semibold text-3xl mb-6">Product</h1>
      <h1 className="font-semibold text-3xl mb-6">Subtotal</h1>
      </div>
      <div className="border-b pb-4 mb-4">
        <div className="flex justify-between py-2">
          <p className="text-base text-gray-500">Asgaard Sofa</p>
          <p className="text-base">Rs. 250,000.00</p>
        </div>
      </div>

      <div className="flex justify-between py-2">
        <p className="font-medium text-base">Subtotal</p>
        <p className="font-medium text-base">Rs. 250,000.00</p>
      </div>

      <div className="flex justify-between py-2 mb-6">
        <h1 className="text-xl font-bold">Total</h1>
        <h1 className="text-xl font-bold text-yellow-600">Rs. 250,000.00</h1>
      </div>

{/* Payment Options Section */}
<div className="border-t py-6 border-gray-300 mb-6">
        <ul className="list-disc pl-5 mb-4">
          <li className="font-medium">Direct Bank Transfer</li>
        </ul>
        <p className="text-base text-justify text-gray-500 mb-4">
          Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
        </p>
        <ul className="list-disc pl-5">
          <li className="font-medium">Direct Bank Transfer</li>
          <li className="font-medium">Cash On Delivery</li>
        </ul>
      </div>

      {/* Privacy Policy Section */}
      <div className="mb-6">
        <p className="text-base text-justify">
          Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <b>privacy policy</b>.
        </p>
      </div>

      <button className="w-full py-3 bg-yellow-500 text-white font-bold text-lg rounded-xl hover:bg-yellow-600 transition duration-300">
        Place Order
      </button>
    </div>
  </div>
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

    <Footer />
</div>
    )
}

export default CheckOut;