import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import Navbar from "./Navbar";
import Link from "next/link";
import { motion } from "framer-motion";
import Head from "next/head";

const slides = [
  {
    title: "Popular Movies",
    link: "/page/PopularMovies",
    bgClass: "background",
    color: "from-orange-500/80 to-purple-100/80",
  },
  {
    title: "Crime Movies",
    link: "/page/CrimeMovies",
    bgClass: "background-crime",
    color: "from-red-500/80 to-black/80",
  },
  {
    title: "Drama Movies",
    link: "/page/DramaMovies",
    bgClass: "background-drama",
    color: "from-purple-400/80 to-indigo-1000/80",
  },
  {
    title: "Horror Movies",
    link: "/page/HorrorMovies",
    bgClass: "background-horror",
    color: "from-black/80 to-red-700/80",
  },
];

export default function CarouselImage() {
  return (
    <div>
      <Head>
        <title>Stevan Movie&apos;s DB</title>
        <link rel="icon" type="image/png"  href="/popcorn.png" />
      </Head>

      <Carousel
        showStatus={false}
        showIndicators={true}
        showThumbs={false}
        infiniteLoop
        autoPlay
        interval={6000}
        swipeable
      >
        {slides.map((slide, i) => (
          <SlideItem key={i} slide={slide} />
        ))}
      </Carousel>
    </div>
  );
}

function SlideItem({ slide }: { slide: any }) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div>
      <div className={`relative bg-cover min-h-screen ${slide.bgClass}`}>
        <Navbar />

        <div
          className={`absolute inset-0 bg-gradient-to-b ${slide.color} transition duration-500 ${
            isHovering ? "opacity-0" : "opacity-70"
          }`}
        />

        <div className="relative h-screen inset-0 flex flex-col items-center justify-center text-center px-4">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-[0_5px_15px_rgba(0,0,0,0.9)]"
          >
            {slide.title}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-8"
          >
            <Link
              href={slide.link}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              className="px-8 py-3 text-lg font-semibold rounded-full bg-white/90 text-gray-900 shadow-xl hover:bg-white hover:scale-105 transform transition duration-300"
            >
              Explore
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
