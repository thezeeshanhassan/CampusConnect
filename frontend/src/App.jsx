import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './pages/Home'
import './App.css'

const routes=createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  }
])

function App() {
 
  return <div> <RouterProvider router={routes}></RouterProvider></div>   
}

export default App
