import WritePostModal from './WritePostModal';
import { useState } from 'react';
import gamingPic from '../assets/gaming1.jpg'

export default function PostButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <div onClick={() => setIsModalOpen(true)} className= " container bg-white shadow-md rounded-lg p-4 border-x-slate-400">
          <div className="flex gap-4 justify-center items-center ">
        
            <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
              <img
                src={gamingPic}
                alt="User"
                className="w-full h-full object-cover"
              />
            </div>
            <div className='flex-1 font-semibold text-xl text-gray-500'>
                Write something
            </div>
          </div>
        </div>

      
      <WritePostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        userName="Hamza Mehmood"
        community="Headman Habits"
      />
    </div>
  );
}