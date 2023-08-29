import {useState, useEffect} from 'react'

function ThemeSwitcher() {
  // retrieves theme from the key in local storage, only runs once. If no value has been set it just return false.
  const [darkTheme, setDarkTheme] = useState(() => localStorage.getItem("dark_theme") === "true" ?? false);
  const className = darkTheme ? "dark" : "light";

  useEffect(() => { // stores theme in local storage when darkTheme state changes
    localStorage.setItem("dark_theme", darkTheme.toString());
  }, [darkTheme]);

  function handleToggleClick(){
    setDarkTheme(!darkTheme);
  }
  

  return (
    <>
      <h2>local storage widget</h2>
      <h3>Theme: {className} - darkTheme: {darkTheme}</h3>
      <button onClick={handleToggleClick}>toggle theme</button>
    </>
  )
}

export default ThemeSwitcher;