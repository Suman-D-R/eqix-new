'use client';

import React from 'react';
import Auth from '../components/Auth';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
function page() {
  const router = useRouter();
  return (
    <div className='w-dvw h-dvh flex items-center m-2 justify-center absolute top-0 left-0 z-50 bg-white'>
      <Image
        onClick={() => router.push('/')}
        src='/images/logo.png'
        alt='logo'
        width={100}
        height={100}
        className='object-cover absolute top-10 left-1/2 -translate-x-1/2'
      />
      <div className='w-full max-w-xl h-full flex items-center justify-center p-10'>
        <Auth authType='register' />
      </div>
    </div>
  );
}

export default page;
