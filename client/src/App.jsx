import React, {useState} from 'react';
import { DarkModeToggle } from './components';
import FrontendRoutes from './routes';

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
        <FrontendRoutes />
      </div>
    </>
  );
}

export default App;
