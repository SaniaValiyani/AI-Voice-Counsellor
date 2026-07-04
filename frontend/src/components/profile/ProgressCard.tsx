import { useCounsellorStore } from "../../store/counsellorStore";

export default function ProgressCard(){

const p=
useCounsellorStore(s=>s.studentProfile);

return(

<div className="rounded-2xl bg-slate-900 border border-slate-800 p-6">

<h2 className="text-white font-semibold mb-5">

Progress

</h2>

<div className="space-y-4">

<div>

<p className="text-slate-400">

Career Readiness

</p>

<div className="h-3 bg-slate-700 rounded-full overflow-hidden">

<div

style={{

width:`${p.careerReadiness}%`

}}

className="bg-cyan-500 h-full"

/>

</div>

</div>

<div>

<p className="text-slate-400">

Goal Progress

</p>

<div className="h-3 bg-slate-700 rounded-full overflow-hidden">

<div

style={{

width:`${p.goalProgress}%`

}}

className="bg-green-500 h-full"

/>

</div>

</div>

</div>

</div>

);

}