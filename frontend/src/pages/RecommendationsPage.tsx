import { useEffect } from "react";

import DashboardLayout from "../components/layout/DashboardLayout";

import RecommendationCard from "../components/recommendations/RecommendationCard";

import ResourceCard from "../components/recommendations/ResourceCard";

import { useRecommendationStore } from "../store/recommendationStore";

export default function RecommendationsPage(){

const{

data,

loading,

load,

}=useRecommendationStore();

useEffect(()=>{

load();

},[]);

if(loading){

return(

<DashboardLayout>

<div className="text-white">

Loading recommendations...

</div>

</DashboardLayout>

);

}

if(!data){

return(

<DashboardLayout>

<div className="text-white">

No recommendations available.

</div>

</DashboardLayout>

);

}

return(

<DashboardLayout>

<div className="space-y-6">

<RecommendationCard
title="Career Paths"
items={data.careerPaths}
/>

<RecommendationCard
title="Skills To Learn"
items={data.skillsToLearn}
/>

<RecommendationCard
title="Courses"
items={data.courses}
/>

<RecommendationCard
title="Certifications"
items={data.certifications}
/>

<RecommendationCard
title="Projects"
items={data.projects}
/>

<div className="grid gap-4">

{data.resources.map(resource=>(

<ResourceCard

key={resource.url}

title={resource.title}

url={resource.url}

/>

))}

</div>

</div>

</DashboardLayout>

);

}