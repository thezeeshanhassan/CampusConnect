import AboutSidebar from "../components/AboutSidebar";

export default function MembersCommunityPage() {
  return (
    <div className=" p-4  bg-gray-200">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:max-w-screen-xl mx-auto">
        {/* Main content column - 70% width on desktop */}
        <div className="lg:w-[70%] mb-8 lg:mb-0">
        Members will appears here
        </div>

        {/* Sidebar column - 25% width on desktop */}
        <div className="lg:w-[25%]">
          <AboutSidebar/>
        </div>
      </div>
    </div>
  );
}
