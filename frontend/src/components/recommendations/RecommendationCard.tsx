interface Props{

title:string;

items:string[];

}

export default function RecommendationCard({

title,

items,

}:Props){

return(

<div className="rounded-2xl bg-slate-900 border border-slate-800 p-6">

<h2 className="text-xl font-semibold text-white mb-4">

{title}

</h2>

<div className="space-y-3">

{items.map((item,index)=>(

<div

key={index}

className="rounded-lg bg-slate-800 px-4 py-3 text-slate-200"

>

{item}

</div>

))}

</div>

</div>

);

}