import React, { useState, useEffect } from "react";
import { fetchCrimeMovies } from "../../api/api";
import Navbar from "../../components/Navbar";
import DetailMovies from "./DetailMovies";
import Image from "next/image";
import Head from "next/head";

function getImageUrl(path: string | null, size = "w500") {
  if (!path) return "/fallback.jpg";
  return `https://image.tmdb.org/t/p/${size}${path}`;
}

export default function CrimeMovies() {
  const [searchQuery, setSearchQuery] = useState("");
  const [crimeMovies, setCrimeMovies] = useState<any[]>([]);
  const [defaultMovies, setDefaultMovies] = useState<any[]>([]);
  const [id, setId] = useState<any>();
  const [display, setDisplay] = useState(false);

  const handleSearch = (event: any) => {
    const query = event.target.value;
    setSearchQuery(query);

    if (query.trim() === "") {
      setCrimeMovies(defaultMovies);
      return;
    }

    const filteredMovies = defaultMovies.filter((movie: any) =>
      movie.title.toLowerCase().includes(query.toLowerCase())
    );
    setCrimeMovies(filteredMovies);
  };

  const handleCancel = () => {
    setSearchQuery("");
    setCrimeMovies(defaultMovies);
  };

  const onDetail = (id: any) => {
    setDisplay(true);
    setId(id);
  };

  useEffect(() => {
    fetchCrimeMovies()
      .then((crimeMovies) => {
        setCrimeMovies(crimeMovies);
        setDefaultMovies(crimeMovies);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="bg-cover min-h-screen background-crime">
      <Head>
        <title>Stevan Movie&apos;s DB - Crime</title>
        <link rel="icon" href="/popcorn.png" />
      </Head>

      <Navbar />
      {display && <DetailMovies setDisplay={setDisplay} id={id} data={crimeMovies} />}

      <h1 className="flex justify-center text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg pt-6 pb-6">
        Crime Movies
      </h1>

      <div className="flex items-center justify-center gap-2">
        <div className="relative w-2/3 md:w-1/3">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            placeholder="🔍 Search crime movies..."
            className="w-full px-4 py-2 rounded-full border border-gray-400 bg-white/80 text-gray-900 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none shadow-md"
          />
        </div>
        {searchQuery !== "" && (
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded-full shadow-lg transition"
            onClick={handleCancel}
          >
            Cancel
          </button>
        )}
      </div>

      <section className="w-fit mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-y-16 gap-x-10 mt-12 p-6">
        {crimeMovies.length > 0 ? (
          crimeMovies.map((movie: any) => (
            <div
              key={movie.id}
              className="group relative w-72 bg-white/90 backdrop-blur-sm shadow-xl rounded-2xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <Image
                onClick={() => onDetail(movie.id)}
                src={getImageUrl(movie.poster_path)}
                alt={movie.title}
                width={500}
                height={750}
                className="cursor-pointer object-cover h-[400px] w-full"
              />

              <div className="p-4">
                <h2 className="text-lg font-bold text-gray-900 truncate group-hover:text-blue-600 transition">
                  {movie.title}
                </h2>
                <div className="flex items-center justify-between mt-2">
                  <p className="text-sm text-gray-600">
                    ⭐ {movie.vote_average?.toFixed(1) || "N/A"}
                  </p>
                  <p className="text-xs text-gray-500">
                    {movie.release_date
                      ? new Date(movie.release_date).getFullYear()
                      : "Unknown"}
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="min-h-screen">
            <h1 className="text-3xl text-white text-center pt-10">
              No crime movies found
            </h1>
          </div>
        )}
      </section>
    </div>
  );
}
