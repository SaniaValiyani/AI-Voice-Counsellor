import { useCounsellorStore } from "../../store/counsellorStore";
import { useLanguageStore } from "../../store/languageStore";

export default function LanguageSettings(){
  const {
    settings,
    updateSettings,
  } = useCounsellorStore();

  const { setLanguage } = useLanguageStore();

  return(
    <div className="bg-slate-900 rounded-3xl p-6">
      <h2 className="text-white text-xl font-semibold">
        🌍 Language
      </h2>

      <select
        value={settings.language}
        onChange={(e) => {
          const newLanguage = e.target.value as
            | "English"
            | "Hindi"
            | "Gujarati"
            | "Marathi";

          updateSettings({
            language: newLanguage,
          });
          setLanguage(newLanguage);
        }}
        className="mt-5 w-full rounded-xl bg-slate-800 text-white p-3"
      >
        <option value="English">English</option>
        <option value="Hindi">Hindi</option>
        <option value="Gujarati">Gujarati</option>
        <option value="Marathi">Marathi</option>
      </select>
    </div>
  );
}
