import { createContext, useContext, useState } from "react"

const ThemeContext = createContext(undefined)

function ThemeProvider({ children, defaulTheme }) {
  const [theme, setTheme] = useState(defaulTheme)

  return <ThemeContext.Provider value={[theme, setTheme]}>{children}</ThemeContext.Provider>
}

function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}

export { ThemeProvider, useTheme }
