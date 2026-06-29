import { useCounsellorStore } from "../../store/counsellorStore";

export default function VoiceSettings(){

const{

settings,

updateSettings,

}=useCounsellorStore();

return(

<div className="bg-slate-900 rounded-3xl p-6">

<h2 className="text-white text-xl font-semibold">

🎤 Voice

</h2>

<div className="mt-6">

<p className="text-slate-400">

Speed

</p>

<input

type="range"

min="0.5"

max="2"

step="0.1"

value={settings.voiceRate}

onChange={(e)=>

updateSettings({

voiceRate:Number(e.target.value),

})

}

/>

</div>

<div className="mt-5">

<p className="text-slate-400">

Pitch

</p>

<input

type="range"

min="0"

max="2"

step="0.1"

value={settings.voicePitch}

onChange={(e)=>

updateSettings({

voicePitch:Number(e.target.value),

})

}

/>

</div>

</div>

);

}