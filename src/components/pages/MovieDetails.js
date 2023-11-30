import { moreDetail } from 'components/appi';
import { useEffect, useState } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { Loader } from './loader';

export const MovieDetails = () => {
  const params = useParams();
  const [movies, setMovies] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getMovies() {
      try {
        setIsLoading(true);
        const response = await moreDetail(params.movieId);
        setMovies(response);
      } catch (error) {
        console.log(error.statusText);
      } finally {
        setIsLoading(false);
      }
    }
    getMovies();
  }, [params]);

  const { title, overview, genres, poster_path, vote_average } = movies;
  const base = `https://image.tmdb.org/t/p/w300${poster_path}`;
  const score = Math.round(vote_average * 10);

  return (
    <div>
      {isLoading && <Loader />}
      {movies && (
        <div>
          <div
            style={{
              display: 'flex',
            }}
          >
            <img src={base} alt={title} />
            <div
              style={{
                margin: 10,
              }}
            >
              <h2>{title}</h2>
              <p>User score: {score}% </p>
              <h3>Overview</h3>
              <p>{overview}</p>
              <h4>Genres</h4>
              {genres && genres.map(({ name, id }) => <p key={id}>{name}</p>)}
            </div>
          </div>
          <p>Aditional information</p>
          <ul>
            <li>
              <NavLink to="cast">Cast</NavLink>
            </li>
            <li>
              <NavLink to="reviews">Rewiews</NavLink>
            </li>
          </ul>

          <Outlet />
        </div>
      )}
    </div>
  );
};
