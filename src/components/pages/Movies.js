import { useState } from 'react';
import { getSearchMovie } from 'components/appi';
import { MovieList } from 'components/movieList';
import { useSearchParams } from 'react-router-dom';
import { Loader } from './loader';

export default function Movies() {
  const [params, setParams] = useSearchParams();
  const [searchMovies, setSearchMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const newMovies = async event => {
    event.preventDefault();
    try {
      setIsLoading(true);
      const response = await getSearchMovie(params.get('query'));
      setSearchMovies(response.results);
    } catch (error) {
      console.log(error.statusText);
    } finally {
      setIsLoading(false);
    }
  };

  const getSearchItems = event => {
    setParams({ query: event.target.value });
  };
  return (
    <div
      style={{
        margin: 10,
      }}
    >
      {isLoading && <Loader />}
      <form onSubmit={newMovies}>
        <input type="text" onChange={getSearchItems} />
        <button type="submit">Search</button>
      </form>
      <MovieList movies={searchMovies} />
    </div>
  );
}
