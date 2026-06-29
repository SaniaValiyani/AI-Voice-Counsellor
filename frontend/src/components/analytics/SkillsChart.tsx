import { PieChart,Pie,Cell,ResponsiveContainer } from "recharts";

const COLORS=[

"#06b6d4",

"#22c55e",

"#e879f9",

"#f97316",

];

const data=[

{name:"Python",value:35},

{name:"React",value:25},

{name:"SQL",value:20},

{name:"AI",value:20},

];

export default function SkillsChart(){

return(

<div className="bg-slate-900 rounded-3xl p-6 h-87.5">

<h2 className="text-white text-xl font-semibold">

Skills

</h2>

<ResponsiveContainer>

<PieChart>

<Pie

data={data}

dataKey="value"

outerRadius={110}

>

{

data.map((_,index)=>

<Cell

key={index}

fill={COLORS[index]}

/>

)

}

</Pie>

</PieChart>

</ResponsiveContainer>

</div>

);

}