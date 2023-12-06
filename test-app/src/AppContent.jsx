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

  const anotherFunction = () => {
    console.log("anotherfunction");
  };

  return (
    <>
      <p>This is the content.</p>
      <p onMouseEnter={anotherFunction}>This is some text</p>
      <button onClick={fetchList}>Fetch Data</button>
      <ul>
        {users.map((user) => {
          return <li key={user.id}>{user.title}</li>;
        })}
      </ul>
    </>
  );
}
