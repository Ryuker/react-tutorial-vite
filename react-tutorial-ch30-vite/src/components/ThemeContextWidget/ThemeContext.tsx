import { ReactNode, createContext, useState} from "react"


interface ThemeContextType{
  theme: string;
  toggleTheme(): void;
}

const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

function ThemeProvider({children}: {children: ReactNode}){
  // const theme:string = "dark";
  const [theme, setTheme] = useState<string>("dark"); 

  function toggleTheme(){
    theme === "dark" ? setTheme("light") : setTheme("dark");
  }

  const value:ThemeContextType = {
    theme: theme,
    toggleTheme: toggleTheme
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export {ThemeProvider, ThemeContext};