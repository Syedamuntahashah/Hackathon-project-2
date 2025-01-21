import Image from "next/image";
import Footer from "@/components/Footer";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { Product } from "../../types/products";



function ProductsPage() {
  
  return (
    <div>
    <div>
      <div className="bg-[#FBEBB5]">
      <div className="bg-[#FBEBB5] w-full">
      {/* Header Section */}
      <div className="flex justify-between items-center px-4 md:px-16 py-4 max-w-7xl mx-auto">
        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex gap-6">
            <Link href="/" className="font-medium text-[16px] text-black cursor-pointer hover:text-gray-500">Home</Link>
            <Link href="/Shop" className="font-medium text-[16px] text-black cursor-pointer hover:text-gray-500">Shop</Link>
            <li className="font-medium text-[16px] text-black cursor-pointer hover:text-gray-500">About</li>
            <Link href="/Contact" className="font-medium text-[16px] text-black cursor-pointer hover:text-gray-500">Contact</Link>
            </ul>
        </nav>

        {/* Icons Section */}
        <div className="flex items-center gap-4">
          
        <Link href="/MyAccount"> <Image src="/user.png" alt="User" width={24} height={24} className="cursor-pointer hover:opacity-75" /></Link>
          <Image src="/search.png" alt="Search" width={24} height={24} className="cursor-pointer hover:opacity-75" />
          <Image src="/heart.png" alt="Wishlist" width={24} height={24} className="cursor-pointer hover:opacity-75" />
          <Image src="/shoppingcart.png" alt="Cart" width={24} height={24} className="cursor-pointer hover:opacity-75"/>
        </div>
      </div>

      {/* Mobile Navigation Links */}
      <div className="block md:hidden bg-[#FBEBB5]">
        <ul className="flex flex-col gap-4 items-center  py-4">
          <Link href="/" className="font-medium text-[16px] text-black cursor-pointer hover:text-gray-500">Home</Link>
          <Link href="/Shop" className="font-medium text-[16px] text-black cursor-pointer hover:text-gray-500">Shop</Link>
          <li className="font-medium text-[16px] text-black cursor-pointer hover:text-gray-500">About</li>
          <Link href="/Contact" className="font-medium text-[16px] text-black cursor-pointer hover:text-gray-500">Contact</Link>
        </ul>
      </div>
      </div>

      {/* Main Section */}
      <main className="flex flex-col md:flex-row items-center bg-[#FBEBB5] justify-center gap-12 px-8 py-16 max-w-7xl mx-auto">
        <div className="max-w-md text-center md:text-left">
          <h1 className="font-medium text-[40px] sm:text-[48px] md:text-[56px] lg:text-[64px] leading-tight text-black mb-6">
            Rocket Single Seater
          </h1>
          <button className=" text-black underline underline-offset-8 px-3 py-4 rounded-md text-[20px] hover:bg-gray-800">
            Shop Now
          </button>
        </div>

        <Image
          src="/rocket seat.png"
          alt="Rocket Single Seater"
          width={600}
          height={600}
          className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] h-auto"
        />
      </main>
      </div>

      <main className="w-full bg-[#FAF4F4] py-16">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          {/* First Image and Content */}
          <div className="flex flex-col items-start">
            <Image
              src="/table.png"
              alt="Table"
              width={605}
              height={562}
              className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[605px] h-auto"
            />
            <h1 className="mt-6 text-[24px] sm:text-[28px] md:text-[36px] font-medium text-black">
              Side Table
            </h1>
            <button className="mt-2 text-[18px] sm:text-[20px] md:text-[24px] font-medium underline underline-offset-8">
              View More
            </button>
          </div>

          {/* Second Image and Content */}
          <div className="flex flex-col items-start">
            <Image
              src="/sofa.png"
              alt="Sofa"
              width={605}
              height={562}
              className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[605px] h-auto"
            />
            <h1 className="mt-6 text-[24px] sm:text-[28px] md:text-[36px] font-medium text-black">
              Sofa
            </h1>
            <button className="mt-2 text-[18px] sm:text-[20px] md:text-[24px] font-medium underline underline-offset-8">
              View More
            </button>
          </div>
        </div>
      </div>
    </main>
    
    <main className="w-full bg-white py-16">
      {/* Heading Section */}
      <div className="text-center mb-8">
        <h1 className="poppins-regular-400 font-medium text-[28px] sm:text-[36px] leading-[40px] sm:leading-[54px]">
          Top Picks For You
        </h1>
        <p className="poppins-regular-400 font-medium text-[#9F9F9F] text-[16px] leading-6 mt-4 max-w-2xl mx-auto">
          Find a bright ideal to suit your taste with our great selection of suspension floor and table lights.
        </p>
      </div>

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
          <Image src="/planconsole.png" alt="Plain Console" width={287} height={287} className="w-full h-auto" />
          <p className="poppins-regular-400 font-normal text-[16px] leading-6 mt-4 mb-2">
            Plain console with teak mirror
          </p>
          <h1 className="font-medium text-[20px] sm:text-[24px] leading-9">Rs. 25,000.00</h1>
        </div>
      </div>

      {/* Button Section */}
      <div className="flex justify-center mt-12">
        <button className="text-[18px] sm:text-[20px] md:text-[24px] font-medium underline underline-offset-8">
          View More
        </button>
      </div>
    </main>

    <main className="flex flex-col sm:flex-row justify-center items-center w-full h-[639px] bg-[#FFF9E5] py-8 px-4">
      {/* Image Section */}
      <div className="w-full sm:w-[50%] flex justify-center">
        <Image src="/Asgaard sofa.png" alt="Asgaard Sofa" width={983} height={799} className="max-w-full h-auto"/>
      </div>

      {/* Text and Button Section */}
      <div className="w-full sm:w-[50%] text-center sm:text-left mt-8 sm:mt-0 sm:ml-8">
        <p className="poppins-regular-400 font-medium text-[24px] leading-9 text-center sm:text-left">New Arrivals</p>
        <div className="my-4">
          <h1 className="font-bold text-[32px] sm:text-[48px] leading-[48px] sm:leading-[72px]">
            Asgaard Sofa
          </h1>
        </div>
        <div className="flex justify-center sm:justify-start">
          <div className="flex justify-center items-center w-[255px] sm:w-[200px] h-[64px] border-[1px] rounded-sm border-black mt-4 sm:mt-8">
           <Link href="/ProductDetail">
            <button className="text-[20px] sm:text-[24px] leading-[30px]">Order Now</button>
           </Link>
          </div>
        </div>
      </div>
    </main>

    <main className="w-full py-16 bg-white">
      <div className="text-center">
        <h1 className="poppins-regular-400 font-medium text-[36px] leading-[54px]">Our Blogs</h1>
        <p className="font-medium text-[16px] text-[#9F9F9F] leading-6 mt-4">
          Find a bright idea to suit your taste with our great selection.
        </p>
      </div>

      {/* Blog Cards Container */}
      <div className="flex flex-wrap justify-center gap-8 mt-12">
        {/* Card 1 */}
        <div className="w-full sm:w-[300px] bg-white border rounded-lg shadow-md text-center p-6">
          <Image src="/teapad.png" alt="card" width={393} height={393} className="w-full h-auto" />
          <p className="font-normal text-[20px] leading-[30px] mt-4">Going all-in with millennial design</p>
          <div>
           <Link href="/Blogs">
            <button className="font-medium text-[24px] leading-9 underline underline-offset-8 mt-4">
              Read More
            </button>
           </Link> 
          </div>
          <div className="mt-4">
            <Image src="/time.png" alt="" width={223} height={24} />
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-full sm:w-[300px] bg-white border rounded-lg shadow-md text-center p-6">
          <Image src="/laptop.png" alt="card" width={393} height={393} className="w-full h-auto" />
          <p className="font-normal text-[20px] leading-[30px] mt-4">Going all-in with millennial design</p>
          <div>
            <button className="font-medium text-[24px] leading-9 underline underline-offset-8 mt-4">
              Read More
            </button>
          </div>
          <div className="mt-4">
            <Image src="/time.png" alt="" width={223} height={24} />
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-full sm:w-[300px] bg-white border rounded-lg shadow-md text-center p-6">
          <Image src="/lcd.png" alt="card" width={393} height={393} className="w-full h-auto" />
          <p className="font-normal text-[20px] leading-[30px] mt-4">Going all-in with millennial design</p>
          <div>
            <button className="font-medium text-[24px] leading-9 underline underline-offset-8 mt-4">
              Read More
            </button>
          </div>
          <div className="mt-4">
            <Image src="/time.png" alt="" width={223} height={24} />
          </div>
        </div>
      </div>

      {/* View More Button */}
      <div className="flex justify-center my-8">
        <button className="font-medium text-[24px] leading-9 underline underline-offset-8">
          View More
        </button>
      </div>
    </main>

    <main 
  className="w-full h-auto bg-[url('/background.png')] bg-cover bg-center bg-no-repeat py-16 px-4 md:py-20 lg:py-24 relative">
  <div className="text-center">
    <h1 className="font-bold text-[36px] md:text-[48px] lg:text-[60px] leading-[44px] md:leading-[56px] lg:leading-[72px] text-black">
      Our Instagram
    </h1>
    <p className="font-normal text-[18px] md:text-[20px] leading-[28px] md:leading-[30px] text-black mt-4">
      Follow our store on Instagram
    </p>
  </div>

  <div className="flex justify-center items-center mt-8">
    <div className="text-center shadow-md rounded-[50px] w-[223px] h-[64px] bg-white hover:bg-gray-500 transition duration-300">
      <button className="mt-4 font-normal text-[20px] leading-[30px] text-black">
        Follow us
      </button>
    </div>
  </div>
</main>

<div className="my-12 md:my-16 lg:my-20"></div>


</div>
<Footer />
    </div>
  );
}

export default ProductsPage;
