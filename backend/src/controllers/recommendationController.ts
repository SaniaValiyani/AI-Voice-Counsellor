import { Response } from "express";

import Student from "../models/Student";

import { AuthRequest } from "../middleware/authMiddleware";

import { generateRecommendations } from "../services/recommendationService";

export async function recommendationController(
req:AuthRequest,
res:Response
){

try{

const student=

await Student.findOne({

email:req.userEmail,

});

if(!student){

return res.status(404).json({

error:"Student not found",

});

}

const recommendations=

await generateRecommendations(student);

return res.json(recommendations);

}

catch(error){

console.error(error);

return res.status(500).json({

error:"Failed to generate recommendations",

});

}

}