import { Camera } from "lucide-react";

export default function Profile() {
  return (
    <div className="flex-1 max-w-3xl bg-white rounded-lg shadow-sm p-8">
      <h1 className="text-2xl font-semibold mb-8">Profile</h1>
      <div className="flex items-center gap-4 mb-8">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Profile"
            className="w-16 h-16 rounded-full object-cover"
          />
          <button className="absolute bottom-0 right-0 bg-blue-500 text-white p-1 rounded-full">
            <Camera size={16} />
          </button>
        </div>
        <button className="text-blue-500 hover:text-blue-600">
          Change profile photo
        </button>
      </div>

      {/* Form */}
      <form className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              First Name
            </label>
            <input
              type="text"
              defaultValue="Hamza"
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Last Name
            </label>
            <input
              type="text"
              defaultValue="Mehmood"
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm text-gray-600 mb-1">URL</label>
          <input
            type="text"
            defaultValue="skool.com/@hamza-mehmood-6387"
            className="w-full px-3 py-2 border rounded-md bg-gray-50"
            disabled
          />
          <p className="mt-1 text-sm text-gray-500">
            You can change your URL once you've got 90 contributions, 30
            followers, and been using it for 90 days.
          </p>
        </div>

        <div>
          <label className="block text-sm text-gray-600 mb-1">Bio</label>
          <textarea
            defaultValue="A passionate learner."
            className="w-full px-3 py-2 border rounded-md h-24"
          />
          <div className="text-right text-sm text-gray-500">21 / 150</div>
        </div>

        <div>
          <label className="block text-sm text-gray-600 mb-1">Location</label>
          <input type="text" className="w-full px-3 py-2 border rounded-md" />
        </div>

        <div className="pt-4">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}
