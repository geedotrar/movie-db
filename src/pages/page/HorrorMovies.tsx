import React, { useState, useEffect } from "react";
import { fetchHorrorMovies } from "../../api/api";
import Navbar from "@/src/components/Navbar";
import DetailMovies from "./DetailMovies";

export default function HorrorMovies() {
  const [searchQuery, setSearchQuery] = useState("");
  const [horrorMovies, setHorrorMovies] = useState([]);
  const [defaultMovies, setDefaultMovies] = useState([]);
  const [id, setId] = useState<any>();
  const [display, setDisplay] = useState(false);

  const handleSearch = (event: any) => {
    const query = event.target.value;
    setSearchQuery(query);

    if (query.trim() === "") {
      setHorrorMovies(defaultMovies);
      return;
    }

    const filteredMovies = defaultMovies.filter((movie: any) => movie.title.toLowerCase().includes(query.toLowerCase()));
    setHorrorMovies(filteredMovies);
  };

  const handleCancel = () => {
    setSearchQuery("");
    setHorrorMovies(defaultMovies);
  };

  const onDetail = (id: any) => {
    setDisplay(true);
    setId(id);
  };

  useEffect(() => {
    fetchHorrorMovies()
      .then((horrorMovies) => {
        setHorrorMovies(horrorMovies);
        setDefaultMovies(horrorMovies);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="bg-cover min-h-screen background-horror">
      <Navbar />
      {display && <DetailMovies setDisplay={setDisplay} id={id} data={horrorMovies} />}
      <h1 className="flex justify-center text-4xl text-white pt-4 pb-4">Horror Movies</h1>
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
          {horrorMovies.length > 0 ? (
            horrorMovies.map((movie: any) => (
              <div key={movie.id}>
                <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                  <img onClick={() => onDetail(movie.id)} src={`${process.env.NEXT_PUBLIC_IMG_PATH}/${movie.poster_path}`} alt="Popular-Movies" className="cursor-pointer" />
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
