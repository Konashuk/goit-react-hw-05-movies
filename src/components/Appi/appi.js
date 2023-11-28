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

export const getSearchMovie = async value => {
  const response = await axios.get('search/movie', {
    params: {
      api_key: API_KEY,
      query: value,
    },
  });
  return response.data;
};

export const moreDetail = async id => {
  const response = await axios.get(`movie/${id}`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data;
};

export const castDetail = async id => {
  const response = await axios.get(`movie/${id}/credits`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data;
};

export const reviewsDetail = async id => {
  const response = await axios.get(`movie/${id}/reviews`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data;
};
