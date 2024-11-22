import React from 'react';

export default function ProfileCard ({ name, username, bio, avatarUrl, joinedDate, isOnline })  {
  return (
    <div className="max-w-3xl w-full bg-white rounded-lg shadow-md p-6">
      <div className="flex items-start space-x-4">
        <div className="relative">
          <img 
            src={avatarUrl} 
            alt={name} 
            className="w-12 h-12 rounded-full object-cover"
          />
          {isOnline && (
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
          )}
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold">{name}</h2>
              <p className="text-sm text-gray-500">{username}</p>
            </div>
            <button className="px-6 py-3 text-sm bg-gray-200 rounded-md hover:bg-gray-300 transition-colors">
              CHAT
            </button>
          </div>
          <p className="mt-2 text-sm text-gray-600">{bio}</p>
          <div className="mt-4 flex items-center text-sm text-gray-500">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Joined {joinedDate}
          </div>
        </div>
      </div>
    </div>
  );
};