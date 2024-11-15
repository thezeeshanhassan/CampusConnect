import CategoryItem from "./CategoryItem";

export default function Category() {
    return (<>
        <div className="max-w-6xl w-full mx-auto m-5 flex items-center space-x-1">
            <CategoryItem label={"All"}></CategoryItem>
            <CategoryItem label={"Personal Development"} icon={"📚"}></CategoryItem>
            <CategoryItem label={"Finance"} icon={"💰"}></CategoryItem>
            <CategoryItem label={"Business"} icon={"📈"}></CategoryItem>
            <CategoryItem label={"Sales & Marketing"} icon={"📊"}></CategoryItem>
            <CategoryItem label={"Arts & Crafts"} icon={"🎨"}></CategoryItem>
            <CategoryItem label={"More..."} icon={"➕"}></CategoryItem>
            <CategoryItem label={"filters"} icon={"⚙️"}></CategoryItem>
        </div>
    </>)
}