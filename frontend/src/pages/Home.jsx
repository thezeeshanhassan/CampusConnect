import { Link } from "react-router-dom";
import Searchbar from "../components/Searchbar";
import Category from "../components/Category";
export default function Home() {
    return (
        <>

            <div className=" bg-gray-100">
                <div className="container mx-auto px-4 py-8">
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold mb-2">Discover communities</h1>
                        <p className="text-gray-600">
                            or <a href="#" className="text-blue-600 hover:underline">create your own</a>
                        </p>
                    </div>
                    <Searchbar></Searchbar>
                    <Category></Category>
                </div>
            </div>

        </>
    );
}