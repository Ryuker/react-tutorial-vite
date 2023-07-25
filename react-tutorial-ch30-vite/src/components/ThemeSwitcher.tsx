import {useState, useEffect} from 'react'

function ThemeSwitcher() {
  const [darkTheme, setDarkTheme] = useState(true);
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
      <h3>Theme: {className}</h3>
      <button onClick={handleToggleClick}>toggle theme</button>
    </>
  )
}

export default ThemeSwitcher;