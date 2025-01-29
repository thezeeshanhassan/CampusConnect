import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import HomeLayout from "./layout/RootLayout";
import Home from "./pages/Home";
import SignupPage from "./pages/SignupPage";
import AboutComunityPage from "./pages/AboutComunityPage";
import CommunityPage from "./pages/CommunityPage";
import CommunityLayout from "./layout/CommunityLayout";
import MembersCommunityPage from "./pages/MembersCommunityPage";
import ProfilePage from "./pages/ProfilePage";
import SettingPage from "./pages/SettingPage";
import Chat from "./pages/chatPage";
import Notification from "./pages/NotificationPage";
import "./App.css";
import CreateCommunity from "./pages/CreateCommunity";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutComunityPage />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
      },
      { path: "/settings", element: <SettingPage /> },
      {
        path: "/chat",
        element: <Chat></Chat>,
      },
      {
        path: "/notifications",
        element: <Notification />,
      },
    ],
  },
  {
    path: "/create-community",
    element: <CreateCommunity />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/community",
    element: <CommunityLayout />,
    children: [
      {
        index: true,
        element: <CommunityPage />,
      },
      {
        path: "members",
        element: <MembersCommunityPage />,
      },
      {
        path: "about",
        element: <AboutComunityPage />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      {" "}
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
