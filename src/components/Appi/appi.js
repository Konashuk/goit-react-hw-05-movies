import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '8b0fcd8637356262954f664c1fac30f0';

export const getTrendingMovies = async () => {
  const response = await axios.get('trending/all/day', {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data;
};

export const searchMovie = async () => {
  const response = await axios.get('search/movie', {
    params: {
      api_key: API_KEY,
      query: 'comedy',
    },
  });
  return response.data;
};

export const moreDetail = async () => {
  const response = await axios.get('movie/57243', {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data;
};
