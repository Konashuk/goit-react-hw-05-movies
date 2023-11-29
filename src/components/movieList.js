import { Link } from 'react-router-dom';

export const MovieList = ({ movies }) => {
  return (
    <ul>
      {movies &&
        movies.map(({ name, id, title }) => (
          <li key={id}>
            <Link to={`/movies/${id}`}>
              <p>{title ? title : name}</p>
            </Link>
          </li>
        ))}
    </ul>
  );
};
