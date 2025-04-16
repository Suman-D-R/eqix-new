'use client';

import React from 'react';
import Link from 'next/link';
import {
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandInstagram,
  IconBrandLinkedin,
} from '@tabler/icons-react';

const footerLinks = [
  {
    title: 'Company',
    links: [
      { href: '/about', label: 'About Us' },
      { href: '/services', label: 'Services' },
      { href: '/contact', label: 'Contact' },
    ],
  },
  {
    title: 'Support',
    links: [
      { href: '/faq', label: 'FAQ' },
      { href: '/privacy', label: 'Privacy Policy' },
      { href: '/terms', label: 'Terms of Service' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { href: '/blog', label: 'Blog' },
      { href: '/help', label: 'Help Center' },
      { href: '/community', label: 'Community' },
    ],
  },
];

const socialLinks = [
  { icon: IconBrandFacebook, href: 'https://facebook.com' },
  { icon: IconBrandTwitter, href: 'https://twitter.com' },
  { icon: IconBrandInstagram, href: 'https://instagram.com' },
  { icon: IconBrandLinkedin, href: 'https://linkedin.com' },
];

export default function Footer(): React.ReactElement {
  return (
    <footer className='bg-white  border-t border-gray-200'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          {/* Logo and description */}
          <div className='col-span-1 md:col-span-1'>
            <Link href='/' className='flex items-center'>
              <img src='/images/logo.png' alt='Logo' className='h-12 w-auto' />
            </Link>
            <p className='mt-4 text-gray-500 text-sm'>
              Empowering all through equal access to resources and
              opportunities.
            </p>
            {/* Social media links */}
            <div className='mt-6 flex space-x-4'>
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-gray-400 hover:text-primary transition-colors'
                  >
                    <Icon className='h-6 w-6' />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer links */}
          {footerLinks.map((section, index) => (
            <div key={index} className='col-span-1'>
              <h3 className='text-sm font-semibold text-gray-900 tracking-wider uppercase'>
                {section.title}
              </h3>
              <ul className='mt-4 space-y-4'>
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className='text-base text-gray-500 hover:text-primary transition-colors'
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className='mt-12 border-t border-gray-200 pt-8'>
          <p className='text-base text-gray-400 text-center'>
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
