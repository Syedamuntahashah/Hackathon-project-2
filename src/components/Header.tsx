import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="w-full bg-white shadow-md">
      {/* Main Header Container */}
      <div className="flex justify-between items-center px-4 md:px-16 py-4 max-w-7xl mx-auto">
        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex gap-6">
            <li className="font-medium text-[16px] text-black cursor-pointer hover:text-gray-500">Home</li>
            <li className="font-medium text-[16px] text-black cursor-pointer hover:text-gray-500">Shop</li>
            <li className="font-medium text-[16px] text-black cursor-pointer hover:text-gray-500">About</li>
            <Link href="Contact/" className="font-medium text-[16px] text-black cursor-pointer hover:text-gray-500">Contact</Link>
            
          </ul>
        </nav>

        {/* Icons Section */}
        <div className="flex items-center gap-4">
          <Image src="/user.png" alt="User" width={24} height={24} className="cursor-pointer hover:opacity-75" />
          <Image src="/search.png" alt="Search" width={24} height={24} className="cursor-pointer hover:opacity-75" />
          <Image src="/heart.png" alt="Wishlist" width={24} height={24} className="cursor-pointer hover:opacity-75" />
          <Image src="/shoppingcart.png" alt="Cart" width={24} height={24} className="cursor-pointer hover:opacity-75" />
        </div>
      </div>

      {/* Mobile Navigation Links */}
      <div className="block md:hidden">
        <ul className="flex flex-col gap-4 items-center bg-gray-50 py-4">
          <li className="font-medium text-[16px] text-black cursor-pointer hover:text-gray-500">Home</li>
          <li className="font-medium text-[16px] text-black cursor-pointer hover:text-gray-500">Shop</li>
          <li className="font-medium text-[16px] text-black cursor-pointer hover:text-gray-500">About</li>
          <li className="font-medium text-[16px] text-black cursor-pointer hover:text-gray-500">Contact</li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
