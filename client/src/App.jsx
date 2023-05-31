import React, {useState} from 'react';
import { DarkModeToggle } from './components';

const App = () => {

  const [darkToggle, setDarkToggle] = useState(
    localStorage.getItem("theme") === "dark" ? true : false
  );

  const toggleDark = () => {
    if (darkToggle) {
      localStorage.setItem("theme", "light");
      setDarkToggle(false);
    } else {
      localStorage.setItem("theme", "dark");
      setDarkToggle(true);
    }
  };

  return (
    <>
      <div className={darkToggle ? "dark" : ""}>
        <DarkModeToggle toggleDark={toggleDark} />
      </div>
    </>
  );
}

export default App;
