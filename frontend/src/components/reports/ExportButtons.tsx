import { Download } from "lucide-react";

export default function ExportButtons(){

return(

<div className="flex gap-4 mt-8">

<button

className="bg-cyan-500 hover:bg-cyan-400 transition px-6 py-3 rounded-xl text-black font-semibold flex items-center gap-2"

>

<Download size={18}/>

Export PDF

</button>

<button

className="bg-green-500 hover:bg-green-400 transition px-6 py-3 rounded-xl text-black font-semibold flex items-center gap-2"

>

<Download size={18}/>

Export DOCX

</button>

</div>

);

}