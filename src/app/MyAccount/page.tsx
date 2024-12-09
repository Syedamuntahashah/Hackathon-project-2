import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";

function MyAccount(){
    return (
     <div>
     <div>
        <Header />
        <div>
        <div className="w-full h-[316px] bg-[url('/background1.png')] bg-cover bg-center bg-no-repeat py-16 px-4 md:py-20 lg:py-24 relative">
               <div className="flex justify-center items-center">
                <Image src="/logo.png" alt="logo" width={77} height={77}/>
               </div>
               <div className="flex justify-center items-center">
                <h1 className="font-medium text-[48px] leading-[72px] text-black">My Account</h1>
               </div>
               <div className="flex justify-center items-center">
                   <button className="font-bold text-[16px] leading-6 text-black">Home {'>'}</button>
                   <h1 className="text-[16px] leading-6 text-black">My Account</h1>
               </div>
            </div>
        </div>
       
       
        <div className="flex flex-col lg:flex-row gap-8 px-4 py-6">
  
  <div className="w-1/2 lg:w-1/2 mb-8 lg:mb-0 px-4 py-6">
    <div className="mb-4">
      <h2 className="font-semibold text-[32px] sm:text-[36px] mb-2">Log In</h2>
      <p className="font-medium text-[16px] sm:text-[18px] leading-6 my-5">Username or email address</p>
      <input
        type="text"
        placeholder="Enter your username or email"
        className="w-full px-4 py-2 border h-auto rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-400"
      />
    </div>

    <div className="mb-4">
      <p className="font-medium text-[16px] sm:text-[18px] mb-2">Password</p>
      <input
        type="password"
        placeholder="Enter your password"
        className="w-full h-auto px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-400"
      />
    </div>

    <div className="flex items-center mb-4">
      <input
        type="checkbox"
        className="w-[20px] h-[20px] border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
      />
      <p className="text-[16px] sm:text-[18px] ml-3">Remember me</p>
    </div>

    <button className="w-full py-3 border-2 border-gray-600 text-gray-600 rounded-md font-medium hover:bg-gray-600 hover:text-white transition">
      Log In
    </button>
    <p className="mt-2 text-center text-[16px] sm:text-[18px]">Forgot password?</p>
  </div>

  
  <div className="w-full lg:w-1/2 px-4 py-6">
    <div className="mb-4">
      <h2 className="font-semibold text-[32px] sm:text-[36px] mb-2">Register</h2>
      <p className="font-medium text-[16px] sm:text-[18px] leading-6 my-5">Email address</p>
      <input
        type="text"
        placeholder="Enter your email"
        className="w-full px-4 py-2 border h-auto rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-400"
      />
    </div>

    <div className="mb-4">
      <p className="font-medium text-[16px] sm:text-[18px] mb-2">A link to set a new password will be sent to your email address.</p>
    </div>

    <div className="mb-4">
      <p className="font-medium text-[16px] sm:text-[18px] mb-2">
        Your personal data will be used to support your experience throughout this website to manage access to your account and for other purposes described in our{" "}
        <b>privacy policy</b>.
      </p>
    </div>

    <button className="w-full py-3 border-2 border-gray-600 text-gray-600 rounded-md font-medium hover:bg-gray-600 hover:text-white transition">
      Register
    </button>
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
 
 
 </div>

 <Footer />
    </div> 
    )
}

export default MyAccount;