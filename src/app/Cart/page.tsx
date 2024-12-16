
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
function Cart(){
  return(
        <div>
            <Header />     
        <div>
           <div className="w-full h-[316px] bg-[url('/background1.png')] bg-cover bg-center bg-no-repeat py-16 px-4 md:py-20 lg:py-24 relative">
               <div className="flex justify-center items-center">
                <Image src="/logo.png" alt="logo" width={77} height={77}/>
               </div>
               <div className="flex justify-center items-center">
                <h1 className="font-medium text-[48px] leading-[72px] text-black">Cart</h1>
               </div>
               <div className="flex justify-center items-center">
                   <button className="font-bold text-[16px] leading-6 text-black">Home {'>'}</button>
                   <h1 className="text-[16px] leading-6 text-black">cart</h1>
               </div>
            </div>
           </div>

           <section className="flex flex-col md:flex-row justify-between items-start pt-16 p-4 md:px-16 gap-8">
  {/* Left Section: Header and Product Details */}
  <div className="w-full md:flex-1 md:max-w-[800px]">
    {/* Header Section */}
    <div className="bg-[#FFF9E5] p-4 md:p-6 mb-6">
      <div className="flex justify-between items-center">
        <div className="flex gap-12 md:gap-24">
          <p className="font-bold text-[14px] md:text-[16px] leading-6">Product</p>
          <p className="font-bold text-[14px] md:text-[16px] leading-6">Price</p>
        </div>
        <div className="flex gap-6 md:gap-10">
          <p className="font-bold text-[14px] md:text-[16px] leading-6">Quality</p>
          <p className="font-bold text-[14px] md:text-[16px] leading-6">Subtotal</p>
        </div>
      </div>
    </div>

    {/* Product Details Section */}
    <div className="bg-white p-4 md:p-6 shadow-md rounded-md">
      <div className="flex items-center gap-4 md:gap-8 flex-wrap">
        <div className="bg-[#FBEBB5] rounded-md p-2">
          <Image src="/Asgaard sofa.png" alt="Asgaard sofa" width={100} height={100} />
        </div>
        <p className="font-medium text-[14px] md:text-[16px] text-[#9F9F9F] flex-1">Asgaard sofa</p>
        <p className="font-medium text-[14px] md:text-[16px] text-[#9F9F9F]">Rs. 250,000.00</p>
        <div className="border-[1px] border-[#9F9F9F] h-8 w-8 rounded-[5px] flex items-center justify-center">
          <p>1</p>
        </div>
        <p className="font-medium text-[14px] md:text-[16px]">Rs. 250,000.00</p>
        <Image src="/bin.png" alt="Delete" width={20} height={20} />
      </div>
    </div>
  </div>

  {/* Right Section: Checkout */}
  <div className="w-full md:w-[350px] lg:w-[393px] bg-[#FFF9E5] p-4 md:p-8 rounded-md shadow-md">
    <h2 className="text-center font-bold text-[24px] md:text-[32px] leading-[36px] md:leading-[48px] mb-8">Cart Totals</h2>
    <div className="mt-6">
      <div className="flex justify-between items-center px-4 md:px-8 mb-6">
        <p className="leading-6 font-semibold text-[14px] md:text-[16px]">Subtotal</p>
        <p className="text-[#9F9F9F] text-[14px] md:text-[16px]">Rs. 250,000.00</p>
      </div>
      <div className="flex justify-between items-center px-4 md:px-8 mb-6">
        <p className="leading-6 font-semibold text-[14px] md:text-[16px]">Total</p>
        <p className="text-[#B88E2F] text-[14px] md:text-[16px]">Rs. 250,000.00</p>
      </div>
      <div className="px-8">
       <Link href="/CheckOut">
        <button className="border-[1px] rounded-[15px] border-black w-full h-[58px]">
          <p className="m-3">Check Out</p>
        </button>
        </Link>
      </div>
    </div>
  </div>
</section>

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

export default Cart;