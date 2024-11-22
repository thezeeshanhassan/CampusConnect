import user from "../assets/user.png";
import { useState } from "react";
import { ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import NavIcons from "./NavIcons";

export default function CommunityHeader() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className="max-w-screen-xl mx-auto border-b bg-white">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2">
              <img
                src={user}
                alt="Headman Habits"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="font-semibold text-lg">Headman Habits</span>
            </Link>
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
                  <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Menu Item 1
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Menu Item 2
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Menu Item 3
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="flex-1 max-w-xl ml-4">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search"
                className="bg-gray-100 pl-8 bg-muted w-full border border-gray-300 rounded-md py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <NavIcons />
          </div>
        </div>

        <div className="max-w-screen-xl mx-auto mb-4 ml-4 ">
          <div className="container">
            <div className="justify-start  flex gap-10 font-medium text-gray-500 ">
              <Link to="/community" className="text-lg hover:text-black">
                Community
              </Link>
              <Link to="/pinned" className="text-lg hover:text-black">
                Pinned
              </Link>
                <Link to="/members" className="text-lg hover:text-black">
                Members
              </Link>
              <Link to="/about" className="text-lg hover:text-black">
                About
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
