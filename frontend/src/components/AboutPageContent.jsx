import pc from '../assets/pc.jpg';
import { Lock, Users, CreditCard } from 'lucide-react'; // Updated to standard lucide icon names

const PlayerAccelerator = () => {
  return (
    <div className="container mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <h2 className="text-xl font-semibold p-4">Player Accelerator</h2>

      <div className="relative">
        <img
          src={pc} // Ensure this points to a valid file in the public folder
          alt="Amateur to Pro Transformation"
          className="mx-auto h-auto rounded-lg w-11/12"
        />
      </div>

      <div className="p-4">

        <div className="flex  lg:justify-around justify-start items-center space-x-4 lg:text-lg text-gray-900 lg:font-semibold  font-normal mb-4">
          <div className="flex items-center">
            <Lock className="w-4 h-4 mr-1" />
            <span>Private group</span>
          </div>
          <div className="flex items-center">
            <Users className="w-4 h-4 mr-1" />
            <span>1.6k members</span>
          </div>
          <div className="flex items-center">
            <CreditCard className="w-4 h-4 mr-1" />
            <span>Paid</span>
          </div>
        </div>

        <div className="flex items-center space-x-2 mb-4">
          <img
            src="/placeholder.svg" // Ensure this points to a valid file in the public folder
            alt="Habas Jawansheer"
            className="w-6 h-6 rounded-full"
          />
          <span className="text-sm text-gray-600">By Habas Jawansheer</span>
        </div>

        <p className="text-gray-700 mb-2">
          Helping footballers go from average to standout players
        </p>

        <p className="text-sm text-gray-600">
          For support and to get help getting inside email haris@ztthraining.com
        </p>
      </div>

      <div className="px-4 py-2 bg-gray-100 text-xs text-gray-500">
        Privacy and terms
      </div>
    </div>
  );
};

export default PlayerAccelerator;
