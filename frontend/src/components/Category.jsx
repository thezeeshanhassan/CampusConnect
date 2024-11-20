import CategoryItem from "./CategoryItem";

export default function Category() {
    return (
        <>
            <div className=" w-full max-w-5xl mx-auto m-5 grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-2">
                <CategoryItem label={"All"} />
                <CategoryItem label={"Books"} icon={"📚"} />
                <CategoryItem label={"Finance"} icon={"💰"} />
                <CategoryItem label={"Business"} icon={"📈"} />
                <CategoryItem label={"Marketing"} icon={"📊"} />
                <CategoryItem label={"Arts"} icon={"🎨"} />
                <CategoryItem label={"More..."} icon={"➕"} />
                <CategoryItem label={"Filters"} icon={"⚙️"} />
            </div>
        </>
    );
}