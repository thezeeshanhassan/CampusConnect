
import { Outlet } from "react-router-dom";
import CommunityHeader from "../components/CommunityHeader";

/**
 * RootLayout component serves as the main layout wrapper for the application
 * It includes the header component and renders child routes using Outlet
 * 
 * @returns {JSX.Element} The root layout structure with header and child content
 */
export default function CommunityLayout(){
    return <div>
        <CommunityHeader/>
        <Outlet/>
    </div>
}
