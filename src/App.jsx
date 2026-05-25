import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

// COMPONENT must be synchronous
function App() {
  const [users, setUsers] = useState([]);
  const [toggle, setToggle] = useState(true);

  // USE EFFECT HOOK to handle this
  // axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
  //   setUsers(res.data);
  //   console.log('AFTER READ DATA SUCCESSFULLY');
  // });

  // useEffect receive 2 params
  // first params: EFFECT FUNCTION ==> () => {}
  // second prams: DEPENDENCY ARRAYS (optional)
  // EFFECT FUNCTION must be a synchronous function
  useEffect(() => {
    // console.log('EFFECT FUNCTION RUN');
    // axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
    //   console.log(res);
    //   setUsers(res.data);
    // });

    const fetchUsers = async () => {
      const res = await axios.get('https://jsonplaceholder.typicode.com/users');
      // setUsers(res.data);
    };

    fetchUsers();
  }, []);
  // EFFECT FUNCTION RUN After component render, run condition based on dependency array
  // 1. no dependency array ==> effect function run after every component re-render
  // 2. dependency array: empty array ==>  effect function run only after first render
  // 3. if provided data in dependency array ==> effect function run only if data in the dependency array changed

  // console.log('BEFORE RENDER');
  return (
    <>
      <button
        className="px-4 py-2 bg-gray-200"
        onClick={() => setToggle((prev) => !prev)}
      >
        Toggle
      </button>
      <div className="h-20 bg-green-200">{toggle && <Timer />}</div>
      {/* [].map */}
      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </>
  );
}

export default App;

// COMPONENT LIFECYCLE
// PHASE I: MOUNTED ==> Component inserted into the dom
// PHASE II: UPDATING ==> Component still in the dom, state updated
// PHASE III: UNMOUNT ==> Component removed from the dom
function Timer() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('TIMER MOUNTED');
    const intervalId = setInterval(() => {
      // console.log('INTERVAL RUN');
    }, 3000);
    // EFFECT CLEANING FUNCTION
    // 1. After component unmount
    // 2. Before next render
    return () => {
      console.log('EFFECT CLEANING');
      clearInterval(intervalId);
    };
  }, [count]);
  console.log('BEFORE RENDER');
  return (
    <>
      <h1>Timer</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>Increase</button>
      <p>{count}</p>
    </>
  );
}

// React Fragment <></>

// METHOD: GET
// async function run() {
//   try {
//     const res = await axios.get('https://jsonplaceholder.typicode.com/users');
//     console.log(res); // successfully read data from response kept in res.data
//   } catch (err) {}
//   // server sent response ==> 2xx, 3xx ==> axios result is success
//   // server sent response ==> 4xx, 5xx ==> axios result failed
// }

// run();
