import Sidebar from "../components/layout/Sidebar";

export default function ReportsPage() {
  return (
    <div className="flex min-h-screen bg-slate-950">
      <Sidebar />

      <main className="flex-1 p-8 overflow-auto">
        <h1 className="text-4xl font-bold text-white mb-8">
          📄 Reports
        </h1>

        <div className="text-slate-400">
          Career Reports coming next...
        </div>
      </main>
    </div>
  );
}