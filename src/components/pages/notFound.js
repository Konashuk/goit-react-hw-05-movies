import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div>
      Sorry your page is not found <Link to="/">link</Link> to Home page
    </div>
  );
}
