import { useRef } from 'react';

export const FocusScreen = () =>
{
  const inputRef = useRef();
  const onClick = () =>
  {
    // document.querySelector('input').select();
    // console.log(inputRef);
    inputRef.current.select();
  };

  return (
    <>
      <h1>Focus Screen</h1>
      <hr />
      <input
        className='form-control'
        type='text'
        placeholder='Insert name'
        ref={inputRef}
      />
      <button className='btn btn-primary mt-2' onClick={onClick}>
        Set Focus
      </button>
    </>
  );
};
