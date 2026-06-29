import { useCounsellorStore } from "../../store/counsellorStore";

export default function NotificationSettings(){

const{

settings,

updateSettings,

}=useCounsellorStore();

return(

<div className="bg-slate-900 rounded-3xl p-6">

<h2 className="text-white text-xl font-semibold">

🔔 Notifications

</h2>

<label

className="flex gap-4 mt-6 text-white"

>

<input

type="checkbox"

checked={settings.notifications}

onChange={(e)=>

updateSettings({

notifications:e.target.checked,

})

}

/>

Enable Notifications

</label>

</div>

);

}