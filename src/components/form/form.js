import { useState } from 'react';
import { getSearchMovie } from 'components/Appi/appi';
import { MovieList } from 'components/movieList/movieList';

export const SearchForm = () => {
  const [movies, setMovies] = useState('');

  const [searchMovies, setSearchMovies] = useState([]);

  const newMovies = async event => {
    try {
      event.preventDefault();
      const response = await getSearchMovie(movies);
      console.log(response);
      setSearchMovies(response.results);
    } catch (error) {
      console.log(error.statusText);
    }
  };

  const getSearchItems = event => {
    setMovies(event.target.value);
  };
  return (
    <div>
      <form onSubmit={newMovies}>
        <input type="text" onChange={getSearchItems} />
        <button>Search</button>
      </form>
      <MovieList movies={searchMovies} />
    </div>
  );
};
