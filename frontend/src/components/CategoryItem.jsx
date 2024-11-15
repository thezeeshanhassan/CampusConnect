export default function CategoryItem({ icon, label }) {
    return (<>
        <button className="flex items-center rounded-full border border-gray-300 bg-white px-4 py-2 shadow-sm">
            <span className=" mr-2">{icon}</span>
            <span className="text-gray-700">{label}</span>
        </button>
    </>);
}