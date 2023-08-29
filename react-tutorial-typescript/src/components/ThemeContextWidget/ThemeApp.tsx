import ThemeButton from "./ThemeButton"
import { ThemeProvider } from "./ThemeContext"


function ThemeApp(){

  return (
    <ThemeProvider>
      <h2>Theme Context Widget</h2>
      <ThemeButton />
    </ThemeProvider>
  )
}

export default ThemeApp;