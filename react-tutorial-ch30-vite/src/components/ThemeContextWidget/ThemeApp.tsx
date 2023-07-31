import ThemeButton from "./ThemeButton"
import { ThemeProvider } from "./ThemeContext"


function ThemeApp(){

  return (
    <ThemeProvider>
      <ThemeButton />
    </ThemeProvider>
  )
}

export default ThemeApp;