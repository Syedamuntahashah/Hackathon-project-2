import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
function ProductDetail(){
    return(
        <div>
            <Header />
            <div className="bg-white">
  
  <nav className="px-4 md:px-16 py-6 md:py-10">
    <ul className="flex flex-wrap gap-4 items-center">
      <li className="text-base text-[#9F9F9F]">Home</li>
      <Image src="/arrowleft.png" alt="" width={20} height={20} />
      <li className="text-base text-[#9F9F9F]">Shop</li>
      <Image src="/arrowleft.png" alt="" width={20} height={20} />
      <div className="border-l-2 border-[#9F9F9F] px-4">
        <p className="text-base">Asgaard sofa</p>
      </div>
    </ul>
  </nav>


  <div className="px-4 md:px-16 flex flex-col md:flex-row gap-8">

    <div className="flex-shrink-0">
      <Image
        src="/group102.png"
        alt="asgaard sofa"
        width={553}
        height={500}
        className="w-full max-w-[553px] h-auto"
      />
    </div>

    <div className="flex-1">
      <h1 className="text-3xl md:text-[42px] leading-[48px] md:leading-[63px]">Asgaard sofa</h1>
      <p className="text-xl text-[#9F9F9F]">Rs. 250,000.00</p>

      <div className="flex gap-3 py-2 items-center">
        <Image src="/Group88.png" alt="" width={124} height={20} />
        <div className="border-l border-[#9F9F9F] pl-3">
          <p className="text-[13px] leading-[19.5px]">5 Customer Review</p>
        </div>
      </div>

      <p className="text-sm leading-6">
        Setting the bar as one of the loudest speakers in its class, the <br />
        Kilburn is a compact, stout-hearted hero with a well-balanced <br />
        audio which boasts a clear midrange and extended highs for a <br />
        sound.
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
        <div className="flex items-center gap-5 px-4 border border-[#9F9F9F] rounded-xl h-[64px]">
          <button className="text-base">-</button>
          <button className="text-base">1</button>
          <button className="text-base">+</button>
        </div>

        <div className="p-2">
        <Link href="/Cart">
          <button className="flex items-center justify-center border border-black px-10 rounded-2xl w-auto h-[64px]">
            <p className="text-[20px] leading-[30px]">Add To Cart</p>
          </button>
        </Link> 
        </div>
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
          <p>Category</p>
          <p>:</p>
          <p>Sofas</p>
        </div>
        <div className="flex gap-6">
          <p>Tags</p>
          <p>:</p>
          <p>Sofa, Chair, Home, Shop</p>
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
</div>

<main className="border-t-2">
  {/* Tabs Section */}
  <div className="flex flex-wrap px-4 md:px-16 lg:px-96 py-8 md:py-16 gap-4 md:gap-6">
    <h1 className="text-xl md:text-2xl">Description</h1>
    <h1 className="text-xl md:text-2xl text-[#9F9F9F]">Additional Information</h1>
    <h1 className="text-xl md:text-2xl text-[#9F9F9F]">Reviews [5]</h1>
  </div>

  {/* Text Content */}
  <div className="px-4 md:px-12">
    <div>
      <p className="pb-6 text-base text-justify text-[#9F9F9F]">
        Embodying the raw, wayward spirit of rock 'n' roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
      </p>
    </div>
    <div>
      <p className="text-base text-justify text-[#9F9F9F]">
        Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
      </p>
    </div>
  </div>

  {/* Images Section */}
  <div className="flex flex-col md:flex-row px-4 md:px-12 py-20 gap-8">
    <div className="w-full md:w-1/2">
      <Image
        src="/sofa1.png"
        alt=""
        width={605}
        height={348}
        className="w-full h-auto"
      />
    </div>
    <div className="w-full md:w-1/2">
      <Image
        src="/sofa2.png"
        alt=""
        width={605}
        height={348}
        className="w-full h-auto"
      />
    </div>
  </div>
</main>

<div className="border-t-2">
   <div>
     <h1 className="py-10 text-4xl text-center font-medium">Related Products</h1>
   </div>
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
          <div className="flex justify-center py-20 my-8">
        <button className="font-medium text-[24px] leading-9 underline underline-offset-8">
          View More
        </button>
      </div>
  </div>
     <Footer />
 </div>
    )
}

export default ProductDetail;