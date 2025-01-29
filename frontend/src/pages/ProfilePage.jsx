import { ProfileSidebar } from "../components/ProfileSidebar";
import Card from "../components/Cards";
export default function ProfilePage() {
  return (
    <div className="max-w-screen-xl mx-auto flex h-screen ">
      <ProfileSidebar
        name="Hamza Mehmood"
        username="@hamza-mehmood-6387"
        bio="A passionate learner."
        avatarUrl="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-oz2BDdWCJHCjyZbZcJaOTUhWQQSG6A.png"
        isOnline={true}
        joinDate="Oct 26, 2024"
        stats={{
          contributions: 1,
          followers: 0,
          following: 1,
        }}
      />
      <main className="flex-1 p-6">
        {/* Main content area (70% of space) */}
        <div className="h-full border-2 border-dashed border-gray-200 rounded-lg flex items-center justify-center">
          <p className="text-muted-foreground">
            List of Communities user joined
          </p>
        </div>
      </main>
    </div>
  );
}
