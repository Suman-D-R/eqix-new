'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useAppContext } from '../context/AppContext';
import { IconBrandGoogleFilled } from '@tabler/icons-react';

interface AuthFormData {
  email: string;
  password: string;
  name?: string;
}

export default function Auth({
  authType = null,
}: {
  authType?: 'login' | 'register' | null;
}): React.ReactElement {
  const router = useRouter();
  const [formData, setFormData] = useState<AuthFormData>({
    email: '',
    password: '',
    name: '',
  });

  const { setAuth, auth } = useAppContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    // TODO: Implement login logic here
    console.log('Login form submitted:', formData);
  };

  return (
    <div className='w-full h-full flex items-center justify-center  gap-2'>
      {/* <div className='max-w-2xl w-full space-y-8'></div> */}
      <div className='w-full relative h-fit  flex items-center justify-center  gap-2 lg:min-w-3xl min-w-sm rounded-2xl overflow-hidden shadow-sm'>
        <div className='w-full items-center  flex flex-col gap-2 justify-center h-full lg:pb-18 p-6 pb-14 bg-gradient-to-r from-tertiary to-white'>
          <div className='text-2xl font-bold capitalize'>{auth}</div>
          {auth === 'register' ||
            (authType === 'register' && (
              <div className='flex h-full flex-grow flex-col gap-2 w-full'>
                <span>Name</span>
                <input
                  className='w-full h-10 rounded-lg bg-white px-3 shadow-sm'
                  type='text'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  placeholder='Email'
                />
              </div>
            ))}
          <div className='flex h-full flex-grow flex-col gap-2 w-full'>
            <span>Email</span>
            <input
              className='w-full h-10 rounded-lg bg-white px-3 shadow-sm'
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              placeholder='Email'
            />
          </div>
          <div className='flex flex-col gap-2 w-full'>
            <span>Password</span>
            <input
              className='w-full h-10 rounded-lg bg-white px-3 shadow-sm'
              type='password'
              name='password'
              value={formData.password}
              onChange={handleChange}
              placeholder='Password'
            />
          </div>
          <button className='w-full h-10 rounded-lg bg-primary text-white'>
            {authType || auth}
          </button>
          <span className='text-sm text-gray-500'>Or</span>
          <button className='text-primary w-full h-10 rounded-lg border border-primary flex items-center justify-center gap-2'>
            <IconBrandGoogleFilled stroke={2} />
            Continue with Google
          </button>
        </div>
        <div className='w-full  h-full p-4 hidden lg:block '>
          <Image
            src='/images/login-banner.png'
            alt='Login'
            width={1000}
            height={1000}
            className='w-full h-full object-cover'
          />
        </div>

        <div className='text-sm text-gray-500 whitespace-nowrap absolute bottom-4 left-1/2 -translate-x-1/2'>
          {auth === 'login' || authType === 'login'
            ? "Don't have an account? "
            : 'Already have an account? '}
          <button
            className='text-primary'
            onClick={() =>
              authType !== null
                ? router.push(authType === 'register' ? '/login' : '/register')
                : setAuth(auth === 'login' ? 'register' : 'login')
            }
          >
            {auth === 'login' || authType === 'login' ? 'Sign up' : 'Login'}
          </button>
        </div>
      </div>
    </div>
  );
}
