import React, { useState, useEffect } from "react";
import { fetchDramaMovies } from "../../api/api";
import Navbar from "@/src/components/Navbar";
import DetailMovies from "./DetailMovies";
import Image from "next/image";

export default function DramaMovies() {
  const [searchQuery, setSearchQuery] = useState("");
  const [dramaMovies, setDramaMovies] = useState([]);
  const [defaultMovies, setDefaultMovies] = useState([]);
  const [id, setId] = useState<any>();
  const [display, setDisplay] = useState(false);

  const handleSearch = (event: any) => {
    const query = event.target.value;
    setSearchQuery(query);

    if (query.trim() === "") {
      setDramaMovies(defaultMovies);
      return;
    }

    const filteredMovies = defaultMovies.filter((movie: any) => movie.title.toLowerCase().includes(query.toLowerCase()));
    setDramaMovies(filteredMovies);
  };

  const handleCancel = () => {
    setSearchQuery("");
    setDramaMovies(defaultMovies);
  };

  const onDetail = (id: any) => {
    setDisplay(true);
    setId(id);
  };

  useEffect(() => {
    fetchDramaMovies()
      .then((dramaMovies) => {
        setDramaMovies(dramaMovies);
        setDefaultMovies(dramaMovies);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="bg-cover min-h-screen background-drama">
      <Navbar />
      {display && <DetailMovies setDisplay={setDisplay} id={id} data={dramaMovies} />}
      <h1 className="flex justify-center text-4xl text-white pt-4 pb-4">Drama Movies</h1>
      <div className="flex items-center justify-center gap-2">
        <div className="relative w-1/3">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Search by title"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        {searchQuery === "" ? (
          <></>
        ) : (
          <button className="bg-red-500 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-full" onClick={handleCancel}>
            cancel
          </button>
        )}
      </div>
      <div>
        <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 p-5 ">
          {dramaMovies.length > 0 ? (
            dramaMovies.map((movie: any) => (
              <div key={movie.id}>
                <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                  <Image onClick={() => onDetail(movie.id)} src={`${process.env.NEXT_PUBLIC_IMG_PATH}/${movie.poster_path}`} alt={movie.title} width={500} height={750} className="cursor-pointer" />
                  <div className="tes px-4 py-3 w-72">
                    <div className="d-flex h-2 ">
                      <p className="text-xs font-bold text-black block capitalize">{movie.title}</p>
                    </div>
                    <div className="flex items-center pt-4"></div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="min-h-screen">
              <h1 className="text-4xl text-white pt-4 pb-4 ">No film found... </h1>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
