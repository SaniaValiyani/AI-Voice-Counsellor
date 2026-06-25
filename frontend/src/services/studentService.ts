export async function saveProfile(
 profile:any
){

 await fetch(
  "http://localhost:5000/api/student/save",
  {
   method:"POST",

   headers:{
    "Content-Type":
    "application/json",
   },

   body:
   JSON.stringify(profile),
  }
 );
}