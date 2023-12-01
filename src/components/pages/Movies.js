import { useEffect, useState } from 'react';
import { getSearchMovie } from 'components/appi';
import { MovieList } from 'components/movieList';
import { useSearchParams } from 'react-router-dom';
import { Loader } from './loader';

export default function Movies() {
  const [params, setParams] = useSearchParams();
  const [searchMovies, setSearchMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getSearchMovie(params.get('query'));
        setSearchMovies(response.results);
      } catch (error) {
        console.log(error.statusText);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [params]);

  const getSearchItems = event => {
    event.preventDefault();
    const inputValue = event.target.elements.query.value;
    setParams({ query: inputValue });
  };
  return (
    <div
      style={{
        margin: 10,
      }}
    >
      <form onSubmit={getSearchItems}>
        <input type="text" name="query" />
        <button>Search</button>
      </form>

      <MovieList movies={searchMovies} />
      {isLoading && <Loader />}
    </div>
  );
}
