import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const BookContext = createContext();

export const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: '1984', author: 'George Orwell', id: 1 },
    { title: 'Hopscotch', author: 'Julio Cortazar', id: 2 },
  ]);
  const addBook = (title, author) => {
    setBooks([...books, { title, author, id: uuidv4() }]);
  };
  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };
  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  );
};
