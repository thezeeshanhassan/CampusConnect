import React from 'react';
import { Gamepad, Music2, Trophy, Lock, Users } from 'lucide-react';
import gaming1 from '../assets/gaming1.jpg'
import profileIcon from '../assets/user.png'

// Define a mapping for category-based icons
const categoryIcons = {
  Gaming: <Gamepad className="w-4 h-4" />,
  Music: <Music2 className="w-4 h-4" />,
  Sports: <Trophy className="w-4 h-4" />,
};

export default function CommunityCard({ category, rank, image, icon, title, description, members, price, isPrivate }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow ">
      {/* Header Image with Rank */}
      <div className="relative h-48">
        <img src={gaming1} alt={title} className="w-full h-full object-cover" />
        <div className="absolute top-3 left-3 bg-black/50 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
          #{rank} in <span className="ml-1">{categoryIcons[category]}</span> {category}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-center gap-3 mb-3">
          <img src={profileIcon} alt={title + ' icon'} className="w-6 h-6 rounded-lg" />
          <h3 className="font-semibold text-lg">{title}</h3>
        </div>

        <p className="text-gray-900 mb-4 line-clamp-2">{description}</p>

        {/* Footer Stats */}
        <div className="flex items-center gap-4 text-sm text-gray-900">
          <div className="flex items-center gap-1">
            <Lock className="w-4 h-4" />
            {isPrivate ? 'Private' : 'Public'}
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            {members} Members
          </div>
          <div className="font-bold">{price}</div>
        </div>
      </div>
    </div>
  );
};


