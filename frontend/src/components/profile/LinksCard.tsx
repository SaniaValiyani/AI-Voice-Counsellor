import { useCounsellorStore } from "../../store/counsellorStore";

export default function LinksCard(){

const profile=
useCounsellorStore(s=>s.studentProfile);

const updateProfile=
useCounsellorStore(s=>s.updateProfile);

function LinkField(label:keyof typeof profile){

return(

<input

value={(profile[label] as string)||""}

onChange={(e)=>

updateProfile({

[label]:e.target.value,

})

}

placeholder={String(label)}

className="w-full rounded-xl bg-slate-800 p-3 text-white"

/>

);

}

return(

<div className="rounded-2xl bg-slate-900
border
border-slate-800
hover:border-cyan-500/40
hover:shadow-lg
hover:shadow-cyan-500/10
transition-all
duration-300 p-6 space-y-4">

<h2 className="text-white font-semibold">

Professional Links

</h2>

{LinkField("linkedin")}

{LinkField("github")}

{LinkField("portfolio")}

</div>

);

}