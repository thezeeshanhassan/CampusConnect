import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/Login';
import HomeLayout from './layout/RootLayout';
import Home from './pages/Home';
import SignupPage from './pages/SignupPage';
import AboutComunityPage from './pages/AboutComunityPage';
import CommunityPage from './pages/CommunityPage';
import CommunityLayout from './layout/CommunityLayout';
import './App.css'
import CreateCommunity from './pages/CreateCommunity';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {

        index: true,
        element: <Home/>
      },
      {
        path: '/about',
        element: <AboutComunityPage/>
      }
    ]
  },
  {
    path: '/create-community',
    element: <CreateCommunity/>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/signup',
    element: <SignupPage/>
  },
  {
    path: '/community',
    element: <CommunityLayout/>,
    children: [
      {
        index: true,
        element: <CommunityPage/>
      }
    ]
  }
])

function App() {

  return <div> <RouterProvider router={routes}></RouterProvider></div>
}

export default App
