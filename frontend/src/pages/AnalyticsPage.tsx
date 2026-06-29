import Sidebar from "../components/layout/Sidebar";
import AnalyticsOverview from "../components/analytics/AnalyticsOverview";
import ProgressChart from "../components/analytics/ProgressChart";
import SkillsChart from "../components/analytics/SkillsChart";


export default function AnalyticsPage() {
  return (
    <div className="flex min-h-screen bg-slate-950">
      <Sidebar />

      <main className="flex-1 p-8 overflow-auto">

      <h1 className="text-4xl font-bold text-white mb-8">

      📊 Analytics

      </h1>

      <AnalyticsOverview/>

      <div className="grid lg:grid-cols-2 gap-6 mt-8">

      <ProgressChart/>

      <SkillsChart/>

      </div>

      </main>
    </div>
  );
}