'use client';

import Image from 'next/image';

// TODO: Add services to the database and fetch them here
const services = [
  {
    id: 1,
    name: 'Academics',
    src: '/images/academics.png',
  },
  {
    id: 2,
    name: 'Art & Craft',
    src: '/images/art-and-craft.png',
  },
  {
    id: 3,
    name: 'Consulting',
    src: '/images/consulting.png',
  },
  {
    id: 4,
    name: 'General',
    src: '/images/general.png',
  },
  {
    id: 5,
    name: 'Performing Arts',
    src: '/images/performing-arts.png',
  },
  {
    id: 6,
    name: 'Health & Fitness',
    src: '/images/health-and-fitness.png',
  },
  {
    id: 7,
    name: 'Sports',
    src: '/images/sports.png',
  },
  {
    id: 8,
    name: 'Mental Health',
    src: '/images/mental-health.png',
  },
];

export default function Home() {
  return (
    <>
      <div className="w-full h-dvh max-h-[600px] flex lg:bg-[url('/images/banner-desktop.jpg')] bg-[url('/images/banner-mobile.jpg')] bg-cover bg-center">
        <div className='lg:w-[50%] h-full '></div>
        <div className='lg:w-[50%] w-full h-full py-10 px-4 flex flex-col gap-4 lg:justify-center justify-between  items-center '>
          <div
            className={` text-stone-700 lg:text-4xl  text-3xl font-bold text-center max-w-lg`}
          >
            Empowering all through equal access to resources and opportunities.
          </div>
          <button className='bg-primary text-white  text-xl font-bold text-center rounded-full px-4 py-2'>
            Explore Now
          </button>
        </div>
      </div>
      <div className='w-full h-full flex flex-col gap-4 justify-center items-center p-4 lg:p-8'>
        <div className='text-black text-4xl font-bold text-center max-w-lg'>
          Our Top Services
        </div>
        <div className='flex flex-col h-full gap-4 justify-center items-center w-full'>
          <div className='grid lg:grid-cols-8 md:grid-cols-4 grid-cols-2 gap-6 justify-center items-center'>
            {services.map((service) => (
              <div
                key={service.id}
                className='flex flex-col gap-2 justify-center items-center'
              >
                <Image
                  className='rounded-full'
                  src={service.src}
                  alt={service.name}
                  width={100}
                  height={100}
                />
                <div>{service.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
