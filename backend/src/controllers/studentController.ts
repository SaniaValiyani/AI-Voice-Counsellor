import Student
from "../models/Student";

export async function saveProfile(
  req:any,
  res:any
) {

  try {

    const profile =
      await Student.findOneAndUpdate(
        {},
        req.body,
        {
          upsert:true,
          new:true,
        }
      );

    res.json(profile);

  } catch(error){

    res.status(500).json({
      error:
      "Failed"
    });
  }
}