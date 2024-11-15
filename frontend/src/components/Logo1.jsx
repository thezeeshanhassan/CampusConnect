
import { Link } from "react-router-dom";
export default function Logo() {
    return (
        <>
            <Link to={"/"} className="flex items-center space-x-2">
                <span className="text-4xl font-bold">
                    <span className="text-blue-600">S</span>
                    <span className="text-red-500">k</span>
                    <span className="text-orange-400">o</span>
                    <span className="text-blue-600">o</span>
                    <span className="text-gray-800">l</span>
                </span>
            </Link>
        </>
    );
}

