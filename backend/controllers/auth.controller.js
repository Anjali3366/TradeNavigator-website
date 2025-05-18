import User from "../models/user.model.js";
import { generateTokenAndSetCookie } from "../config/generateToken.js";
export const test = (req, res) => {
  res.send("Backend is running !");
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Invalid E-mail format " });
    }
    if (!email || !password) {
      return res.status(400).json({ error: "Both field required  ! " });
    }

    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ error: "Email already exist! " });
    }
    const newUser = new User({
      email,
      password,
    });

    if (newUser) {
      generateTokenAndSetCookie(newUser._id, res);
      await newUser.save();
      res.status(200).json({ newUser });
    }
  } catch (err) {
    console.log("Error in login controller : ", err.message);
    res
      .status(500)
      .json({ success: "false", error: "Internal Server Error ! " });
  }
};

export const logout = async (req, res) => {
  try {
    res.cookie("auth_token", " ", {
      maxAge: 0,
    });
    res.status(200).json({ message: "Logged out Successfully ! " });
  } catch (err) {
    console.log("Error in Logout Controller : ", err.message);
    res.status(500).json({ error: "Internal Server Error ! " });
  }
};
