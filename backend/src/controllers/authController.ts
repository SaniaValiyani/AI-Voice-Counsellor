import { Request, Response } from "express";
import bcrypt from "bcrypt";

import User from "../models/User";
import Student from "../models/Student";
import { generateToken } from "../utils/generateToken";
import { AuthRequest } from "../middleware/authMiddleware";


export async function register(
  req: Request,
  res: Response
) {
  try {
    const {
      fullName,
      email,
      password,
    } = req.body;

    // -------------------------
    // Validation
    // -------------------------

    if (
      !fullName ||
      !email ||
      !password
    ) {
      return res.status(400).json({
        error: "All fields are required",
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        error:
          "Password must be at least 6 characters",
      });
    }

    // -------------------------
    // Duplicate Email Check
    // -------------------------

    const existingUser =
      await User.findOne({
        email,
      });

    if (existingUser) {
      return res.status(409).json({
        error:
          "Email already registered",
      });
    }

    // -------------------------
    // Hash Password
    // -------------------------

    const hashedPassword =
      await bcrypt.hash(
        password,
        10
      );

    // -------------------------
    // Create Student
    // -------------------------

    // 1. Create empty student profile first
    const student =
    await Student.create({

    name:fullName,

    email,

    password:hashedPassword,

    preferredLanguage:"English",

    });

    // 2. Create user linked to student
    const user = await User.create({
      fullName,
      email,
      password: hashedPassword,
      profile: student._id,
    });

    // -------------------------
    // JWT
    // -------------------------

    const token =
      generateToken(
        user._id.toString()
      );

    return res.status(201).json({
      token,

      user: {
        id: user._id,

        fullName: user.fullName,

        email: user.email,

        profile: user.profile,
      },
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      error:
        "Registration failed",
    });
  }
}

export async function login(
  req: Request,
  res: Response
) {
  try {
    const {
      email,
      password,
    } = req.body;

    // Validation
    if (!email || !password) {
      return res.status(400).json({
        error: "Email and password are required",
      });
    }

    // Find user
    const user = await User.findOne({
      email,
    }).populate("profile");

    if (!user) {
      return res.status(401).json({
        error: "Invalid email or password",
      });
    }

    // Compare password
    const passwordMatches =
      await bcrypt.compare(
        password,
        user.password
      );

    if (!passwordMatches) {
      return res.status(401).json({
        error: "Invalid email or password",
      });
    }

    // Generate JWT
    const token = generateToken(
      user._id.toString()
    );

    return res.json({
      token,

      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        profile: user.profile,
      },
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      error: "Login failed",
    });
  }
}

export async function getCurrentUser(
  req: AuthRequest,
  res: Response
) {
  try {

    const user =
      await User.findById(req.userId)
      .populate("profile");

    if (!user) {

      return res.status(404).json({
        error: "User not found",
      });

    }

    res.json({

      id: user._id,

      fullName: user.fullName,

      email: user.email,

      profile: user.profile,

    });

  } catch {

    res.status(500).json({
      error: "Unable to load user",
    });

  }
}