import { ReactNode, createContext} from "react"

const ThemeContext = createContext<string>("");

function ThemeProvider({children}: {children: ReactNode}){
  const theme:string = "dark";

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  )
}

export {ThemeProvider, ThemeContext};