import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

export default function App() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [debounced, setDebounced] = useState(search);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsers(res.data);
    };

    fetchUser();
  }, []);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebounced(search);
    }, 3000);
    const start = Date.now();
    console.log('EFFECT', timerId);

    return () => {
      const end = Date.now();
      console.log('TIME PASS: ', (end - start) / 1000);
      console.log('CLEAN UP', timerId);
      clearTimeout(timerId);
    };
  }, [search]);

  return (
    <div>
      <input
        type="text"
        className="border px-3 py-1.5"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      {users
        .filter((user) => user.name.includes(debounced) || debounced === '')
        .map((user) => (
          <p key={user.id}>
            ID: {user.id} NAME: {user.name}
          </p>
        ))}
    </div>
  );
}
