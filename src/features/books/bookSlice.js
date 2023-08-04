import { createSlice } from "@reduxjs/toolkit"
import { v4 as uuidv4 } from 'uuid';


const initialBooks={
      books:[
            {id: uuidv4(), title: 'Love Bangladesh', author:'Saiful'},
            {id: uuidv4(), title: 'Hello Bangladesh', author:'Aija'},
            {id: uuidv4(), title: 'Behind The Love', author:'Bipasha'},
            {id: uuidv4(), title: 'Green Life', author:'Atik'},
      ]
}

 export const booksSlice = createSlice({
      name:'books',
      initialState: initialBooks,
      reducers:{
            showBooks:(state)=> state,
            addBooks: (state, action) => {
                  state.books.push(action.payload)
            }, 
            updateBooks: (state, action) => {
                  const {id, title, author} = action.payload
                  const isExistBook = state.books.filter((book)=> book.id === id)
                  if(isExistBook){
                        isExistBook[0].title = title;
                        isExistBook[0].author = author;

                  }
            }, 
            deleteBook:((state, action)=>{
                  const id = action.payload;
                 state.books = state.books.filter(book=> book.id !== id )
            })

      },

})

export const {showBooks, addBooks, deleteBook, updateBooks} = booksSlice.actions
export default booksSlice.reducer