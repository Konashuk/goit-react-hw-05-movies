export const MovieList = ({ movies, onMovieClick }) => {
  return (
    <ul>
      {movies &&
        movies.map(({ name, id, title }) => (
          <li key={id}>
            <a href="/" onClick={event => onMovieClick(event, id)}>
              {title ? title : name}
            </a>
          </li>
        ))}
    </ul>
  );
};
