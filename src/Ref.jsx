// STATE: Component data cause component re render
// STATE: Component Memory
// REF: Component Memory but not trigger component re render
// use case: Reference to html element (select html element)

import { useEffect } from 'react';
import { useRef } from 'react';

export default function App() {
  const inputEl = useRef(null); // { current: null }
  const fileEl = useRef(null);

  useEffect(() => {
    inputEl.current.focus();
  }, []);

  return (
    <div>
      <input type="text" className="border px-3 py-1.5" ref={inputEl} />
      <input type="file" className="hidden" ref={fileEl} />
      <div
        className="bg-gray-200 p-4 flex items-center justify-center m-8"
        onClick={() => {
          fileEl.current.click();
        }}
      >
        Select Photo
      </div>
    </div>
  );
}

// REF MECHANIC
// export default function App() {
//   const counterRef = useRef(10); // counterRef ==> { current: 10 }

//   console.log('APP RENDER');
//   return (
//     <div>
//       <button
//         onClick={() => {
//           counterRef.current = counterRef.current + 1;
//           console.log(counterRef);
//         }}
//       >
//         Increase Ref
//       </button>
//     </div>
//   );
// }
