'use client';

import AcmeLogo from '@/app/ui/acme-logo';
import styles from './ui/home.module.css';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from './ui/fonts';
import Image from 'next/image';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import './styles.css';

// import required modules

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        <AcmeLogo />
        <div className={styles.shape}></div>
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p
            className={` ${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}
          >
            <strong>Welcome to Acme.</strong> This is the example for the{' '}
            <a href="https://nextjs.org/learn/" className="text-blue-500">
              Next.js Learn Course
            </a>
            , brought to you by Vercel.
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/*el linter te recomienda usar el componente image  y no el elemento img de html */}
          {/* <img src="/hero-desktop.png" alt="Screenshots of the dashboard" /> */}
          {/* la imagen pasa a ocupar 1/3 y el formato pasa a ser webp */}
          <Image
            src="/hero-desktop.png"
            alt="Screenshots of the dashboard"
            width={1000}
            height={760}
            //breakpoints para 768 px
            className="hidden md:block"
          ></Image>

          {/* como tiene lazy load no cargaria las 2 imagenes, la segunda solo la carga cuando lo necesita */}

          <Image
            src="/hero-mobile.png"
            alt="Screenshots of the dashboard"
            width={560}
            height={620}
            //breakpoints para 768 px pero al reves
            className="block md:hidden"
          ></Image>
        </div>
      </div>
      <Swiper
        scrollbar={{ draggable: true }}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        className="mySwiper h-96 w-96 bg-green-400"
        spaceBetween={50}
        slidesPerView={1}
        navigation
        // pagination={{ clickable: true }}

        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </main>
  );
}
