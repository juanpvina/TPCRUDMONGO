import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const validate = async (req, res) => {
  try {
    const userFound = await User.findOne({ email: req.body.email });
    if (!userFound) {
      res
        .status(400)
        .json({ message: "Email o password incorrectas"});
    }
    if (bcrypt.compareSync(req.body.password, userFound.password)) {
      const payload = {
        userId: userFound._id,
        userEmail: userFound.email,
      };
      const token = jwt.sign(payload, "secreto", { expiresIn: "1h" });
      res.status(200).json({ message: `Logeado Correctamente` ,
        token: token,
      });

    } else {
      res
        .status(400)
        .json({ message: "Email o password incorrectas" });
      return;
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};