import Link from "next/link";
import React, { useState } from "react";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <h2 className="text-2xl text-white font-bold">
              <Link href="/">Movie DB</Link>
            </h2>

            <div className="md:hidden">
              <button className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border" onClick={() => setNavbar(!navbar)}>
                {navbar ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"}`}>
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="text-white font-bold text-xl hover:text-2xl">
                <Link href="/">
                  <p>Home</p>
                </Link>
              </li>
              <li className="text-white font-bold text-xl hover:text-2xl">
                <div className="dropdown inline-block relative">
                  <button className="hover:bg-gray-400 rounded inline-flex items-center">
                    <span className="mr-1">Genre</span>
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                    </svg>
                  </button>
                  <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
                    <li className="">
                      <Link className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="/page/PopularMovies">
                        Popular
                      </Link>
                    </li>
                    <li className="">
                      <Link className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="/page/CrimeMovies">
                        Crime
                      </Link>
                    </li>
                    <li className="">
                      <Link className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="/page/HorrorMovies">
                        Horror
                      </Link>
                    </li>
                    <li className="">
                      <Link className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="/page/DramaMovies">
                        Drama
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="text-white font-bold text-xl hover:text-2xl">
                <a href="mailto:stevangeoprb@gmail.com">
                  <p>Contact</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
