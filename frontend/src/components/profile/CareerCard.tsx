import { useCounsellorStore } from "../../store/counsellorStore";

export default function CareerCard() {

  const profile =
    useCounsellorStore(s=>s.studentProfile);

  const updateProfile =
    useCounsellorStore(s=>s.updateProfile);

  return(

    <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 space-y-4">

      <h2 className="text-xl text-white font-semibold">
        Career Information
      </h2>

      <input
        value={profile.careerGoal}
        onChange={(e)=>
          updateProfile({
            careerGoal:e.target.value
          })
        }
        placeholder="Career Goal"
        className="w-full rounded-xl bg-slate-800 p-3 text-white"
      />

      <input
        value={profile.educationLevel}
        onChange={(e)=>
          updateProfile({
            educationLevel:e.target.value
          })
        }
        placeholder="Education Level"
        className="w-full rounded-xl bg-slate-800 p-3 text-white"
      />

    </div>

  );

}