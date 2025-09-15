import Link from "next/link";
import React, { useState } from "react";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);

  const genres = [
    { name: "Popular", href: "/page/PopularMovies" },
    { name: "Crime", href: "/page/CrimeMovies" },
    { name: "Horror", href: "/page/HorrorMovies" },
    { name: "Drama", href: "/page/DramaMovies" },
  ];

  return (
    <div className="sticky top-0 z-50">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <h2 className="text-2xl text-white font-extrabold tracking-wide hover:scale-105 transition-transform duration-300">
              <Link href="/">Movie DB</Link>
            </h2>

            <div className="md:hidden">
              <button
                className="p-2 rounded-md outline-none border border-gray-500 hover:border-[#64ffda] transition"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-6 mt-6 md:block md:pb-0 md:mt-0 transition-all duration-500 ease-in-out ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-6 md:flex md:space-x-10 md:space-y-0">
              <li className="text-white font-bold text-lg relative group cursor-pointer">
                <Link href="/">
                  <p className="transition-colors duration-300 group-hover:text-[#64ffda]">
                    Home
                  </p>
                </Link>
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#64ffda] group-hover:w-full transition-all duration-300"></span>
              </li>

              <li className="text-white font-bold text-lg relative">
                <button
                  className="rounded-lg px-3 py-1 flex items-center hover:text-[#64ffda] transition duration-300"
                  onClick={() => setOpenDropdown(!openDropdown)}
                >
                  <span className="mr-1">Genre</span>
                  <svg
                    className={`fill-current h-4 w-4 transition-transform duration-300 ${
                      openDropdown ? "rotate-180" : ""
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </button>

                {openDropdown && (
                  <ul className="absolute left-0 mt-2 w-40 shadow-lg rounded-lg overflow-hidden bg-opacity-10 backdrop-blur-md">
                    {genres.map((item, i) => (
                      <li key={i}>
                        <Link
                          className="block px-4 py-2 text-sm text-gray-200 hover:text-[#64ffda] transition"
                          href={item.href}
                          onClick={() => setOpenDropdown(false)}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              <li className="text-white font-bold text-lg relative group cursor-pointer">
                <a href="mailto:stevangeoprb@gmail.com">
                  <p className="transition-colors duration-300 group-hover:text-[#64ffda]">
                    Contact
                  </p>
                </a>
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#64ffda] group-hover:w-full transition-all duration-300"></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
