import express from "express";
import { verifyTokenMiddleware } from "../middlewares/verifyTokenMiddleware.js";
import {
  create,
  getAll,
  update,
  deleteUser,
} from "../controllers/userController.js";
import { validate } from "../controllers/authController.js";


const userRoute = express.Router();

userRoute.post("/create", create);
userRoute.get("/create", (req,res)=> { res.render("create")});

userRoute.get("/getAll", verifyTokenMiddleware, getAll);
userRoute.put("/update/:id", verifyTokenMiddleware, update);
userRoute.delete("/deleteUser/:id", verifyTokenMiddleware, deleteUser);
userRoute.post("/login", validate);


export default userRoute;

 /*

{
  "email": "jr@gmail.com",
  "password":"Javier000"
  }

  
  */