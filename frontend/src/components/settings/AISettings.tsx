import { useCounsellorStore } from "../../store/counsellorStore";

const personalities=[

"Friendly",

"Professional",

"Motivational",

"Concise",

];

export default function AISettings(){

const{

settings,

updateSettings,

}=useCounsellorStore();

return(

<div className="bg-slate-900 rounded-3xl p-6">

<h2 className="text-white text-xl font-semibold">

🤖 AI Personality

</h2>

<div className="mt-5 space-y-3">

{

personalities.map(personality=>(

<label

key={personality}

className="flex gap-3 text-white"

>

<input

type="radio"

checked={

settings.aiPersonality===personality

}

onChange={()=>

updateSettings({

aiPersonality:personality,

})

}

/>

{personality}

</label>

))

}

</div>

</div>

);

}