import { create } from "zustand";

import { getDashboardAnalytics }
from "../services/dashboardAnalyticsService";

export const useDashboardStore =
create((set)=>({

analytics:null,

loading:false,

load:async()=>{

set({
loading:true,
});

const analytics=
await getDashboardAnalytics();

set({

analytics,

loading:false,

});

},

}));