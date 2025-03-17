import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900 text-white p-4 flex justify-between items-center shadow-lg">
      <h1 className="text-2xl font-bold">🚀 CodeZen</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:text-blue-400">Home</Link>
        <Link to="/review" className="hover:text-blue-400">Code Review</Link>
      </div>
    </nav>
  );
};

export default Navbar;
