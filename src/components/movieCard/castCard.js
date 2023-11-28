export const CastCard = ({ casts }) => {
  return (
    <div>
      {casts.cast.map(({ name, character, profile_path }) => {
        const base = `https://image.tmdb.org/t/p/w200${profile_path}`;
        return (
          <div>
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
