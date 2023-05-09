import { useFetch } from '../hooks/useFetch';

export const MultipleCustomHooks = () => {
  const { data, isLoading, hasError } = useFetch(
    'https://fakestoreapi.com/products/1'
  );

  console.log(data, isLoading, hasError);

  return (
    <>
      <h1>Breaking Bad Quotes</h1>
      <hr />
    </>
  );
};
