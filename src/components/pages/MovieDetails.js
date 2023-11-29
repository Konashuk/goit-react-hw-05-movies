import { moreDetail } from 'components/appi';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export const MovieDetails = () => {
  const params = useParams();
  const [movies, setMovies] = useState({});

  useEffect(() => {
    async function getMovies() {
      try {
        const response = await moreDetail(params.movieId);
        setMovies(response);
      } catch (error) {
        console.log(error.statusText);
      }
    }
    getMovies();
  }, [params]);

  const { title, overview, genres, poster_path, vote_average } = movies;
  const base = `https://image.tmdb.org/t/p/w300${poster_path}`;
  const score = Math.round(vote_average * 10);

  return (
    <div>
      {movies && (
        <div>
          <img src={base} alt={title} />
          <h2>{title}</h2>
          <p>User score: {score}% </p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h4>Genres</h4>
          {genres && genres.map(({ name, id }) => <p key={id}>{name}</p>)}
          <p>Aditional information</p>
          <Link to={`/movies/${movies.id}/cast`}>Cast</Link>
          <Link to={`/movies/${movies.id}/reviews`}>Rewiews</Link>
        </div>
      )}
    </div>
  );
};
