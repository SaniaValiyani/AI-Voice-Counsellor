export async function saveMessage(
 message:any
){

 await fetch(
  "http://localhost:5000/api/chat-history/save",
  {
   method:"POST",

   headers:{
    "Content-Type":
    "application/json",
   },

   body:
   JSON.stringify(
    message
   ),
  }
 );
}

export async function loadMessages(){

 const response =
 await fetch(
  "http://localhost:5000/api/chat-history/all"
 );

 return response.json();
}