import { SignedIn, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";

function Header({ cartCount = 0, showCartNotification = false }) {
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
            <div className="relative">
              <Image
                src="/shoppingcart.png"
                alt="Cart"
                width={24}
                height={24}
                className="cursor-pointer hover:opacity-75"
              />
              {/* Display cart count if greater than 0 */}
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartCount}
                </span>
              )}
              {/* Display a brief notification ping */}
              {showCartNotification && (
                <div className="absolute -top-3 -right-3 bg-green-500 rounded-full w-4 h-4 animate-ping"></div>
              )}
            </div>
          </Link>
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

Header.propTypes = {
  cartCount: PropTypes.number,
  showCartNotification: PropTypes.bool,
};

export default Header;

