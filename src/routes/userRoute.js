import express from "express";
import { verifyTokenMiddleware } from "../middlewares/verifyTokenMiddleware.js";
import {
  create,
  getAll,
  update,
  deleteUser,
} from "../controllers/userController.js";

const userRoute = express.Router();

userRoute.post("/create", create);
userRoute.get("/getAll", verifyTokenMiddleware, getAll);
userRoute.put("/update/:id", verifyTokenMiddleware, update);
userRoute.delete("/deleteUser/:id", verifyTokenMiddleware, deleteUser);

export default userRoute;