import { Son } from './Son';
import { useState } from 'react';

export const Parent = () => {
  const numbers = [2, 4, 6, 8, 10];
  const [value, setValue] = useState(0);

  const increment = (num) => {
    setValue(value + num);
  };

  return (
    <div>
      <h1>Parent</h1>
      <p>Total: {value} </p>

      <hr />

      {numbers.map((n) => (
        <Son key={n} number={n} increment={increment} />
      ))}
      {/* <Son /> */}
    </div>
  );
};
