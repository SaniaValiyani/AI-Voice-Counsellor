import { useCounsellorStore } from "../../store/counsellorStore";

export default function CareerReportCard(){

const profile=

useCounsellorStore(

state=>state.studentProfile

);

return(

<div className="bg-slate-900 rounded-3xl p-8">

<h1 className="text-3xl font-bold text-white">

Career Progress Report

</h1>

<div className="mt-8 space-y-4 text-slate-300">

<p>

Career Goal

<strong className="text-white">

{" "}

{profile.careerGoal}

</strong>

</p>

<p>

Current Level

<strong className="text-white">

{" "}

{profile.level}

</strong>

</p>

<p>

Career Readiness

<strong className="text-cyan-400">

{" "}

{profile.careerReadiness}%

</strong>

</p>

<p>

XP

<strong>

{" "}

{profile.xp}

</strong>

</p>

<p>

Learning Streak

<strong>

{" "}

{profile.learningStreak}

days

</strong>

</p>

</div>

</div>

);

}