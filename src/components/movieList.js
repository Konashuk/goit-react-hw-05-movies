import { Link, useLocation } from 'react-router-dom';

export const MovieList = ({ movies }) => {
  const lacation = useLocation();
  return (
    <ul>
      {movies &&
        movies.map(({ name, id, title }) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: lacation }}>
              <p>{title ? title : name}</p>
            </Link>
          </li>
        ))}
    </ul>
  );
};
