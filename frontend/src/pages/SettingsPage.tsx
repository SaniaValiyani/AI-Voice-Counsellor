import Sidebar from "../components/layout/Sidebar";
import LanguageSettings from "../components/settings/LanguageSettings";
import VoiceSettings from "../components/settings/VoiceSettings";
import AISettings from "../components/settings/AISettings";
import NotificationSettings from "../components/settings/NotificationSettings";
import ThemeSettings from "../components/settings/ThemeSettings";

export default function SettingsPage() {
  return (
    <div className="flex min-h-screen bg-slate-950">
      <Sidebar />

      <main className="flex-1 p-8">

      <h1 className="text-4xl font-bold text-white mb-8">

      ⚙️ Settings

      </h1>

      <div className="grid lg:grid-cols-2 gap-6">

      <LanguageSettings/>

      <VoiceSettings/>

      <AISettings/>

      <NotificationSettings/>

      <ThemeSettings/>

      </div>

      </main>
    </div>
  );
}