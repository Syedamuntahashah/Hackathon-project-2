import { SignedIn, UserButton } from "@clerk/nextjs";
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
            <Link
              href="/"
              className="font-medium text-[16px] text-black cursor-pointer hover:text-gray-500"
            >
              Home
            </Link>
            <Link
              href="/Shop"
              className="font-medium text-[16px] text-black cursor-pointer hover:text-gray-500"
            >
              Shop
            </Link>
            <li className="font-medium text-[16px] text-black cursor-pointer hover:text-gray-500">
              About
            </li>
            <Link
              href="/Contact"
              className="font-medium text-[16px] text-black cursor-pointer hover:text-gray-500"
            >
              Contact
            </Link>
          </ul>
        </nav>

        {/* Icons Section */}
        <div className="flex items-center gap-4">
          <Image
            src="/search.png"
            alt="Search"
            width={24}
            height={24}
            className="cursor-pointer hover:opacity-75"
          />
          <Image
            src="/heart.png"
            alt="Wishlist"
            width={24}
            height={24}
            className="cursor-pointer hover:opacity-75"
          />
          <Link href="/Cart">
            <Image
              src="/shoppingcart.png"
              alt="Cart"
              width={24}
              height={24}
              className="cursor-pointer hover:opacity-75"
            />
          </Link>
          {/* Render UserButton only when signed in */}
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  userButtonOuter: "rounded-full border border-gray-300",
                },
              }}
            />
          </SignedIn>
        </div>
      </div>

      {/* Mobile Navigation Links */}
      <div className="block md:hidden">
        <ul className="flex flex-col gap-4 items-center bg-gray-50 py-4">
          <Link
            href="/"
            className="font-medium text-[16px] text-black cursor-pointer hover:text-gray-500"
          >
            Home
          </Link>
          <Link
            href="/Shop"
            className="font-medium text-[16px] text-black cursor-pointer hover:text-gray-500"
          >
            Shop
          </Link>
          <li className="font-medium text-[16px] text-black cursor-pointer hover:text-gray-500">
            About
          </li>
          <Link
            href="/Contact"
            className="font-medium text-[16px] text-black cursor-pointer hover:text-gray-500"
          >
            Contact
          </Link>
        </ul>
      </div>
    </header>
  );
}

export default Header;

