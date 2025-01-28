
import Header from "@/components/Header"
import Footer from "@/components/Footer";
import Image from "next/image";
import ProductListing from "../products/page";

function Shop(){
    return (
    <div>
        <Header />
        <div>
            <div className="w-full h-[316px] bg-[url('/background1.png')] bg-cover bg-center bg-no-repeat py-16 px-4 md:py-20 lg:py-24 relative">
               <div className="flex justify-center items-center">
                <Image src="/logo.png" alt="logo" width={77} height={77}/>
               </div>
               <div className="flex justify-center items-center">
                <h1 className="font-medium text-[48px] leading-[72px] text-black">Shop</h1>
               </div>
               <div className="flex justify-center items-center">
                   <button className="font-bold text-[16px] leading-6 text-black">Home {'>'}</button>
                   <h1 className="text-[16px] leading-6 text-black">Shop</h1>
               </div>
            </div>
        </div>
       
    <main className="flex flex-wrap justify-between items-center w-full bg-[#FAF4F4] mt-14 p-4 space-y-4 md:space-y-0">
  {/* Left Section with Icons */}
  <div className="flex flex-wrap items-center gap-4">
    <div>
      <Image src="/unicons.png" alt="icon" width={25} height={25} />
    </div>
    <div>
      <p className="font-normal text-[18px] md:text-[20px] leading-[28px] md:leading-[30px] text-black">
        Filter
      </p>
    </div>
    <div>
      <Image src="/grid.png" alt="icon" width={28} height={28} />
    </div>
    <div>
      <Image src="/vector1.png" alt="icon" width={21} height={19.5} />
    </div>
    <div className="hidden md:block text-black">|</div>
    <div>
      <p className="font-normal text-[14px] md:text-[20px] leading-[22px] md:leading-[30px] text-black">
        Showing 1-16 of 32 results
      </p>
    </div>
  </div>

  {/* Right Section with Filters and Buttons */}
  <div className="flex flex-wrap gap-4 justify-center md:justify-end w-full md:w-auto">
    {/* Show Button */}
    <div className="flex items-center">
      <h1 className="font-normal text-[14px] md:text-[20px] leading-[22px] md:leading-[30px] text-black">
        Show
      </h1>
      <button className="bg-white w-[45px] h-[45px] md:w-[55px] md:h-[55px] text-[#9f9f9f] ml-2 flex items-center justify-center">
        16
      </button>
    </div>

    {/* Sort By Dropdown */}
    <div className="flex items-center">
      <h1 className="font-normal text-[14px] md:text-[20px] leading-[22px] md:leading-[30px] text-black">
        Sort by
      </h1>
      <button className="bg-white w-[150px] h-[45px] md:w-[188px] md:h-[55px] text-[#9f9f9f] ml-2 flex items-center justify-center">
        Default
      </button>
    </div>
  </div>
</main>
<main>
     {/* Product Row Section */}
     <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto px-4">
        {/* Product Card 1 */}
       
        <div className="flex flex-col items-start w-[287px]">
          <Image src="/modularsofa.png" alt="Modular Sofa" width={287} height={287} className="w-full h-auto" />
          <p className="poppins-regular-400 font-normal text-[16px] leading-6 mt-4 mb-2">
            Trenton modular sofa 3
          </p>
          <h1 className="font-medium text-[20px] sm:text-[24px] leading-9">Rs. 25,000.00</h1>
        </div>

        {/* Product Card 2 */}
        <div className="flex flex-col items-start w-[287px]">
          <Image src="/diningtable.png" alt="Dining Table" width={287} height={287} className="w-full h-auto" />
          <p className="poppins-regular-400 font-normal text-[16px] leading-6 mt-4 mb-2">
            Granite dining table with dining chair
          </p>
          <h1 className="font-medium text-[20px] sm:text-[24px] leading-9">Rs. 25,000.00</h1>
        </div>

        {/* Product Card 3 */}
        <div className="flex flex-col items-start w-[287px]">
          <Image src="/bartable.png" alt="Outdoor Bar Table" width={287} height={287} className="w-full h-auto" />
          <p className="poppins-regular-400 font-normal text-[16px] leading-6 mt-4 mb-2">
            Outdoor bar table and stool
          </p>
          <h1 className="font-medium text-[20px] sm:text-[24px] leading-9">Rs. 25,000.00</h1>
        </div>

        {/* Product Card 4 */}
        <div className="flex flex-col items-start w-[287px]">
          <Image src="/planconsole.png" alt="plain console" width={287} height={287} className="w-full h-auto" />
          <p className="poppins-regular-400 font-normal text-[16px] leading-6 mt-4 mb-2">
          Plain console with teak mirror
          </p>
          <h1 className="font-medium text-[20px] sm:text-[24px] leading-9">Rs. 25,000.00</h1>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto px-4">
        {/* Product Card 1 */}
        <div className="flex flex-col items-start w-[287px]">
          <Image src="/coffeetable.png" alt="coffee table" width={287} height={287} className="w-full h-auto" />
          <p className="poppins-regular-400 font-normal text-[16px] leading-6 mt-4 mb-2">
            Grain coffee table
          </p>
          <h1 className="font-medium text-[20px] sm:text-[24px] leading-9">Rs. 25,000.00</h1>
        </div>

        {/* Product Card 2 */}
        <div className="flex flex-col items-start w-[287px]">
          <Image src="/kent.png" alt="kent coffee table" width={287} height={287} className="w-full h-auto" />
          <p className="poppins-regular-400 font-normal text-[16px] leading-6 mt-4 mb-2">
            Kent coffe table
          </p>
          <h1 className="font-medium text-[20px] sm:text-[24px] leading-9">Rs. 25,000.00</h1>
        </div>

        {/* Product Card 3 */}
        <div className="flex flex-col items-start w-[287px]">
          <Image src="/roundtable.png" alt="Round Table" width={287} height={287} className="w-full h-auto" />
          <p className="poppins-regular-400 font-normal text-[16px] leading-6 mt-4 mb-2">
          Round coffee table_color 2
          </p>
          <h1 className="font-medium text-[20px] sm:text-[24px] leading-9">Rs. 25,000.00</h1>
        </div>

        {/* Product Card 4 */}
        <div className="flex flex-col items-start w-[287px]">
          <Image src="/teaktable.png" alt="Plain Console" width={287} height={287} className="w-full h-auto" />
          <p className="poppins-regular-400 font-normal text-[16px] leading-6 mt-4 mb-2">
          Reclaimed teak coffee table
          </p>
          <h1 className="font-medium text-[20px] sm:text-[24px] leading-9">Rs. 25,000.00</h1>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto px-4">
        {/* Product Card 1 */}
        <div className="flex flex-col items-start w-[287px]">
          <Image src="/mask1.png" alt="mask 1" width={287} height={287} className="w-full h-auto" />
          <p className="poppins-regular-400 font-normal text-[16px] leading-6 mt-4 mb-2">
          Plain console_
          </p>
          <h1 className="font-medium text-[20px] sm:text-[24px] leading-9">Rs. 25,000.00</h1>
        </div>

        {/* Product Card 2 */}
        <div className="flex flex-col items-start w-[287px]">
          <Image src="/mask2.png" alt="mask 2" width={287} height={287} className="w-full h-auto" />
          <p className="poppins-regular-400 font-normal text-[16px] leading-6 mt-4 mb-2">
          Reclaimed teak Sideboard
          </p>
          <h1 className="font-medium text-[20px] sm:text-[24px] leading-9">Rs. 25,000.00</h1>
        </div>

        {/* Product Card 3 */}
        <div className="flex flex-col items-start w-[287px]">
          <Image src="/mask3.png" alt="mask3" width={287} height={287} className="w-full h-auto" />
          <p className="poppins-regular-400 font-normal text-[16px] leading-6 mt-4 mb-2">
          SJP_0825 
          </p>
          <h1 className="font-medium text-[20px] sm:text-[24px] leading-9">Rs. 25,000.00</h1>
        </div>

        {/* Product Card 4 */}
        <div className="flex flex-col items-start w-[287px]">
          <Image src="/mask4.png" alt="mask 4" width={287} height={287} className="w-full h-auto" />
          <p className="poppins-regular-400 font-normal text-[16px] leading-6 mt-4 mb-2">
          Bella chair and table
          </p>
          <h1 className="font-medium text-[20px] sm:text-[24px] leading-9">Rs. 25,000.00</h1>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto px-4">
      <ProductListing/>
        {/* Product Card 1 */}
        <div className="flex flex-col items-start w-[287px]">
          <Image src="/mask5.png" alt="mask 5" width={287} height={287} className="w-full h-auto" />
          <p className="poppins-regular-400 font-normal text-[16px] leading-6 mt-4 mb-2">
          Granite square side table
          </p>
          <h1 className="font-medium text-[20px] sm:text-[24px] leading-9">Rs. 25,000.00</h1>
        </div>

        {/* Product Card 2 */}
        <div className="flex flex-col items-start w-[287px]">
          <Image src="/Asgaard sofa.png" alt="mask 6" width={287} height={287} className="w-full h-auto" />
          <p className="poppins-regular-400 font-normal text-[16px] leading-6 mt-4 mb-2">
          Asgaard sofa
          </p>
          <h1 className="font-medium text-[20px] sm:text-[24px] leading-9">Rs. 25,000.00</h1>
        </div>

        {/* Product Card 3 */}
        <div className="flex flex-col items-start w-[287px]">
          <Image src="/mask7.png" alt="mask3" width={287} height={287} className="w-full h-auto" />
          <p className="poppins-regular-400 font-normal text-[16px] leading-6 mt-4 mb-2">
          Maya sofa three seater
          </p>
          <h1 className="font-medium text-[20px] sm:text-[24px] leading-9">Rs. 25,000.00</h1>
        </div>

        {/* Product Card 4 */}
        <div className="flex flex-col items-start w-[287px]">
          <Image src="/mask8.png" alt="mask 8" width={287} height={287} className="w-full h-auto" />
          <p className="poppins-regular-400 font-normal text-[16px] leading-6 mt-4 mb-2">
          Outdoor sofa set
          </p>
          <h1 className="font-medium text-[20px] sm:text-[24px] leading-9">Rs. 25,000.00</h1>
        </div>
      </div>
      <div className="flex justify-center items-center w-full p-4">
    <Image 
    src="/g1.png" 
    alt="Image" 
    width={392} 
    height={60} 
    className="max-w-full h-auto"
  />
</div>
</main>
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

export default Shop;