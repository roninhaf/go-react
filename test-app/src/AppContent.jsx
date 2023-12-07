import { useEffect, useState } from "react";
const url = "https://jsonplaceholder.typicode.com/posts";

export default function AppContent() {
  const [users, setUsers] = useState([]);

  const fetchList = async () => {
    try {
      const response = await fetch(url);
      const users = await response.json();
      setUsers(users);
    } catch (error) {
      console.log(error);
    }
  };

  function idOfUser(userId) {
    console.log(userId);
  }

  return (
    <>
      <p>This is the content.</p>
      <p>There are {users.length} users.</p>
      <button onClick={fetchList}>Fetch Data</button>

      <ul>
        {users.map((user) => {
          return (
            <li key={user.id}>
              <a href="#!" onClick={() => idOfUser(user.id)}>
                {user.title}
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
}
