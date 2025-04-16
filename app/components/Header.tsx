'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Modal from './Modal';
import Auth from './Auth';

import { useAppContext } from '../context/AppContext';
interface NavLink {
  href: string;
  label: string;
}

const navLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
];

export default function Header(): React.ReactElement {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { auth, setAuth } = useAppContext();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Modal isOpen={auth !== null} onClose={() => setAuth(null)}>
        <Auth />
      </Modal>
      <header
        className='sticky top-0 left-0 right-0 z-10 bg-white/50 backdrop-blur-sm'
        ref={menuRef}
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center h-16'>
            <div className='flex-shrink-0'>
              <Link href='/' className='flex items-center'>
                <Image
                  src='/images/logo.png'
                  alt='Logo'
                  width={100}
                  height={100}
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className='hidden md:flex space-x-8'>
              {navLinks.map((link: NavLink) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className='text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md font-medium relative group'
                >
                  {link.label}
                  <span className='absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full -translate-x-1/2'></span>
                </Link>
              ))}
            </nav>

            {/* login / register */}
            <div className='flex items-center gap-2'>
              <div className='flex items-center gap-2'>
                <button
                  onClick={() => {
                    setAuth('login');
                  }}
                  className='text-primary border border-primary hover:border-secondary rounded-full hover:text-secondary px-4 py-2 text-sm lg:text-base font-medium'
                >
                  Login
                </button>
                <button
                  onClick={() => setAuth('register')}
                  className='text-white bg-primary hover:bg-secondary border-primary hover:border-secondary rounded-full hover:text-white px-4 py-2 text-sm lg:text-base font-medium'
                >
                  Register
                </button>
              </div>

              {/* Mobile menu button */}
              <div className='md:hidden'>
                <button
                  onClick={toggleMenu}
                  className='inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-inset focus:ring-gray-500'
                  aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                >
                  {!isMenuOpen ? (
                    <svg
                      className='block h-6 w-6'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M4 6h16M4 12h16M4 18h16'
                      />
                    </svg>
                  ) : (
                    <svg
                      className='block h-6 w-6'
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
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className='md:hidden bg-white'>
            <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
              {navLinks.map((link: NavLink) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  );
}
