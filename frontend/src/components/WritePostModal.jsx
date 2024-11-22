import  { useState } from 'react';
import { Paperclip, Link2, Youtube, BarChart3, Smile, ChevronDown } from 'lucide-react';

const WritePostModal = ({ isOpen, onClose, userName = "Hamza Mehmood", community = "Headman Habits" }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle post submission
    console.log({ title, content, category });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-40">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl">
        {/* Header */}
        <div className="p-4 border-b">
          <div className="flex items-center gap-3">
            <div>
              <span className="font-medium">{userName}</span>
              <span className="text-gray-500"> posting in </span>
              <span className="font-medium">{community}</span>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="p-4 space-y-4">
            {/* Title Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Write something..."
              />
            </div>

            {/* Content Input */}
            <div>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[150px]"
                placeholder="Write something..."
              />
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 border-t flex items-center justify-between">
            {/* Tools */}
            <div className="flex items-center gap-4">
              <button type="button" className="text-gray-500 hover:text-gray-700">
                <Paperclip  className="w-5 h-5" />
              </button>
              <button type="button" className="text-gray-500 hover:text-gray-700">
                <Link2 className="w-5 h-5" />
              </button>
              <button type="button" className="text-gray-500 hover:text-gray-700">
                <Youtube className="w-5 h-5" />
              </button>
              <button type="button" className="text-gray-500 hover:text-gray-700">
                <BarChart3 className="w-5 h-5" />
              </button>
              <button type="button" className="text-gray-500 hover:text-gray-700">
                <Smile className="w-5 h-5" />
              </button>
              <button type="button" className="text-gray-500 hover:text-gray-700">
                GIF
              </button>
              <button type="button" className="text-gray-500 hover:text-gray-700 flex items-center gap-1">
                Select a category
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
              >
                CANCEL
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
              >
                POST
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WritePostModal;