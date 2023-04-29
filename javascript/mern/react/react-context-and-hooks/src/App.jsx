import BookList from './components/BookList';
import Navbar from './components/Navbar';

export const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <BookList />
    </div>
  );
};
