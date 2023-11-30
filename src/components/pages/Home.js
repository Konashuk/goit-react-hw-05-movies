import { getTrendingMovies } from 'components/appi';
import { useEffect, useState } from 'react';
import { MovieList } from '../movieList';
import { Loader } from './loader';

export default function Home() {
  const [movies, setMovies] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const topMovies = async () => {
    try {
      setIsLoading(true);

      const response = await getTrendingMovies();
      setMovies(response.results);
    } catch (error) {
      console.log(error.statusText);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    topMovies();
  }, []);

  return (
    <main>
      <h1>Trending today</h1>

      {isLoading && <Loader />}

      <MovieList movies={movies} />
    </main>
  );
}
