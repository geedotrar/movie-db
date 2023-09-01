import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import Navbar from "./Navbar";
import Link from "next/link";

export default function CarouselImage() {
  return (
    <div>
      <Carousel showStatus={false} showIndicators={false} showThumbs={false} infiniteLoop autoPlay interval={5000}>
        <div>
          <div className="bg-cover min-h-screen background">
            <Navbar />
            <div className="h-screen inset-0 flex items-center justify-center text-white">
              <h2 className="text-6xl font-semibold hover:text-7xl">
                <Link href="/page/PopularMovies">Popular Movies</Link>
              </h2>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-cover min-h-screen background-crime">
            <Navbar />
            <div className="h-screen inset-0 flex items-center justify-center text-white">
              <h2 className="text-6xl font-semibold hover:text-7xl">
                <Link href="/page/CrimeMovies">Crime Movies</Link>
              </h2>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-cover min-h-screen background-drama">
            <Navbar />
            <div className="h-screen inset-0 flex items-center justify-center text-white">
              <h2 className="text-6xl font-semibold hover:text-7xl">
                <Link href="/page/DramaMovies">Drama Movies</Link>
              </h2>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-cover min-h-screen background-horror">
            <Navbar />
            <div className="h-screen inset-0 flex items-center justify-center text-white">
              <h2 className="text-6xl font-semibold hover:text-7xl">
                <Link href="/page/HorrorMovies">HorrorMovies</Link>
              </h2>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
