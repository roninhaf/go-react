export default function AppContent() {
  var myLis = <li>Placeholder</li>;
  const fetchList = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        myLis = json.map((post) => {
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>;
          console.log(myLis);
        });
      });
  };

  return (
    <>
      <p>This is the content.</p>
      <button onClick={fetchList}>Fetch Data</button>
      <ul>{myLis}</ul>
    </>
  );
}
