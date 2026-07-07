import { useEffect } from "react";
import type { ReactNode } from "react";

import {
  getCurrentUser,
} from "../services/authService";

import {
  useAuthStore,
} from "../store/authStore";

interface Props{

children:ReactNode;

}

export default function AppInitializer({

children,

}:Props){

const token=

useAuthStore(s=>s.token);

const setUser=

useAuthStore(s=>s.setUser);

useEffect(()=>{

if(!token)return;

getCurrentUser()

.then(setUser)

.catch(()=>{});

},[]);

return<>{children}</>;

}