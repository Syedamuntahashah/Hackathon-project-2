import Image from 'next/image';

export default function CartSidebarPage() {
  return (
    <div className="relative">
      {/* Light Overlay */}
      <div className="fixed inset-0 bg-transparent bg-opacity-25 z-10"></div>

      {/* Cart Sidebar */}
      <div className="fixed top-0 right-0 h-[746px] w-80 bg-white shadow-lg z-20">
        <div className="p-6">
          <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
          <div className='border-t-2 py-4'></div>

          {/* Cart Item */}
         <div className='flex gap-4'>
          <div className="mb-6">
            <Image src="/AS.png" alt="Sofa" width={108} height={105} />
            </div>
            <div>
              <p className="text-base font-normal pt-6">Asgaard Sofa</p>
            <div className='flex items-center gap-4'>
              <p>1</p>
              <p>x</p>
              <p className="text-sm text-[#B88E2F]">Rs. 250,000.00</p>
            </div>  
            </div>
            </div>

            <div className='flex gap-5'>
                <p className='text-base'>Subtotal</p>
                <p className='text-base text-[#B88E2F]'>Rs. 250,000.00</p>
            </div>

            <div className='border-b-2 py-40'></div>

          {/* Checkout Button */}
          <div className='flex gap-5 pt-3'>
          <button className="w-full border-[1px] border-black text-black py-2 rounded-[50px] text-base font-medium">
            view cart
          </button>
          <button className="w-full border-[1px] border-black text-black py-2 rounded-[50px] text-base font-medium">
            Checkout
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}

