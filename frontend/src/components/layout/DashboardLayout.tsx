import { useEffect } from "react";

import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

import {
  getConversations,
} from "../../services/conversationService";

import {
  useConversationStore,
} from "../../store/conversationStore";
import { notify } from "../../utils/toast";

interface Props {
  children: React.ReactNode;
}

export default function DashboardLayout({
  children,
}: Props) {
  const setConversations =
    useConversationStore(
      (state) => state.setConversations
    );

  useEffect(() => {
    getConversations()
      .then(setConversations)
      .catch(() => {
        notify.error("Unable to load conversations.");
      });
  }, []);

  return (
    <div className="flex min-h-screen overflow-hidden bg-slate-950 text-white">
      <aside className="hidden lg:flex lg:w-80 shrink-0 border-r border-slate-800 bg-slate-950 p-6">
        <Sidebar />
      </aside>

      <div className="flex flex-1 flex-col overflow-hidden">
        <Topbar />

        <main className="flex-1 overflow-y-auto p-6 md:p-8">
          <div className="mx-auto w-full max-w-[1600px]">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}