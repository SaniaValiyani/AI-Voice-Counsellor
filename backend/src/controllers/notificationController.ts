import { Response } from "express";

import Notification from "../models/Notification";

import { AuthRequest } from "../middleware/authMiddleware";

export async function getNotifications(

req:AuthRequest,

res:Response

){

const notifications=

await Notification.find({

userId:req.userId,

})

.sort({

createdAt:-1,

})

.limit(30);

res.json(notifications);

}