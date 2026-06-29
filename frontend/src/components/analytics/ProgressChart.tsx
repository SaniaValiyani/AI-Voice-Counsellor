import {

LineChart,
Line,
XAxis,
YAxis,
ResponsiveContainer,
Tooltip,

} from "recharts";

const data=[

{week:"W1",xp:20},

{week:"W2",xp:50},

{week:"W3",xp:90},

{week:"W4",xp:150},

];

export default function ProgressChart(){

return(

<div className="bg-slate-900 rounded-3xl p-6 h-87.5">

<h2 className="text-white text-xl font-semibold mb-6">

XP Growth

</h2>

<ResponsiveContainer>

<LineChart data={data}>

<XAxis dataKey="week"/>

<YAxis/>

<Tooltip/>

<Line

type="monotone"

dataKey="xp"

stroke="#06b6d4"

strokeWidth={4}

/>

</LineChart>

</ResponsiveContainer>

</div>

);

}