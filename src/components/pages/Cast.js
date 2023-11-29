import { castDetail } from 'components/appi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from './loader';

export const Cast = () => {
  const params = useParams();
  const [casts, setCasts] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function clickCast() {
      try {
        setIsLoading(true);
        const response = await castDetail(params.movieId);
        setCasts(response);
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
      {casts.cast.map(({ name, character, profile_path }) => {
        const base = `https://image.tmdb.org/t/p/w200${profile_path}`;
        return (
          <div>
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
