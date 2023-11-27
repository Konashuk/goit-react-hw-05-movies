import { getTrendingMovies, moreDetail } from 'components/Appi/appi';
import { useEffect, useState } from 'react';
import { MovieList } from '../movieList/movieList';

export const TrendingMovies = () => {
  const [movies, setMovies] = useState();
  const [detailMovie, setDetailMovie] = useState();

  const topMovies = async () => {
    try {
      const response = await getTrendingMovies();
      setMovies(response.results);
    } catch (error) {
      console.log(error.statusText);
    }
  };

  useEffect(() => {
    topMovies();
  }, []);

  const onClickMovie = async (event, id) => {
    event.preventDefault();
    try {
      const response = await moreDetail(id);
      console.log(response);
      setDetailMovie(response);
    } catch (error) {
      console.log(error.statusText);
    }
  };

  return (
    <main>
      <h1>Trending today</h1>
      <p>{detailMovie}</p>

      <MovieList movies={movies} onMovieClick={onClickMovie} />
    </main>
  );
};
