import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../components/Home";
import BooksView from "../features/books/BooksView";
import AddBooks from "../features/books/AddBooks";
import EditBooks from "../features/books/EditBooks";

export const router = createBrowserRouter([
      {
            path:'/',
            element:<Layout></Layout>,
            errorElement:<ErrorPage></ErrorPage>,
            children:[
                  {
                        path:'/',
                        element:<Home></Home>,

                  },
                  {
                        path:'/show-books',
                        element:<BooksView></BooksView>
                  },
                  {
                        path:'/add-book',
                        element:<AddBooks></AddBooks>
                  },
                  {
                        path:'edit-book',
                        element: <EditBooks></EditBooks>
                  }
            ]

      }
])