
import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import User from "./components/getuser/User"
import Adduser from './components/adduser/Adduser';
import Edit from './components/updateuser/Edit';
function App() {

  const route = createBrowserRouter([
    {
      path: "/",
      element: <User/>
    },
    {
      path: "/add",
      element: <Adduser/>
    },
    {
      path: "/edit/:id",
      element: <Edit/>
    },
  ])

  return (
    <>
      <RouterProvider router={route}>

      </RouterProvider>
    </>
  )
}

export default App
