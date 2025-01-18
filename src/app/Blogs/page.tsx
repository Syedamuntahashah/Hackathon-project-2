import Header from "@/components/Header";
import Image from "next/image";
function Blogs(){
    return(
        <div>
            <Header />
            <div>
                <div className="w-full h-[316px] bg-[url('/background1.png')] bg-cover bg-center bg-no-repeat py-16 px-4 md:py-20 lg:py-24 relative">
                        <div className="flex justify-center items-center">
                        <Image src="/logo.png" alt="logo" width={77} height={77}/>
                        </div>
                         <div className="flex justify-center items-center">
                         <h1 className="font-medium text-[48px] leading-[72px] text-black">Blog</h1>
                        </div>
                        <div className="flex justify-center items-center">
                         <button className="font-bold text-[16px] leading-6 text-black">Home {'>'}</button>
                        <h1 className="text-[16px] leading-6 text-black">blog</h1>
                    </div>
                 </div>
            </div>
            <div>
                <div className="pt-16 px-12">
                    <Image src="/blog1.png" alt="" width={817} height={500}/>
                </div>
                <div className="flex gap-10 pl-12 py-3">
                    <div className="flex gap-2">
                    <Image src="/admin.png" alt="" width={20} height={20}/>
                    <p className="text-base text-[#9F9F9F]">Admin</p>
                    </div>
                    <div className="flex gap-2">
                        <Image src="/calender.png" alt="" width={20} height={20}/>
                        <p className="text-base text-[#9F9F9F]">14 Oct 2022</p>
                    </div>
                    <div className="flex gap-2">
                        <Image src="/tag.png" alt="" width={20} height={20}/>
                        <p className="text-base text-[#9F9F9F]">Wood</p>
                    </div>
                </div>
            </div>
            <div>
                <h1 className="text-3xl font-medium pl-12 py-3">Going all-in with millennial design</h1>
            </div>
            <div>
                <p className="text-justify text-[15px] leading-[22.5px] text-[#9F9F9F] pl-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et <br /> dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin <br />aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis <br />in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit <br /> ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
            </div>
            <div className="pl-12 py-9">
              <button className="font-medium text-[24px] leading-9 underline underline-offset-8">
                Read More
              </button>
            </div>

            <div>
                <div className="pt-16 px-12">
                    <Image src="/blog2.png" alt="" width={817} height={500}/>
                </div>
                <div className="flex gap-10 pl-12 py-3">
                    <div className="flex gap-2">
                    <Image src="/admin.png" alt="" width={20} height={20}/>
                    <p className="text-base text-[#9F9F9F]">Admin</p>
                    </div>
                    <div className="flex gap-2">
                        <Image src="/calender.png" alt="" width={20} height={20}/>
                        <p className="text-base text-[#9F9F9F]">14 Oct 2022</p>
                    </div>
                    <div className="flex gap-2">
                        <Image src="/tag.png" alt="" width={20} height={20}/>
                        <p className="text-base text-[#9F9F9F]">Wood</p>
                    </div>
                </div>
            </div>
            <div>
                <h1 className="text-3xl font-medium pl-12 py-3">Exploring new ways to decorating</h1>
            </div>
            <div>
                <p className="text-justify text-[15px] leading-[22.5px] text-[#9F9F9F] pl-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et <br />dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin <br /> aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis <br /> in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit <br />ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
            </div>
            <div className="pl-12 py-9">
              <button className="font-medium text-[24px] leading-9 underline underline-offset-8">
                Read More
              </button>
            </div>

            <div>
                <div className="pt-16 px-12">
                    <Image src="/blog3.png" alt="" width={817} height={500}/>
                </div>
                <div className="flex gap-10 pl-12 py-3">
                    <div className="flex gap-2">
                    <Image src="/admin.png" alt="" width={20} height={20}/>
                    <p className="text-base text-[#9F9F9F]">Admin</p>
                    </div>
                    <div className="flex gap-2">
                        <Image src="/calender.png" alt="" width={20} height={20}/>
                        <p className="text-base text-[#9F9F9F]">14 Oct 2022</p>
                    </div>
                    <div className="flex gap-2">
                        <Image src="/tag.png" alt="" width={20} height={20}/>
                        <p className="text-base text-[#9F9F9F]">Wood</p>
                    </div>
                </div>
            </div>
            <div>
                <h1 className="text-3xl font-medium pl-12 py-3">Handmade pieces that took time to make</h1>
            </div>
            <div>
                <p className="text-justify text-[15px] leading-[22.5px] text-[#9F9F9F] pl-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et <br /> dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin <br /> aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis  <br />in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit <br />ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
            </div>
            <div className="pl-12 py-9">
              <button className="font-medium text-[24px] leading-9 underline underline-offset-8">
                Read More
              </button>
            </div>
            <div>
                <input type="text" 
                placeholder=""
                className="flex w-[311px] px-4 py-3 border border-black rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
            </div>

        </div>
    )
}

export default Blogs;