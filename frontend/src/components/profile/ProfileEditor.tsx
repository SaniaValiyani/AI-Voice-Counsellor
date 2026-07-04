import { useCounsellorStore } from "../../store/counsellorStore";

export default function ProfileEditor() {

const {

studentProfile,

updateProfile,

persistProfile,

}=useCounsellorStore();

return(

<div className="bg-slate-900 rounded-3xl p-8 space-y-6">

<h2 className="text-2xl font-bold text-white">

Personal Information

</h2>

<input

value={studentProfile.careerGoal}

onChange={(e)=>

updateProfile({

careerGoal:e.target.value

})

}

placeholder="Career Goal"

className="w-full rounded-xl bg-slate-800 p-4 text-white"

/>

<input

value={studentProfile.educationLevel}

onChange={(e)=>

updateProfile({

educationLevel:e.target.value

})

}

placeholder="Education"

className="w-full rounded-xl bg-slate-800 p-4 text-white"

/>

<button

onClick={persistProfile}

className="rounded-xl bg-cyan-500 px-8 py-3 text-black font-semibold"

>

Save Profile

</button>

</div>

);

}