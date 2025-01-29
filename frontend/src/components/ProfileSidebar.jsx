import { Calendar } from "lucide-react";
import user from "../assets/user.png";
export function ProfileSidebar({
  name,
  username,
  bio,
  isOnline = false,
  joinDate,
  stats,
}) {
  return (
    <div className="w-[20%] min-w-[320px] my-auto">
      <div className="w-full rounded-lg border bg-card shadow-sm">
        <div className="p-6 flex flex-col gap-4">
          {/* Avatar Section */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-yellow-400 -z-10 scale-110" />
              <img src={user} alt={name} className="w-40 h-40 rounded-full" />
            </div>
          </div>

          {/* Profile Info */}
          <div className="text-center space-y-2">
            <h2 className="text-xl font-semibold">{name}</h2>
            <p className="text-muted-foreground">{username}</p>
            <p>{bio}</p>
          </div>

          {/* Online Status & Join Date */}
          <div className="space-y-2">
            {isOnline && (
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-sm">Online now</span>
              </div>
            )}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <span>Joined {joinDate}</span>
            </div>
          </div>

          <hr className="border-t border-border" />

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-xl font-medium">{stats.contributions}</p>
              <p className="text-sm text-muted-foreground">Contributions</p>
            </div>
            <div>
              <p className="text-xl font-medium">{stats.followers}</p>
              <p className="text-sm text-muted-foreground">Followers</p>
            </div>
            <div>
              <p className="text-xl font-medium">{stats.following}</p>
              <p className="text-sm text-muted-foreground">Following</p>
            </div>
          </div>

          {/* Edit Profile Button */}
          <button className="w-full px-4 py-2 border border-border rounded-md hover:bg-muted transition-colors">
            EDIT PROFILE
          </button>
        </div>
      </div>
    </div>
  );
}
