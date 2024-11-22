import Searchbar from "../components/Searchbar";
import Category from "../components/Category";
import Card from "../components/Cards";
import { Link } from "react-router-dom";
export default function Home() {
    return (
        <>

            <div className=" bg-gray-100">
                <div className="max-w-screen-xl mx-auto px-4 py-8">
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold mb-2">Discover communities</h1>
                        <p className="text-gray-600">
                            or <Link to="/create-community" className="text-blue-600 hover:underline">create your own</Link>
                        </p>
                    </div>
                    <Searchbar></Searchbar>
                    <Category></Category>
                    <Card></Card>
                </div>
            </div>

        </>
    );
}