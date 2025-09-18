import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { fetchMovieDetails, fetchMovieVideos } from "../../api/api";
import LoadingOverlay from "@/src/components/LoadingOverlay";
import Head from "next/head";

const MovieTrailer = () => {
  const router = useRouter();
  const { movieId } = router.query;

  const [movieData, setMovieData] = useState<any>(null);
  const [trailerKey, setTrailerKey] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const closeButton = () => {
    router.back();
  };

  useEffect(() => {
    if (movieId) {
      setLoading(true);

      Promise.all([
        fetchMovieDetails(movieId as string),
        fetchMovieVideos(movieId as string),
      ])
        .then(([details, videos]) => {
          setMovieData(details);

          const trailer = videos.find(
            (video: any) =>
              video.type === "Trailer" && video.site === "YouTube"
          );
          if (trailer) {
            setTrailerKey(trailer.key);
          }
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [movieId]);

  const embedUrl = trailerKey
    ? `https://www.youtube.com/embed/${trailerKey}`
    : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center relative px-4 py-10">
       <Head>
        <title>Stevan Movie&apos;s DB {movieData ? `- ${movieData.title}` : ""}</title>
        <link rel="icon" type="image/png"  href="/popcorn.png" />
      </Head>

      {loading && <LoadingOverlay />}

      <button
        onClick={closeButton}
        className="absolute top-6 right-6 text-white text-4xl font-bold hover:text-red-500 transition"
      >
        ×
      </button>

      {!loading && (
        <div className="w-full max-w-4xl bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden border border-gray-700">
          {movieData && (
            <div className="px-6 pt-6 text-center">
              <h1 className="text-3xl md:text-4xl font-extrabold text-white drop-shadow-md">
                {movieData.title}
              </h1>
              {movieData.tagline && (
                <p className="text-gray-300 italic mt-2">{movieData.tagline}</p>
              )}
            </div>
          )}

          <div className="relative w-full mt-6 pb-[56.25%]">
            {embedUrl ? (
              <iframe
                title="YouTube Trailer"
                src={embedUrl}
                className="absolute top-0 left-0 w-full h-full rounded-b-2xl"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 text-white text-lg">
                Trailer not available
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieTrailer;
