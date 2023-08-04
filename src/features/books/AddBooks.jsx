import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBooks } from "./bookSlice";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

const AddBooks = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const booksLength = useSelector((state) => state.bookReducer.books.length);
  const books = useSelector((state) => state.bookReducer.books);
  const dispatch = useDispatch()
  console.log(booksLength, books.length);
  const navigate = useNavigate()
 

  const handleSubmit = (e) => {
    e.preventDefault();

    const book = { id: uuidv4(), title, author };
    dispatch(addBooks(book))
    if( books.length == booksLength){
      toast.success('Book added successfully')
      navigate('/show-books')
    }
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit} className="max-w-xs mx-auto mt-8">
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter the title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="author"
            className="block text-gray-700 font-bold mb-2"
          >
            Author
          </label>
          <input
            type="text"
            id="author"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter the author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddBooks;
