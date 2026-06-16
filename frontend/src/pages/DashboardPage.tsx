import DashboardLayout from "../components/layout/DashboardLayout";

import StatCard from "../components/dashboard/StatCard";
import LeadChart from "../components/dashboard/LeadChart";
import SentimentCard from "../components/dashboard/SentimentCard";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-4 gap-6">
        <StatCard
          title="Students"
          value="154"
        />

        <StatCard
          title="Hot Leads"
          value="42"
        />

        <StatCard
          title="Sessions"
          value="89"
        />

        <StatCard
          title="Languages"
          value="4"
        />
      </div>

      <div className="grid grid-cols-2 gap-6 mt-8">
        <LeadChart />

        <SentimentCard />
      </div>
    </DashboardLayout>
  );
}