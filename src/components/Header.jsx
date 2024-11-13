"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import DropDownProfile from '../components/dropdown';

const Navbar = () => {
  const [isClick, setIsClick] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  
  const toggleNavbar = () => {  
    setIsClick(!isClick);
  }

  const toggleProfileDropdown = () => {
    setOpenProfile(!openProfile);
  }

  return (
    <>
      <nav className="bg-blue-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className='flex items-center justify-between h-16'>
            <div className='flex items-center'>
              <div className='flex-shrink-0'>
                <Link href="/">
                  <Image
                    src="/images/logo1.png"
                    width={250}
                    height={250}
                    alt="Logo"
                  />
                </Link>
              </div>
            </div>

            <div className='hidden lg:flex space-x-4 items-center'>
              <Link href='/' className='text-white hover:bg-white hover:text-black rounded-lg p-2'>
                Inicio
              </Link>
              <Link href='/informacion' className='text-white hover:bg-white hover:text-black rounded-lg p-2'>
                Sobre nosotros
              </Link>
              <Link href='/contactanos' className='text-white hover:bg-white hover:text-black rounded-lg p-2'>
                Contáctanos
              </Link>
              <Link href="/admin" className='text-white hover:bg-white hover:text-black rounded-lg p-2'>
                  Panel de Admin
              </Link>
                <div className="relative">
                <button 
                  onClick={toggleProfileDropdown} 
                  className="text-white focus:outline-none"
                >
                  <svg
                    className="w-8 h-8 rounded-full border-2 border-white hover:border-gray-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </button>
                {openProfile && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
                    <DropDownProfile />
                  </div>
                )}
              </div>
            </div>

            <div className='lg:hidden flex items-center'>
              <button 
                className='inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                onClick={toggleNavbar}
              >
                {isClick ? (
                  <svg 
                    className='h-6 w-6'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                ) : (
                  <svg 
                    className='h-6 w-6'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M4 6h16M4 12h16m-7 6h7'
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {isClick && (
          <div className='lg:hidden'>
            <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
              <a href='/' className='text-white block hover:bg-white hover:text-black rounded-lg p-2'>
                Inicio
              </a>
              <a href='/' className='text-white block hover:bg-white hover:text-black rounded-lg p-2'>
                Sobre nosotros
              </a>
              <a href='/' className='text-white block hover:bg-white hover:text-black rounded-lg p-2'>
                Contáctanos
              </a>
              <div className="relative">
                <button 
                  onClick={toggleProfileDropdown} 
                  className="text-white focus:outline-none"
                >
                  <svg
                    className="w-8 h-8 rounded-full border-2 border-white hover:border-gray-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </button>
                {openProfile && (
                  <div className="absolute left-2 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
                    <DropDownProfile />
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
