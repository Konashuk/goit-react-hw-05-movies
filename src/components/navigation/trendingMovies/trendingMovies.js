import {
  getTrendingMovies,
  moreDetail,
  searchMovie,
} from 'components/Appi/appi';

export const TrendingMovies = () => {
  const topMovies = async () => {
    const response = await getTrendingMovies();
    console.log(response);
  };

  const searchMovi = async () => {
    const response = await searchMovie();
    console.log(response);
  };

  const details = async () => {
    const response = await moreDetail();
    console.log(response);
  };
  return (
    <main>
      <h1>Trending today</h1>
      <ul>
        <li>
          <button onClick={topMovies}>TOP movies</button>
          <button onClick={searchMovi}>Search movies</button>
          <button onClick={details}>More details</button>
        </li>
      </ul>
    </main>
  );
};
