import React from "react";
import { ChevronDown, Crown } from "lucide-react";

const notifications = [
  {
    id: 1,
    user: {
      name: "Casey Zander",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    type: "post",
    action: "new post",
    message: "Why I'm looks maxing",
    date: "Nov '24",
    isFollowing: true,
    isUnread: true,
  },
  {
    id: 2,
    user: {
      name: "Brandon Koeck",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    type: "comment",
    action: "commented on your post",
    message: "Hi Hamza, welcome to our community man! I hope you...",
    date: "Oct '24",
    isUnread: true,
  },
  {
    id: 3,
    user: {
      name: "Scott Pickett",
      avatar:
        "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    type: "comment",
    action: "commented on your post",
    message: "Good luck",
    date: "Oct '24",
    isUnread: true,
  },
  {
    id: 4,
    user: {
      name: "Danail Angelov",
      avatar:
        "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    type: "comment",
    action: "commented on your post",
    message: "Hey good luck !",
    date: "Oct '24",
  },
  {
    id: 5,
    user: {
      name: "Angel Vilas",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    type: "like",
    action: "liked your post",
    message: "New one",
    date: "Oct '24",
  },
];

export default function NotificationPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto bg-white min-h-screen shadow-sm">
        {/* Header */}
        <div className="border-b">
          <div className="px-4 py-3">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-semibold">Notifications</h1>
              <div className="flex items-center gap-4">
                <button className="text-blue-500 hover:text-blue-600 text-sm font-medium">
                  Mark all as read
                </button>
                <button className="flex items-center text-gray-600 hover:text-gray-900">
                  All groups
                  <ChevronDown size={20} className="ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Notifications List */}
        <div className="divide-y">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`flex gap-3 p-4 ${
                notification.isUnread ? "bg-blue-50" : ""
              }`}
            >
              <div className="relative">
                <img
                  src={notification.user.avatar}
                  alt={notification.user.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                {notification.isFollowing && (
                  <Crown
                    size={16}
                    className="absolute -top-1 -right-1 text-amber-500 bg-white rounded-full p-0.5"
                  />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="font-medium text-gray-900">
                      {notification.user.name}
                    </span>
                    {notification.isFollowing && (
                      <span className="ml-1 text-gray-500">(following)</span>
                    )}
                    <span className="ml-1 text-gray-600">
                      {notification.action}
                    </span>
                    <div className="mt-0.5 text-gray-600">
                      {notification.message}
                    </div>
                  </div>
                  <span className="text-sm text-gray-500 whitespace-nowrap">
                    {notification.date}
                  </span>
                </div>
              </div>
              {notification.isUnread && (
                <div className="w-2 h-2 rounded-full bg-blue-500 mt-2" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
