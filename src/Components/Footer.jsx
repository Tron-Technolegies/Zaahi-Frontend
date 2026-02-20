import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedinIn,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className='rounded-tl-[120px] font-sans text-[#7C7C7C] bg-gradient-to-b from-[#F4F4F4] to-[#FFFFFF]  pt-16 pb-6'>
      <div className=' max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-12'>
        {/* Brand Section */}
        <div className='flex flex-col items-center justify-center h-full text-center'>
          <img src='/Logo/Logo.png' alt='Zahi Designs' className='w-30 mb-4' />
          <p className='text-xs leading-6 text-gray-600 mb-6'>
            Celebrating the timeless beauty of Indian ethnic wear with
            handcrafted collections for the modern woman.
          </p>

          <div className='flex gap-4'>
            <div className='w-9 h-9 flex items-center justify-center rounded-full bg-[#B99295] text-white cursor-pointer'>
              <FaFacebookF size={14} />
            </div>
            <div className='w-9 h-9 flex items-center justify-center rounded-full bg-[#B99295] text-white cursor-pointer'>
              <FaTwitter size={14} />
            </div>
            <div className='w-9 h-9 flex items-center justify-center rounded-full bg-[#B99295] text-white cursor-pointer'>
              <FaInstagram size={14} />
            </div>
            <div className='w-9 h-9 flex items-center justify-center rounded-full bg-[#B99295] text-white cursor-pointer'>
              <FaLinkedinIn size={14} />
            </div>
          </div>
        </div>

        {/* Collections */}
        <div>
          <h3 className='text-2xl "text-[#7C7C7C]" font-semibold mb-4'>
            Collections
          </h3>
          <ul className='space-y-3 text-sm'>
            <li className='hover:text-pink-500 cursor-pointer'>Kurti</li>
            <li className='hover:text-pink-500 cursor-pointer'>Saree</li>
            <li className='hover:text-pink-500 cursor-pointer'>
              Lehenga Choli
            </li>
            <li className='hover:text-pink-500 cursor-pointer'>New Arrivals</li>
            <li className='hover:text-pink-500 cursor-pointer'>Featured</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className='text-2xl font-semibold mb-4'>Services</h3>
          <ul className='space-y-3 text-sm'>
            <li className='hover:text-pink-500 cursor-pointer'>My Account</li>
            <li className='hover:text-pink-500 cursor-pointer'>
              Order Tracking
            </li>
            <li className='hover:text-pink-500 cursor-pointer'>Warranty</li>
            <li className='hover:text-pink-500 cursor-pointer'>
              Returns & Exchanges
            </li>
            <li className='hover:text-pink-500 cursor-pointer'>FAQ</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className='text-2xl font-semibold mb-4'>Contact Us</h3>
          <ul className='space-y-4 text-sm'>
            <li className='flex items-center gap-3'>
              <FaMapMarkerAlt />
              abcd_location
            </li>
            <li className='flex items-center gap-3'>
              <FaPhoneAlt />
              +98 14 741224
            </li>
            <li className='flex items-center gap-3'>
              <FaEnvelope />
              zahi@zahidesign.ae
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className='mt-12 pt-6'>
        <div className='max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4'>
          <div></div>

          <div className='md:col-span-3 border-t-2 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-[#B99295]'>
            <p className='text-[#7C7C7C]'>
              © {new Date().getFullYear()} ZAHIDESIGN. All rights reserved.
            </p>

            <div className='flex gap-6 mt-4 md:mt-0 text-[#7C7C7C]'>
              <span className='hover:text-pink-500 cursor-pointer'>
                Privacy Policy
              </span>
              <span className='hover:text-pink-500 cursor-pointer'>
                Terms of Service
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
