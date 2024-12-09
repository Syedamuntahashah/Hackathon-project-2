import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

function Contact() {
  return (
    <div>
      <Header />

      {/* Banner Section */}
      <div className="w-full h-[316px] bg-[url('/background1.png')] bg-cover bg-center bg-no-repeat py-16 px-4 md:py-20 lg:py-24 relative">
        <div className="flex justify-center items-center">
          <Image src="/logo.png" alt="logo" width={77} height={77} />
        </div>
        <div className="flex justify-center items-center">
          <h1 className="font-medium text-[48px] leading-[72px] text-black">Contact</h1>
        </div>
        <div className="flex justify-center items-center">
          <button className="font-bold text-[16px] leading-6 text-black">Home {'>'}</button>
          <h1 className="text-[16px] leading-6 text-black">Contact</h1>
        </div>
      </div>

      {/* Intro Section */}
      <main className="flex justify-center items-center w-full h-auto bg-white">
        <div className="text-center mb-8">
          <h1 className="poppins-regular-400 font-medium text-[28px] sm:text-[36px] leading-[40px] sm:leading-[54px]">
            Get In Touch With Us
          </h1>
          <p className="poppins-regular-400 font-medium text-[#9F9F9F] text-[16px] leading-6 mt-4 max-w-2xl mx-auto">
            For more information about our product & services, please feel free to drop us an email. Our staff will always be there to help you out. Do not hesitate!
          </p>
        </div>
      </main>

      {/* Contact Details & Form Section */}
      <main className="w-full px-6 py-8 md:px-16 md:py-12">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Left Section */}
          <div className="w-full md:w-1/2 flex flex-col gap-8">
            {/* Address Block */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <Image src="/location.png" alt="Location Icon" width={22} height={28} />
              </div>
              <div>
                <h1 className="font-medium text-[24px] leading-[36px] mb-2">Address</h1>
                <p className="text-[16px] leading-[24px] text-gray-600">
                  236 5th SE Avenue, New York NY 10000, United States
                </p>
              </div>
            </div>

            {/* Phone Block */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <Image src="/phone.png" alt="Phone Icon" width={22} height={28} />
              </div>
              <div>
                <h1 className="font-medium text-[24px] leading-[36px] mb-2">Phone</h1>
                <p className="text-[16px] leading-[24px] text-gray-600">
                  Mobile: +(84) 546-6789 <br />
                  Hotline: +(84) 456-6789
                </p>
              </div>
            </div>

            {/* Working Time Block */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <Image src="/clock.png" alt="Clock Icon" width={22} height={28} />
              </div>
              <div>
                <h1 className="font-medium text-[24px] leading-[36px] mb-2">Working Time</h1>
                <p className="text-[16px] leading-[24px] text-gray-600">
                  Monday-Friday: 9:00 - 22:00 <br />
                  Saturday-Sunday: 9:00 - 21:00
                </p>
              </div>
            </div>
          </div>

          {/* Right Section: Contact Form */}
          <div className="w-full md:w-1/2">
            {/* Name Field */}
            <div className="mb-4">
              <h2 className="font-medium text-lg mb-2">Your Name</h2>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>

            {/* Email Field */}
            <div className="mb-4">
              <h2 className="font-medium text-lg mb-2">Email Address</h2>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>

            {/* Subject Field */}
            <div className="mb-4">
              <h2 className="font-medium text-lg mb-2">Subject</h2>
              <input
                type="text"
                placeholder="Enter the subject"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>

            {/* Message Field */}
            <div className="mb-6">
              <h2 className="font-medium text-lg mb-2">Message</h2>
              <textarea
                placeholder="Enter your message"
                className="w-full px-4 py-2 border rounded-md h-32 resize-none focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>

            {/* Submit Button */}
            <button className="w-[237px] py-2 border-2 border-gray-600 text-gray-600 rounded-md font-medium hover:bg-gray-600 hover:text-white transition">
              Submit
            </button>
          </div>
        </div>
      </main>

      {/* Benefits Section */}
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
  );
}

export default Contact;
