import WritePostModal from './WritePostModal';
import { useState } from 'react';

export default function PostButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsModalOpen(true)}>
        Create Post
      </button>
      
      <WritePostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        userName="Hamza Mehmood"
        community="Headman Habits"
      />
    </div>
  );
}