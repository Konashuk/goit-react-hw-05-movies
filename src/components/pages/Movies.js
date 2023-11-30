import { useState } from 'react';
import { getSearchMovie } from 'components/appi';
import { MovieList } from 'components/movieList';

export const Movies = () => {
  const [movies, setMovies] = useState('');
  const [searchMovies, setSearchMovies] = useState([]);

  const newMovies = async event => {
    event.preventDefault();
    try {
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
        <button type="submit">Search</button>
      </form>
      <MovieList movies={searchMovies} />
    </div>
  );
};
