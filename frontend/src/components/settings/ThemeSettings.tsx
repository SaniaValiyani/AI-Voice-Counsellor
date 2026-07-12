import { useCounsellorStore } from "../../store/counsellorStore";
import { useThemeStore } from "../../store/themeStore";

export default function ThemeSettings(){
  const {
    settings,
    updateSettings,
  } = useCounsellorStore();

  const { darkMode, toggleTheme } = useThemeStore();

  return(
    <div className="bg-slate-900 rounded-3xl p-6">
      <h2 className="text-white text-xl font-semibold">
        🎨 Theme
      </h2>

      <select
        className="w-full mt-5 p-3 rounded-xl bg-slate-800 text-white"
        value={settings.theme}
        onChange={(e) => {
          const newTheme = e.target.value as "dark" | "light";
          updateSettings({
            theme: newTheme,
          });

          if ((newTheme === "dark") !== darkMode) {
            toggleTheme();
          }
        }}
      >
        <option value="dark">Dark</option>
        <option value="light">Light</option>
      </select>
    </div>
  );
}
