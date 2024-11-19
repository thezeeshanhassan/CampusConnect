// import CategoryItem from "./CategoryItem";

// export default function Category() {
//     return (<>
//         <div className="max-w-6xl w-full mx-auto m-5 flex items-center space-x-1">
//             <CategoryItem label={"All"}></CategoryItem>
//             <CategoryItem label={"Personal Development"} icon={"📚"}></CategoryItem>
//             <CategoryItem label={"Finance"} icon={"💰"}></CategoryItem>
//             <CategoryItem label={"Business"} icon={"📈"}></CategoryItem>
//             <CategoryItem label={"Sales & Marketing"} icon={"📊"}></CategoryItem>
//             <CategoryItem label={"Arts & Crafts"} icon={"🎨"}></CategoryItem>
//             <CategoryItem label={"More..."} icon={"➕"}></CategoryItem>
//             <CategoryItem label={"filters"} icon={"⚙️"}></CategoryItem>
//         </div>
//     </>)
// }


import CategoryItem from "./CategoryItem";

export default function Category() {
    return (
        <>
            <div className=" w-full mx-auto m-5 grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-2">
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

// 