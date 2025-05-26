import { RouterProvider } from "react-router"
import { router } from "./router"
import { ThemeProvider } from "./context/ThemeContext"
import { LanguageProvider } from "./context/LanguageContext"


const App = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <RouterProvider router={router}/>
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App