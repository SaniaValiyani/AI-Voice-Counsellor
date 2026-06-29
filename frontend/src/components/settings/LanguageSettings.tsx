import { useCounsellorStore } from "../../store/counsellorStore";

export default function LanguageSettings(){

const{

settings,

updateSettings,

}=useCounsellorStore();

return(

<div className="bg-slate-900 rounded-3xl p-6">

<h2 className="text-white text-xl font-semibold">

🌍 Language

</h2>

<select

value={settings.language}

onChange={(e)=>

updateSettings({

language:e.target.value,

})

}

className="mt-5 w-full rounded-xl bg-slate-800 text-white p-3"

>

<option>English</option>

<option>Hindi</option>

<option>Gujarati</option>

<option>Marathi</option>

</select>

</div>

);

}