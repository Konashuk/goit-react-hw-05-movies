import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div>
      Sorry your page is not found <Link to="/">link</Link> to Home page
    </div>
  );
};
