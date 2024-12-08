function Footer() {
    return (
      <footer className="bg-white w-full py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 border-b border-gray-300 pb-8">
          {/* Address Section */}
          <div className="text-[#9F9F9F]">
            <p className="poppins-regular-400 font-normal text-[16px] leading-6">
              400 University Drive Suite 200 Coral Gables FL 33134 USA
            </p>
          </div>
  
          {/* Links Section */}
          <div>
            <h1 className="font-medium text-[16px] leading-6 text-[#9F9F9F] mb-4">Links</h1>
            <ul className="space-y-2">
              <li className="font-medium text-[16px] leading-6 cursor-pointer">Home</li>
              <li className="font-medium text-[16px] leading-6 cursor-pointer">Shop</li>
              <li className="font-medium text-[16px] leading-6 cursor-pointer">About</li>
              <li className="font-medium text-[16px] leading-6 cursor-pointer">Contact</li>
            </ul>
          </div>
  
          {/* Help Section */}
          <div>
            <h1 className="font-medium text-[16px] leading-6 text-[#9F9F9F] mb-4">Help</h1>
            <ul className="space-y-2">
              <li className="font-medium text-[16px] leading-6 cursor-pointer">Payments Options</li>
              <li className="font-medium text-[16px] leading-6 cursor-pointer">Returns</li>
              <li className="font-medium text-[16px] leading-6 cursor-pointer">Privacy Policy</li>
            </ul>
          </div>
  
          {/* Newsletter Section */}
          <div>
            <h1 className="font-medium text-[16px] leading-6 text-[#9F9F9F] mb-4">Newsletter</h1>
            <p className="text-[#9F9F9F] underline mb-4 cursor-pointer">Enter Your Email Address</p>
            <button className="text-black underline">SUBSCRIBE</button>
          </div>
        </div>
  
        {/* Bottom Section */}
        <div className="text-center mt-8">
          <p className="text-[16px] text-[#9F9F9F]">2022 Meubel House. All rights reserved</p>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  