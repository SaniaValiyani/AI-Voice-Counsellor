import { Trophy, Flame } from "lucide-react";
import { useCounsellorStore } from "../../store/counsellorStore";

import { Camera } from "lucide-react";
import { uploadProfileImage } from "../../services/uploadService";

export default function ProfileBanner() {
  const profile = useCounsellorStore(
    (s) => s.studentProfile
  );

  const updateProfile =
  useCounsellorStore(
  (s)=>s.updateProfile
  );

  return (
    <div className="relative overflow-hidden rounded-3xl bg-linear-to-r from-cyan-600 via-blue-600 to-indigo-700 p-8 shadow-xl">

      <div className="absolute right-0 top-0 h-60 w-60 rounded-full bg-white/10 blur-3xl" />

      <div className="flex items-center gap-6 relative">

        <label className="relative cursor-pointer group">

        <img
        src={
        profile.profileImage
        ? `http://localhost:5000/${profile.profileImage.replace(/\\/g,"/")}`
        : "https://ui-avatars.com/api/?name=Student"
        }
        className="w-28 h-28 rounded-full object-cover border-4 border-white"
        />

        <div
        className="
        absolute
        inset-0
        rounded-full
        bg-black/50
        opacity-0
        group-hover:opacity-100
        transition
        flex
        items-center
        justify-center
        "
        >

        <Camera className="text-white"/>

        </div>

        <input
        hidden
        type="file"
        accept="image/*"

        onChange={async(e)=>{

        const file=e.target.files?.[0];

        if(!file)return;

        const student=
        await uploadProfileImage(file);

        updateProfile(student);

        }}

        />

        </label>

        <div className="space-y-2">

          <h1 className="text-4xl font-bold text-white">
            {profile.name || "Student"}
          </h1>

          <p className="text-cyan-100">
            {profile.careerGoal || "Career Goal not set"}
          </p>

          <div className="flex gap-4 mt-3 flex-wrap">

            <div className="flex items-center gap-2 bg-white/15 rounded-xl px-4 py-2">

              <Trophy size={18}/>

              Level {profile.level}
            </div>

            <div className="flex items-center gap-2 bg-white/15 rounded-xl px-4 py-2">

              <Flame size={18}/>

              {profile.learningStreak} Day Streak
            </div>

            <div className="bg-white/15 rounded-xl px-4 py-2">

              {profile.xp} XP
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}