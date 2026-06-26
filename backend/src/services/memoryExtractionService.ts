import UserMemory
from "../models/UserMemory";

const patterns = [

{
category:"Career Goal",
regex:
/I want to become (.+)/i,
},

{
category:"Interest",
regex:
/I like (.+)/i,
},

{
category:"Programming Language",
regex:
/I know (.+)/i,
},

{
category:"Certification",
regex:
/I completed (.+)/i,
},

{
category:"Preferred Domain",
regex:
/I am interested in (.+)/i,
},

{
category:"Favorite Subject",

regex:
/My favorite subject is (.+)/i,

},

{
category:"Dream Company",

regex:
/I want to work at (.+)/i,

},

{
category:"Learning Style",

regex:
/I prefer (.+) tutorials/i,

},

{
category:"Strength",

regex:
/I am good at (.+)/i,

},

{
category:"Weakness",

regex:
/I struggle with (.+)/i,
},
];

export async function
extractMemory(
message:string
){

for(
const pattern
of patterns
){

const match =
message.match(
pattern.regex
);

if(match){

const value =
match[1].trim();

if(

value.length<3

){

continue;

}

const exists =
await UserMemory.findOne({

category:
pattern.category,

value,

});

if(!exists){

await UserMemory.create({

category:
pattern.category,

value,

});

}

}

}

}