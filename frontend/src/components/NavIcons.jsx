import { useState, useRef, useEffect } from 'react';
import { MessageCircle, Bell, Settings, LogOut, User } from 'lucide-react';
import profile from '../assets/googleLogo.png'

const NavIcons = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="flex items-center gap-4 p-2">
      {/* Message Icon */}
      <button className="text-gray-500 hover:text-gray-700 transition-colors" aria-label="Messages">
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Notification Bell with Badge */}
      <button className="relative text-gray-500 hover:text-gray-700 transition-colors" aria-label="Notifications">
        <Bell className="w-6 h-6" />
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full" aria-label="4 notifications">
          4
        </span>
      </button>

      
      <div className="relative" ref={dropdownRef}>
        <button 
          className="w-8 h-8 rounded-full overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          aria-expanded={isDropdownOpen}
          aria-haspopup="true"
        >
          <img
            src={profile}
            alt="User profile"
            className="w-full h-full object-cover"
          />
        </button>

        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
            <a href="#profile" className=" px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center">
              <User className="w-4 h-4 mr-2" />
              Your Profile
            </a>
            <a href="#settings" className=" px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center">
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </a>
            <a href="#logout" className=" px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center">
              <LogOut className="w-4 h-4 mr-2" />
              Sign out
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavIcons;