import { Movies } from './pages/Movies';
import { Route, Routes } from 'react-router-dom';
import { MovieDetails } from './pages/MovieDetails';
import { Cast } from './pages/Cast';
import { Reviews } from './pages/Reviews';
import { Home } from './pages/Home';
import { NotFound } from './pages/notFound';
import { Pageloyaut } from './pages/PageLoyaut';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Pageloyaut />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
