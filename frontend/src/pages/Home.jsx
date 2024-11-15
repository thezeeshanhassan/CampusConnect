import { Link } from "react-router-dom";
import Searchbar from "../components/Searchbar";
export default function Home() {
    return (
        <>
            <div className="container mx-auto px-4 py-8">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold mb-2">Discover communities</h1>
                    <p className="text-gray-600">
                        or <a href="#" className="text-blue-600 hover:underline">create your own</a>
                    </p>
                </div>

                <div className="relative max-w-2xl mx-auto mb-8">
                    <SearchIcon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search for anything"
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
            </div>
            </>
            );
}