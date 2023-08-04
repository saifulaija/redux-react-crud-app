
import { Link } from 'react-router-dom'; // If using React Router for navigation
import { AiFillHome, AiOutlineBook, AiOutlinePlus } from 'react-icons/ai';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-center space-x-8">
        <Link to="/" className="text-white text-xl">
          <AiFillHome className="inline-block mr-2" />
          Home
        </Link>
        <Link to="/show-books" className="text-white text-xl">
          <AiOutlineBook className="inline-block mr-2" />
          Show Books
        </Link>
        <Link to="/add-book" className="text-white text-xl">
          <AiOutlinePlus className="inline-block mr-2" />
          Add Book
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
