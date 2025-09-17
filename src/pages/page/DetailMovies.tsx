import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { RiYoutubeLine } from "react-icons/ri";

export default function DetailMovies(props: any) {
  const [movieData, setMovieData] = useState<any>(null);

  useEffect(() => {
    const findData = props.data.find((dt: any) => dt.id === props.id);
    setMovieData(findData);
  }, [props.data, props.id]);

  //handling scroll
  useEffect(() => {
    if (props.setDisplay) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  if (!movieData) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black/70 text-white">
        Loading...
      </div>
    );
  }

  const date = new Date(movieData.release_date).toLocaleDateString("en-GB");

  return (
    <div className="fixed inset-0 z-50 flex items-start md:items-center justify-center bg-black/70 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-3xl bg-white/10 backdrop-blur-md border border-gray-700 rounded-2xl shadow-2xl max-h-[90vh] flex flex-col mb-4">
        <button
          onClick={() => props.setDisplay(false)}
          className="absolute top-4 right-4 z-50 flex items-center justify-center w-10 h-10 rounded-full bg-black/50 hover:bg-red-600 text-white text-2xl font-bold transition"
        >
          ×
        </button>

        <div className="px-6 pt-6 pb-4 pr-16 border-b border-gray-600">
          <h3 className="text-2xl md:text-3xl font-extrabold text-white drop-shadow-md break-words">
            {movieData.title}{" "}
            <span className="text-yellow-400 text-lg">⭐ {movieData.vote_average.toFixed(1)}</span>
          </h3>
          <p className="text-gray-300 mt-1">
            Release date: <span className="text-red-400">{date}</span>
          </p>
        </div>

        <div className="flex-1 overflow-y-auto">
          <div className="p-6 flex flex-col md:flex-row gap-6">
            <div className="flex-shrink-0">
              <Image
                src={`${process.env.NEXT_PUBLIC_IMG_PATH}${movieData.poster_path}`}
                alt={movieData.title}
                width={220}
                height={330}
                className="rounded-lg shadow-lg"
              />
            </div>
            <p className="text-gray-200 text-base leading-relaxed text-justify">
              {movieData.overview || "No description available."}
            </p>
          </div>

          <div className="flex justify-center border-t border-gray-600 bg-black/20 p-4">
            <Link
              href={`/page/${movieData.id}`}
              className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-lg flex items-center gap-2 shadow-md hover:shadow-red-500/40 transition duration-200"
            >
              <RiYoutubeLine size={26} />
              WATCH THE TRAILER
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
