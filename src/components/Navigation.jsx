import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav className="fixed top-4 left-4 z-50">
    <Link 
      to="/" 
      className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition-colors"
    >
      Home
    </Link>
  </nav>
);

export default Navigation;