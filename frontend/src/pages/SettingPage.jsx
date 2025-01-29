import React, { useState } from "react";
import { User, Lock, Bell, MessageCircle, Users } from "lucide-react";
import Profile from "../components/settingPageComp/profile";
import Password from "../components/settingPageComp/password";
import Chat from "../pages/chatPage";
const components = {
  profile: <Profile />,
  password: <Password />,
  chat: <Chat />,
};

export default function SettingPage() {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="max-w-screen-xl mx-auto bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="w-64">
            <nav className="space-y-1">
              <SidebarItem
                icon={<User size={20} />}
                text="Profile"
                active={activeTab === "profile"}
                onClick={() => setActiveTab("profile")}
              />
              <SidebarItem
                icon={<Lock size={20} />}
                text="Password"
                active={activeTab === "password"}
                onClick={() => setActiveTab("password")}
              />
              <SidebarItem
                icon={<Bell size={20} />}
                text="Notifications"
                active={activeTab === "notifications"}
                onClick={() => setActiveTab("notifications")}
              />
              <SidebarItem
                icon={<MessageCircle size={20} />}
                text="Chat"
                active={activeTab === "chat"}
                onClick={() => setActiveTab("chat")}
              />
              <SidebarItem
                icon={<Users size={20} />}
                text="Communities"
                active={activeTab === "communities"}
                onClick={() => setActiveTab("communities")}
              />
            </nav>
          </div>

          {/* Dynamic Content Area */}
          <div className="flex-1 max-w-3xl bg-white rounded-lg shadow-sm p-8">
            {components[activeTab]}
          </div>
        </div>
      </div>
    </div>
  );
}

function SidebarItem({ icon, text, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-3 px-4 py-2 w-full text-left rounded-md transition-colors focus:outline-none ${
        active
          ? "bg-amber-100 text-amber-900"
          : "text-gray-700 hover:bg-gray-100"
      }`}
    >
      {icon}
      <span>{text}</span>
    </button>
  );
}
