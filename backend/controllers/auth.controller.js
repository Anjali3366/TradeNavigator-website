import User from "../models/user.model.js";
import { genSalt, hash, compare } from "bcryptjs";
import { generateTokenAndSetCookie } from "../config/generateToken.js";
export const test = (req, res) => {
  res.send("Backend is running !");
};

export const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Invalid E-mail format " });
    }
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: "Username already exist! " });
    }
    if (!email || !password || !username) {
      return res.status(400).json({ error: "All field required  ! " });
    }

    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ error: "Email already exist! " });
    }

    if (password.length < 6) {
      return res
        .status(400)
        .json({ error: "Password should be 6 character long ! " });
    }
    // hashed the password

    const salt = await genSalt(10);
    const hashedPassword = await hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });
    console.log("user created !!");

    if (newUser) {
      generateTokenAndSetCookie(newUser._id, res);
      await newUser.save();
      res.status(200).json({
        success: true,
        message: "User Register successfully !",
        data: newUser,
      });
    }
  } catch (err) {
    console.log("Error in login controller : ", err.message);
    res
      .status(500)
      .json({ success: "false", error: "Internal Server Error ! " });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    const isPasswordCorrect = await compare(password, user?.password || "");
    if (!user || !isPasswordCorrect) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    generateTokenAndSetCookie(user._id, res);

    res.status(200).json({
      success: true,
      message: "User Login successfully !",
      data: {
        user,
      },
    });
  } catch (err) {
    console.log("Error in Login controller: ", err.message);
    res.status(500).json({ error: "Internal Server Error" });
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
