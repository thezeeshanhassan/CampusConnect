
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

/**
 * RootLayout component serves as the main layout wrapper for the application
 * It includes the header component and renders child routes using Outlet
 * 
 * @returns {JSX.Element} The root layout structure with header and child content
 */
export default function RootLayout(){
    return <div>
       <Header/>
        <Outlet/>
    </div>
}
