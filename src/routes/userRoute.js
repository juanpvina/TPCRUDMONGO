import express from "express";
import { verifyTokenMiddleware } from "../middlewares/verifyTokenMiddleware.js";
import {
  create,
  getAll,
  update,
  deleteUser,
  createView,
  loginView,
} from "../controllers/userController.js";
import { validate } from "../controllers/authController.js";


const userRoute = express.Router();

userRoute.post("/create", create);
userRoute.get("/getAll", verifyTokenMiddleware, getAll);
userRoute.put("/update/:id", verifyTokenMiddleware, update);
userRoute.delete("/deleteUser/:id", verifyTokenMiddleware, deleteUser);
userRoute.post("/login", validate);


userRoute.get("/create", createView);
userRoute.get("/login", loginView);



export default userRoute;

 /*

{
  "email": "jr@gmail.com",
  "password":"Javier000"
  }

  
  */