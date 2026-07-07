import { useEffect } from "react";

import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

import {
  getConversations,
} from "../../services/conversationService";

import {
  useConversationStore,
} from "../../store/conversationStore";

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
      .catch(console.error);
  }, []);

  return (
    <div className="flex h-screen overflow-hidden">
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