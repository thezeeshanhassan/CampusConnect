import { Input } from "@/components/ui/input";
export default function Searchbar() {
    return (
        <>
            <div className="relative max-w-2xl mx-auto mb-8">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                    placeholder="Search for anything"
                    className="pl-10 h-12"
                >
                </Input>
            </div>
        </>
    );
}