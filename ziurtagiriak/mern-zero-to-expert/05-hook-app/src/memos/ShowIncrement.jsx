export const ShowIncrement = ({ increment }) => {
  return (
    <button
      className='btn btn-danger'
      onClick={() => {
        increment(5);
      }}
    >
      Increment
    </button>
  );
};
