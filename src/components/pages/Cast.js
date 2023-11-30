import { castDetail } from 'components/appi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from './loader';

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCasts] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function clickCast() {
      if (!movieId) {
        return;
      }
      try {
        setIsLoading(true);
        const response = await castDetail(movieId);
        setCasts(response.cast);
      } catch (error) {
        console.log(error.statusText);
      } finally {
        setIsLoading(false);
      }
    }
    clickCast();
  }, [movieId]);

  return (
    <div>
      {isLoading && <Loader />}
      {cast &&
        cast.map(({ name, character, profile_path, id }) => {
          const basePoster = `https://image.tmdb.org/t/p/w200${profile_path}`;
          const defaultImg =
            'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
          return (
            <div
              key={id}
              style={{
                display: 'flex',
              }}
            >
              <img
                src={profile_path ? basePoster : defaultImg}
                alt={name}
                width={200}
              />
              <ul>
                <li>
                  <p>{name}</p>
                  <p>Character: {character}</p>
                </li>
              </ul>
            </div>
          );
        })}
    </div>
  );
}
