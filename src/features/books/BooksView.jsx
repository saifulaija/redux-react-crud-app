import { useDispatch, useSelector } from "react-redux";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { deleteBook } from "./bookSlice";
import { Link } from "react-router-dom";

const BooksView = () => {
   const books = useSelector((state) => state.bookReducer.books);
   const dispatch = useDispatch()
   const handleDelete=(id)=>{
     dispatch(deleteBook(id))
   }

  return (
   <div className="">
       <div className=" p-10 container mx-auto ">
      <h1 className="text-3xl text-center  font-semibold">List of Books</h1>
      <div className="border-[1px] p-6">
        <table className="table-auto w-full ">
          <thead>
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Author</th>
              <th className="px-4 py-2">Action</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.id}>
                <td className="border px-4 py-2">{book.id}</td>
                <td className="border px-4 py-2">{book.title}</td>
                <td className="border px-4 py-2">{book.author}</td>
                <td className="border px-4 py-2">
                 <Link to='/edit-book' state={{id: book.id, title: book.title, author:book.author}}>
                 <button className="text-blue-500 hover:text-blue-700">
                    <AiFillEdit />
                  </button></Link>
                </td>
                <td className="border px-4 py-2">
                  <button onClick={()=>{handleDelete(id)}} className="text-red-500 hover:text-red-700">
                    <AiFillDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
   </div>
  );
};

export default BooksView;
