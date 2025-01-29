import React, { useState } from "react";
import { Search, ChevronDown, MoreVertical } from "lucide-react";

const initialChats = [
  {
    id: 1,
    user: {
      name: "Casey Zander",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    message: "Okay Sure",
    date: "Oct '24",
  },
  {
    id: 2,
    user: {
      name: "Sarah Wilson",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    message: "Thanks for the update!",
    date: "Oct '24",
  },
  {
    id: 3,
    user: {
      name: "Michael Chen",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    message: "Let's schedule a meeting",
    date: "Oct '24",
  },
];

export default function ChatPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [chats] = useState(initialChats);

  const filteredChats = chats.filter((chat) =>
    chat.user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto bg-white min-h-screen shadow-sm">
        {/* Header */}
        <div className="border-b">
          <div className="px-4 py-3">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-xl font-semibold">Chats</h1>
              <button className="flex items-center text-gray-600 hover:text-gray-900">
                All
                <ChevronDown size={20} className="ml-1" />
              </button>
            </div>

            {/* Search Bar */}
            <div className="relative">
              <Search
                size={20}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                placeholder="Search users"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Chat List */}
        <div className="divide-y">
          {filteredChats.map((chat) => (
            <div
              key={chat.id}
              className="flex items-center gap-3 p-4 hover:bg-gray-50 cursor-pointer"
            >
              <img
                src={chat.user.avatar}
                alt={chat.user.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-gray-900 truncate">
                    {chat.user.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500">{chat.date}</span>
                    <button className="text-gray-400 hover:text-gray-600">
                      <MoreVertical size={16} />
                    </button>
                  </div>
                </div>
                <p className="text-sm text-gray-500 truncate">{chat.message}</p>
              </div>
            </div>
          ))}
        </div>

        {filteredChats.length === 0 && (
          <div className="p-4 text-center text-gray-500">No chats found</div>
        )}
      </div>
    </div>
  );
}
