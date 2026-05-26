// State: re render UI

import { useEffect } from 'react';
import { useState } from 'react';

// LIFECYCLE: MOUNT, UPDATE, UNMOUNT
export default function App() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button onClick={() => setShow((prev) => !prev)}>Click</button>
      {show && <Counter />}
    </div>
  );
}

function Counter() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log('COUNTER EFFECT RUN');
  }, [value]);

  console.log('COUNTER RENDER');
  return (
    <div>
      <h1>{value}</h1>
      <button onClick={() => setValue((prev) => prev + 1)}>Increase</button>
    </div>
  );
}
// EFFECT FUNCTION
// 1. No dependency array: EFFECT RUN AFTER EVERY RENDER
// 2. Empty dependency array: EFFECT RUN ONLY ONCE AFTER FIRST RENDER
// use case: Data fetching from external api (deprecated, there're better option)
// 3. dependency array with varaible: EFFECT RUN IF variable in the dependency array change
//
