import { Request, Response } from "express";
import bcrypt from "bcrypt";

import User from "../models/User";
import { generateToken } from "../utils/generateToken";

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
    // Create User
    // -------------------------

    const user =
      await User.create({
        fullName,
        email,
        password: hashedPassword,
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
    });

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