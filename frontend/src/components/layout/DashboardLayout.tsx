import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

interface Props {
  children: React.ReactNode;
}

export default function DashboardLayout({
  children,
}: Props) {
  return (
    <div className="flex app-bg min-h-screen">
      <Sidebar />

      <div className="flex-1 overflow-hidden">
        <Topbar />

        <div
          className="
          p-8
          overflow-y-auto
          h-[calc(100vh-80px)]
          "
        >
          {children}
        </div>
      </div>
    </div>
  );
}