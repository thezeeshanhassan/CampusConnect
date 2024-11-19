const AboutSidebar = () => {
    return (
      <div className="max-w-sm rounded-lg bg-white shadow-lg overflow-hidden">
        {/* Header Image Section */}
        <div className="relative">
          <img
            src="/placeholder.svg?height=200&width=400"
            alt="Focus Revolution"
            className="w-full h-[200px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/80 to-orange-500/80">
            <div className="p-6 text-white">
              <div className="text-sm font-medium mb-2">FROM DISTRACTION TO SUCCESS ✧</div>
              <div className="text-lg font-bold mb-1">
                ELIMINATE <span className="text-orange-300">PROCRASTINATION</span>
              </div>
              <div className="text-lg font-bold mb-2">
                AND UNLOCK <span className="text-orange-300">INSTANT FOCUS</span>
              </div>
              <div className="text-sm">INTERACTIVE PROGRAM</div>
            </div>
          </div>
        </div>
  
        {/* Content Section */}
        <div className="p-6 space-y-4">
          <h2 className="text-xl font-bold">
            Focus Revolution by ADHDVision
          </h2>
          
          <a href="https://skool.com/focus-revolution" className="text-gray-600 hover:underline text-sm">
            skool.com/focus-revolution
          </a>
  
          <p className="text-gray-800">
            Helping 1 Million ADHDers break free and turn ADHD into their Advantage by 2030.
          </p>
  
          <div className="font-medium">
            Book Your Focus Sessions HERE
            <span className="ml-2">👇</span>
          </div>
  
          {/* Stats Section */}
          <div className="flex justify-between py-4 border-t border-b border-gray-100">
            <div className="text-center">
              <div className="font-bold">917</div>
              <div className="text-xs text-gray-500">Members</div>
            </div>
            <div className="text-center">
              <div className="font-bold">13</div>
              <div className="text-xs text-gray-500">Online</div>
            </div>
            <div className="text-center">
              <div className="font-bold">14</div>
              <div className="text-xs text-gray-500">Admins</div>
            </div>
          </div>
  
          {/* Join Button */}
          <button className="w-full py-3 bg-[#FFD666] hover:bg-[#FFE699] transition-colors rounded-md font-medium">
            JOIN GROUP
          </button>
  
          {/* Footer */}
          <div className="text-center text-sm text-gray-500">
            powered by <span className="font-medium">skool</span>
          </div>
        </div>
      </div>
    );
  };
  
  export default AboutSidebar;