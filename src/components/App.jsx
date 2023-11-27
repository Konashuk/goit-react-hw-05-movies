import { SearchForm } from './form/form';
import { Navigation } from './navigation/navigation';
import { TrendingMovies } from './trendingMovies/trendingMovies';

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
      <SearchForm />
      <TrendingMovies />
    </div>
  );
};
