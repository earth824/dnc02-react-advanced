import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

export default function App() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [showUsers, setShowUsers] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsers(res.data);
      setShowUsers(res.data);
    };

    fetchUser();
  }, []);

  // useEffect(() => {
  //   setShowUsers(users.filter((user) => user.id === +search));
  // }, [search]);

  return (
    <div>
      <div className="mb-12">
        <input
          type="text"
          className="border px-3 py-1.5"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
      </div>
      {users
        .filter((user) => user.id === +search || search === '')
        .map((user) => (
          <p key={user.id}>
            ID: {user.id} NAME: {user.name}
          </p>
        ))}
    </div>
  );
}
