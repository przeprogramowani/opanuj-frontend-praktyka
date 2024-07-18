import React, { useEffect, useState } from 'react';

interface User {
  id: number;
  name: string;
}

const API_URL = '/api/data/users?timeout=10000';

const App = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [errorLoading, setErrorLoading] = useState(false);
  
  const fetchData = fetch(API_URL);
  const timeout = new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error('Request Timeout'));
    }, 5000);
  });

  const fetchUsers = () => {
    setErrorLoading(false);
   
    Promise.race([fetchData, timeout])
      .then(res => res.json())
      .then(({ users }) => {
        setUsers(users);
      }).catch(_ => {
        setErrorLoading(true);
      })
  };

  useEffect(() => {
    fetchUsers();
  }, []);


  return (
    <div>
      <div className="flex flex-row items-center justify-between py-4">
        <h1 className="text-2xl font-bold">Users</h1>
        <div className="flex flex-row items-center">
          {errorLoading ?
          <>
          <p className="mr-2">
            Sorry, there seems to be connectivity issues...
          </p> 
          <button className="text-blue-400 bg-blue-200 hover:text-blue-200 hover:bg-blue-400 rounded-md p-4" onClick={fetchUsers}>
            Try again
          </button>
          </>
          : null}
        </div>
      </div>
      <ul className="space-y-2">
        {users.map((user, index) => (
          <li
            className="bg-white p-4 rounded-md border border-gray-100"
            key={index}
          >
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
        
};

export default App;
