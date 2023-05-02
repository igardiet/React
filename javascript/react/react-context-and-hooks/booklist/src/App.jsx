import { Navbar } from './components/Navbar';
import { BookContextProvider } from './contexts/BookContext';

export const App = () => {
  return (
    <div className='App'>
      <BookContextProvider>
        <Navbar />
      </BookContextProvider>
    </div>
  );
};
