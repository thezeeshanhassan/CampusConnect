
import { ThumbsUp, MessageSquare } from 'lucide-react';

const PostItem = ({ avatar, name, time, category, title, content, likes, comments, commenters, latestComment }) => {
  return (
    <div className="container mx-auto bg-white rounded-lg p-4 shadow mb-6">
      {/* User Info and Post Meta */}
      <div className="flex items-start gap-3 mb-4">
        <div className="relative">
          <img
            src={avatar}
            alt={name}
            className="w-10 h-10 rounded-full"
          />
          <span className="absolute bottom-0 right-0 bg-blue-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
            5
          </span>
        </div>
        <div>
          <h3 className="font-medium">{name}</h3>
          <p className="text-sm text-gray-500">
            <span>{time}</span>
            <span className="mx-1">in</span>
            <span className="text-gray-600">{category}</span>
          </p>
        </div>
      </div>

      {/* Post Content */}
      <div className="mb-4">
        <h2 className="text-lg font-medium mb-2">{title}</h2>
        <p className="text-gray-700">{content}</p>
      </div>

      {/* Engagement Section */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6">
          {/* Likes */}
          <div className="flex items-center gap-2">
            <button className="text-gray-500 hover:text-gray-700">
              <ThumbsUp className="w-5 h-5" />
            </button>
            <span className="text-gray-600">{likes}</span>
          </div>
          {/* Comments */}
          <div className="flex items-center gap-2">
            <button className="text-gray-500 hover:text-gray-700">
              <MessageSquare className="w-5 h-5" />
            </button>
            <span className="text-gray-600">{comments}</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PostItem;
