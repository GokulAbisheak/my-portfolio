const DarkModeToggle = ({ toggleDark }) => {

    return (
        
      <button
        className="fixed bottom-0 right-0 z-50 flex items-center justify-center w-12 h-12 mr-4 mb-4 text-2xl font-bold text-white transition duration-500 ease-in-out transform bg-gray-800 rounded-full dark:bg-gray-200 hover:bg-gray-700 dark:hover:bg-gray-300 focus:outline-none"
        onClick={toggleDark}>

        {localStorage.getItem("theme") === "dark" ? (
          <span role="img" aria-label="sun">
            ☀️
          </span>
        ) : (
          <span role="img" aria-label="moon">
            🌙
          </span>
        )}

      </button>
    );
  };
  
  export default DarkModeToggle;