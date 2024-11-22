import AboutSidebar from "../components/AboutSidebar";
import ProfileCard from "../components/ProfileCard";

const members = [
  {
    name: "John Doe",
    username: "@johndoe",
    bio: "Frontend Developer | Tech Enthusiast | Coffee Lover",
    avatarUrl: "https://via.placeholder.com/150/00FF00/FFFFFF?text=MB",
    joinedDate: "January 2022",
    isOnline: true,
  },
  {
    name: "Jane Smith",
    username: "@janesmith",
    bio: "UX/UI Designer | Traveler | Cat Lover",
    avatarUrl: "https://via.placeholder.com/150/FF0000/FFFFFF?text=JS",
    joinedDate: "March 2021",
    isOnline: false,
  },
  {
    name: "Michael Brown",
    username: "@mikebrown",
    bio: "Full Stack Developer | Gamer | Music Enthusiast",
    avatarUrl: "https://via.placeholder.com/150",
    joinedDate: "June 2020",
    isOnline: true,
  },
  {
    name: "Emily Johnson",
    username: "@emilyj",
    bio: "Content Creator | Bookworm | Foodie",
    avatarUrl: "https://via.placeholder.com/150/0000FF/FFFFFF?text=EJ",
    joinedDate: "October 2019",
    isOnline: false,
  },
  {
    name: "Chris Lee",
    username: "@chrislee",
    bio: "Mobile App Developer | Photographer | Tech Geek",
    avatarUrl: "https://via.placeholder.com/150/FFFF00/000000?text=CL",
    joinedDate: "May 2023",
    isOnline: true,
  },
  {
    name: "Sophia Martinez",
    username: "@sophiam",
    bio: "Digital Marketer | Yoga Enthusiast | Plant Parent",
    avatarUrl: "https://via.placeholder.com/150/FF00FF/FFFFFF?text=SM",
    joinedDate: "August 2022",
    isOnline: false,
  },
];


export default function MembersCommunityPage() {
  return (
    <div className=" p-4  bg-gray-200">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:max-w-screen-xl mx-auto">
        {/* Main content column - 70% width on desktop */}
        <div className="lg:w-[70%] mb-8 lg:mb-0 ">
          {members.map((el) => (
            <div className="mx-2 my-2">
              <ProfileCard
                key={el.username}
                name={el.name}
                username={el.username}
                bio={el.bio}
                avatarUrl={el.avatarUrl}
                joinedDate={el.joinedDate}
                isOnline={el.isOnline}
              ></ProfileCard>
            </div>
          ))}
        </div>

        {/* Sidebar column - 25% width on desktop */}
        <div className="lg:w-[25%]">
          <AboutSidebar />
        </div>
      </div>
    </div>
  );
}
