import Header from "./components/Header";
import Main from "./components/Main";
import { useState } from "react";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme((prev) => !prev);
  };

  return (
    <div className={`container-app ${isDarkTheme ? "dark" : ""}`}>
      <div className="container">
        <Header />
        <Main toggleTheme={toggleTheme} />
      </div>
    </div>
  );
}

export default App;
