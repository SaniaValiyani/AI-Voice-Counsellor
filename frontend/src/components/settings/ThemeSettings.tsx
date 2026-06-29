import { useCounsellorStore } from "../../store/counsellorStore";

export default function ThemeSettings(){

const{

settings,

updateSettings,

}=useCounsellorStore();

return(

<div className="bg-slate-900 rounded-3xl p-6">

<h2 className="text-white text-xl font-semibold">

🎨 Theme

</h2>

<select

className="w-full mt-5 p-3 rounded-xl bg-slate-800 text-white"

value={settings.theme}

onChange={(e)=>

updateSettings({

theme:e.target.value,

})

}

>

<option value="dark">

Dark

</option>

<option value="light">

Light

</option>

</select>

</div>

);

}