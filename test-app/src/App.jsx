import { useState } from "react";
import "./App.css";
import AppFooter from "./AppFooter";
import AppHeader from "./AppHeader";
import AppContent from "./AppContent";

function App() {
  const [count, setCount] = useState(0);
  const myProps = {
    title: "My App",
    subject: "My subject",
    favourite_color: "blue",
  };

  return (
    <>
      <AppHeader {...myProps}></AppHeader>
      <AppContent></AppContent>
      <AppFooter></AppFooter>
    </>
  );
}

export default App;
