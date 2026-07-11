interface Resource{

title:string;

url:string;

}

export default function ResourceCard({

title,

url,

}:Resource){

return(

<a

href={url}

target="_blank"

rel="noreferrer"

className="block rounded-xl bg-slate-900
border
border-slate-800
hover:border-cyan-500/40
hover:shadow-lg
hover:shadow-cyan-500/10
transition-all
duration-300 p-4 hover:border-cyan-500 transition"

>

<h3 className="text-cyan-400">

{title}

</h3>

<p className="text-slate-400 text-sm">

{url}

</p>

</a>

);

}