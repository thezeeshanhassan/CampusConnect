import Category from "./Category";
const SearchIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <circle cx="11" cy="11" r="8" />
        <line x1="25" y1="25" x2="16.65" y2="16.65" />
    </svg>
);

export default function Searchbar() {
    return (
        <>
            <div className="max-w-2xl w-full mx-auto">
                <div className="relative">
                    <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                        <SearchIcon></SearchIcon>
                    </div>
                    <input
                        type="text"
                        placeholder="Search for anything"
                        className="w-full pl-10  pr-4 py-3 bg-white border border-gray-300 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                </div>
            </div>
            <div className="max-w-6xl w-full mx-auto m-5 flex items-center space-x-1">
                <Category label={"All"}></Category>
                <Category label={"Personal Development"} icon={"📚"}></Category>
                <Category label={"Finance"} icon={"💰"}></Category>
                <Category label={"Business"} icon={"📈"}></Category>
                <Category label={"Sales & Marketing"} icon={"📊"}></Category>
                <Category label={"Arts & Crafts"} icon={"🎨"}></Category>
                <Category label={"More..."} icon={"➕"}></Category>
                <Category label={"filters"} icon={"⚙️"}></Category>
            </div>
        </>
    );
}