import { useEffect } from "react";
import DashboardLayout from "../components/layout/DashboardLayout";
import { useRecommendationStore } from "../store/recommendationStore";

export default function RecommendationsPage() {
  const { load } = useRecommendationStore();

  useEffect(() => {
    load();
  }, []);

  return (
    <DashboardLayout>
      <div>Recommendations</div>
    </DashboardLayout>
  );
}