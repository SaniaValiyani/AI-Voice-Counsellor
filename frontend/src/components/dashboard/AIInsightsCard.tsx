import {
 useCounsellorStore
}
from "../../store/counsellorStore";

export default function AIInsightsCard() {

 const {
  studentProfile
 } =
 useCounsellorStore();

 const completed =
 studentProfile.goals?.filter(
  goal =>
   goal.completed
 ).length || 0;

 return (
  <div
   className="
   bg-linear-to-r
   from-purple-500/20
   to-cyan-500/20
   rounded-2xl
   p-5
   "
  >
   <h2>
    🤖 AI Insights
   </h2>

   <p
    className="
    mt-3
    "
   >
    You've completed
    {` ${completed} `}
    goals and reached
    level
    {` ${studentProfile.level}.`}
   </p>
  </div>
 );
}