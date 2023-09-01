import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { fetchMovieDetails, fetchMovieVideos } from "../../api/api";

const MovieTrailer = () => {
  const router = useRouter();
  const { movieId } = router.query;

  const [movieData, setMovieData] = useState<any>(null);
  const [trailerKey, setTrailerKey] = useState<string | null>(null);

  const closeButton = () => {
    router.back();
  };

  useEffect(() => {
    if (movieId) {
      fetchMovieDetails(movieId as string)
        .then((data) => setMovieData(data))
        .catch((error) => console.error("Error fetching movie details:", error));

      fetchMovieVideos(movieId as string)
        .then((videos) => {
          const trailer = videos.find((video: any) => video.type === "Trailer");
          if (trailer) {
            setTrailerKey(trailer.key);
          }
        })
        .catch((error) => console.error("Error fetching movie videos:", error));
    }
  }, [movieId]);

  console.log(trailerKey);

  const embedUrl = `https://www.youtube.com/embed/${trailerKey}`;

  return (
    <div className="min-h-screen bg-gray-500 relative ">
      <div className="max-w-7xl mx-auto md:px-10 px-6 py-20">
        <div className="bg-white relative w-full p-6 rounded max-w-2xl mx-auto ">
          <span onClick={closeButton} className="flex justify-end text-black text-4xl cursor-pointer">
            ×
          </span>
          <div className="video-container mb-5">
            <iframe title="YouTube Video" src={embedUrl} frameBorder="0" allowFullScreen></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieTrailer;
