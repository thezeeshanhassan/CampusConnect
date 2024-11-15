import Logo from "./Logo";
import { useState } from 'react'
import { ChevronUp } from 'lucide-react'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>

            <header className="w-full border-b bg-white">
                <div className="container flex h-16 items-center justify-between px-4">
                    <div className="flex items-center gap-4">
                        <Logo />
                        <div className="relative">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200"
                            >
                                <ChevronUp className="h-4 w-4" />
                                <span className="sr-only">Menu</span>
                            </button>
                            {isOpen && (
                                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Menu Item 1</a>
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Menu Item 2</a>
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Menu Item 3</a>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <button>Login</button>
                </div>
            </header>

        </>
    );
}





