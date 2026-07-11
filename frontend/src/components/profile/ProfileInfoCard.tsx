import { useCounsellorStore } from "../../store/counsellorStore";

export default function ProfileInfoCard() {
  const profile =
    useCounsellorStore(
      (s) => s.studentProfile
    );

  const updateProfile =
    useCounsellorStore(
      (s) => s.updateProfile
    );

  function Field(
    label: string,
    key: keyof typeof profile
  ) {
    return (
      <div className="space-y-1">
        <label className="text-slate-400 text-sm">
          {label}
        </label>

        <input
          value={(profile[key] as string) || ""}
          onChange={(e) =>
            updateProfile({
              [key]: e.target.value,
            })
          }
          className="w-full rounded-xl bg-slate-800 border border-slate-700 px-4 py-3 text-white"
        />
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-slate-900
border
border-slate-800
hover:border-cyan-500/40
hover:shadow-lg
hover:shadow-cyan-500/10
transition-all
duration-300 p-6 space-y-5">
      <h2 className="text-xl font-semibold text-white">
        Personal Information
      </h2>

      {Field("Name", "name")}
      {Field("College", "college")}
      {Field("Branch", "branch")}
      {Field("Year", "year")}
      {Field("Location", "location")}

      <div>
        <label className="text-slate-400 text-sm">
          Bio
        </label>

        <textarea
          rows={4}
          value={profile.bio}
          onChange={(e) =>
            updateProfile({
              bio: e.target.value,
            })
          }
          className="w-full rounded-xl bg-slate-800 border border-slate-700 px-4 py-3 text-white"
        />
      </div>
    </div>
  );
}