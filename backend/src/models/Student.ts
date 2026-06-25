import mongoose
from "mongoose";

const studentSchema =
new mongoose.Schema({

  careerGoal: String,

  interests: [String],

  skills: [String],

  achievements: [String],

  xp: Number,

  level: Number,

  goalProgress: Number,

  learningStreak: Number,

  careerReadiness: Number,

  goals: [
    {
      id: String,
      title: String,
      completed: Boolean,
    },
  ],

},{
  timestamps:true
});

export default mongoose.model(
  "Student",
  studentSchema
);