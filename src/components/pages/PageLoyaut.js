import { NavLink, Outlet } from 'react-router-dom';

export const Pageloyaut = () => {
  return (
    <div
      style={{
        margin: 20,
        padding: 0,
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f4f4f4',
      }}
    >
      <header
        style={{
          background: '#333',
          padding: '10px',
          color: '#fff',
        }}
      >
        <nav>
          <ul
            style={{
              listStyle: 'none',
              margin: 0,
              padding: 0,
            }}
          >
            <li
              style={{
                display: 'inline',
                marginRight: '20px',
              }}
            >
              <NavLink
                to="/"
                style={{
                  textDecoration: 'none',
                  color: '#fff',
                  fontSize: '18px',
                }}
              >
                Home
              </NavLink>
            </li>
            <li
              style={{
                display: 'inline',
                marginRight: '20px',
              }}
            >
              <NavLink
                to="/movies"
                style={{
                  textDecoration: 'none',
                  color: '#fff',
                  fontSize: '18px',
                }}
              >
                Movies
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
};
