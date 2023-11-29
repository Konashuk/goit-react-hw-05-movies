import { Movies } from './pages/Movies';
import { NavLink, Route, Routes } from 'react-router-dom';
import { MovieDetails } from './pages/MovieDetails';
import { Cast } from './pages/Cast';
import { Reviews } from './pages/Reviews';
import { Home } from './pages/Home';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        margin: 12,
        fontSize: 30,
        color: '#010101',
      }}
    >
      <div>
        <header>
          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/movies">Movies</NavLink>
              </li>
            </ul>
          </nav>
        </header>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        <Route path="movies/:movieId/cast" element={<Cast />} />
        <Route path="movies/:movieId/reviews" element={<Reviews />} />
      </Routes>
    </div>
  );
};
