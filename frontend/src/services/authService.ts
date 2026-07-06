import api from "./api";

export async function login(data:any){

const res=
await api.post(
"/auth/login",
data
);

return res.data;

}

export async function register(data:any){

const res=
await api.post(
"/auth/register",
data
);

return res.data;

}