import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Login from './pages/Login';
import HomeLayout from './layout/RootLayout';
import Home from './pages/Home';
import SignupPage from './pages/SignupPage';
import './App.css'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/signup',
        element: <SignupPage/>
      }
    ]
  }
])

function App() {
 
  return <div> <RouterProvider router={routes}></RouterProvider></div>   
}

export default App
