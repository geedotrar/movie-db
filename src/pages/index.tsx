import Navbar from "../components/Navbar";
import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CarouselImage from "../components/Carousel";

export default function Home() {
  return (
    <div>
      <div>
        <CarouselImage />
      </div>
    </div>
  );
}

// ======================================================================================================================
// import React, { useState, useEffect } from "react";
// import { fetchPopularMovies, searchMoviesByTitle } from "../components/MovieList";

// const Home: React.FC = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [movies, setMovies] = useState([]);

//   const handleSearch = async () => {
//     if (searchQuery.trim() === "") return;

//     try {
//       const searchResults = await searchMoviesByTitle(searchQuery);
//       setMovies(searchResults);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     fetchPopularMovies()
//       .then((popularMovies) => {
//         setMovies(popularMovies);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, []);

//   return (
//     <div>
//       <h1>Movie App</h1>
//       <div>
//         <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search by title" />
//         <button onClick={handleSearch}>Search</button>
//       </div>
//       <div>
//         {/* {movies.map((movie: any) => (
//           <div key={movie.id}>
//             <h2>{movie.title}</h2>
//             <p>{movie.overview}</p>
//           </div>
//         ))} */}
//         <section id="Projects" className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 p-5 ">
//           {movies.map((movie: any) => {
//             return (
//               <div key={movie.id}>
//                 <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
//                   <img src={`${process.env.NEXT_PUBLIC_TMDB_IMG_PATH}/${movie.poster_path}`} alt="Popular-Movies" className="cursor-pointer" />
//                   <div className="tes px-4 py-3 w-72">
//                     <div className="d-flex h-2 ">
//                       <p className="text-xs font-bold text-black  block capitalize">{movie.title}</p>
//                     </div>
//                     <div className="flex items-center pt-4"></div>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Home;
