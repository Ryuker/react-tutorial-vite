import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function ThemeButton(){
  const theme = useContext(ThemeContext);

  return (
    <button>Theme Button: {theme}</button>
  )
}

export default ThemeButton;