import { Navigation } from './navigation/navigation';
import { TrendingMovies } from './navigation/trendingMovies/trendingMovies';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Navigation />
      <TrendingMovies />
    </div>
  );
};
