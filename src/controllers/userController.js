//Métodos de usuario
import User from "../models/userModel.js";

export const getAll = async (req, res) => {
  try {
    const users = await User.find();
    if (users.length === 0) {
      return res.status(404).json({ message: "No hay usuarios" });
    }
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: "internal server error" });
  }
};


export const create = async (req, res) => {
  try {
    const userData = new User(req.body);
    const { email } = userData;
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res
        .status(400)
        .json({ message: `Ya existe un usuario con el email: ${email} .` });
    }
    await userData.save();
    res.render('home');
  } catch (error) {
    res.status(500).json({ message: "internal server error", error });
  }
};

export const update = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await User.findOne({ _id: id });
    if (!userExist) {
      return res.status(404).json({ message: "El usuario no existe" });
    }
    const updateUser = await User.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.status(201).json(updateUser);
  } catch (error) {
    res.status(500).json({ error: "internal server error" });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const _id = req.params.id;
    const userExist = await User.findOne({ _id });
    if (!userExist) {
      return res.status(404).json({ message: "El usuario no existe" });
    }
    await User.findByIdAndDelete(_id);
    res.status(201).json({ message: "Usuario eliminado" });
  } catch (error) {
    res.status(500).json({ error: "internal server error" });
  }
};


export const createView = (req, res) => {
  res.render("create");
}
export const loginView = (req, res) => {
  res.render("login");
}