import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export async function fetchPopularMovies() {
  try {
    const response = await axios.get(`${BASE_URL}/movie/popular`, {
      params: {
        api_key: API_KEY,
      },
    });

    return response.data.results;
  } catch (error) {
    throw new Error("Error fetching popular movies");
  }
}

export async function fetchCrimeMovies() {
  try {
    const response = await axios.get(`${BASE_URL}/discover/movie`, {
      params: {
        api_key: API_KEY,
        with_genres: "80",
      },
    });

    return response.data.results;
  } catch (error) {
    throw new Error("Error fetching action movies");
  }
}

export async function fetchHorrorMovies() {
  try {
    const response = await axios.get(`${BASE_URL}/discover/movie`, {
      params: {
        api_key: API_KEY,
        with_genres: "27",
      },
    });

    return response.data.results;
  } catch (error) {
    throw new Error("Error fetching action movies");
  }
}

export async function fetchDramaMovies() {
  try {
    const response = await axios.get(`${BASE_URL}/discover/movie`, {
      params: {
        api_key: API_KEY,
        with_genres: "18",
      },
    });

    return response.data.results;
  } catch (error) {
    throw new Error("Error fetching action movies");
  }
}

export const fetchMovieDetails = async (movieId: string) => {
  const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`);
  return response.data;
};

export const fetchMovieVideos = async (movieId: string) => {
  const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`);
  return response.data.results;
};
