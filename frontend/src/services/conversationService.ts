const API =
"http://localhost:5000";

export async function getConversations(){

const response =
await fetch(

`${API}/conversation`,

{

headers:{

Authorization:

`Bearer ${
localStorage.getItem("token")
}`

}

}

);

if(!response.ok){

throw new Error(
"Unable to load conversations"
);

}

return response.json();

}