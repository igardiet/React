import { useFetch } from '../hooks/useFetch';

export const MultipleCustomHooks = () => {
  const { data, isLoading, hasError } = useFetch(
    'https://fakestoreapi.com/products/1'
  );
  // console.log(data, isLoading, hasError);

  // if (isLoading) {
  //   return <h2>Loading...</h2>;
  // }

  return (
    <>
      <h1>Breaking Bad Quotes</h1>
      <hr />

      {isLoading ? (
        <div className='alert alert-info text-center'>Loading...</div>
      ) : (
        <blockquote className='blockquote text-end'>
          <p className='mb-1'>Hello World!</p>
          <footer className='blockquote-footer'>Lucas Modric</footer>
        </blockquote>
      )}
    </>
  );
};
