import { Router } from "express";
import { getAll, 
    create, 
    deleteCategory,
    update } from "../controllers/categoryController.js";
import { verifyTokenMiddleware } from "../middlewares/verifyTokenMiddleware.js";

const categoryRoute = Router();

categoryRoute.get("/getAll", getAll);
categoryRoute.post("/create", verifyTokenMiddleware, create);
categoryRoute.put("/update/:id", verifyTokenMiddleware, update);
categoryRoute.delete("/deleteCategory/:id", verifyTokenMiddleware, deleteCategory);

export default categoryRoute;