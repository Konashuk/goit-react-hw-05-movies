import { castDetail } from 'components/appi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from './loader';

export const Cast = () => {
  const params = useParams();
  const [cast, setCasts] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function clickCast() {
      try {
        setIsLoading(true);
        const response = await castDetail(params.movieId);
        console.log(response);
        setCasts(response.cast);
      } catch (error) {
        console.log(error.statusText);
      } finally {
        setIsLoading(false);
      }
    }
    clickCast();
  }, [params]);

  return (
    <div>
      {cast &&
        cast.map(({ name, character, profile_path, id }) => {
          const base = `https://image.tmdb.org/t/p/w200${profile_path}`;
          return (
            <div key={id}>
              {isLoading && <Loader />}
              <img src={base} alt={name} />
              <ul>
                <li>
                  <p>{name}</p>
                </li>
              </ul>
              <p>Character: {character}</p>
            </div>
          );
        })}
    </div>
  );
};
