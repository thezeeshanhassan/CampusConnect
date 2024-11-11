import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home'
import './App.css'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
  },
  {
    path: '/login',
    element: <Login/>
  }
])

function App() {
 
  return <div> <RouterProvider router={routes}></RouterProvider></div>   
}

export default App
