import { RouterProvider } from "react-router-dom"
import { setupApp } from "./app/setupApp"

function App() {
  const router = setupApp()

  return (
    <RouterProvider router={router}/>
  )
}

export default App
