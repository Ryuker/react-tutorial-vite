import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function ThemeButton(){
  const context = useContext(ThemeContext);

  return (
    <button>Theme Button: {context.theme}</button>
  )
}

export default ThemeButton;