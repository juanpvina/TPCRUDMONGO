import { Router } from "express";
import {
  create,
  deleteProduct,
  getAll,
  update,
} from "../controllers/productController.js";
import { verifyTokenMiddleware } from "../middlewares/verifyTokenMiddleware.js";

const productRoute = Router();

productRoute.post("/create", verifyTokenMiddleware, create);
productRoute.get("/getAll", verifyTokenMiddleware, getAll);
productRoute.delete("/deleteProduct/:id", verifyTokenMiddleware, deleteProduct);
productRoute.put("/update/:id", verifyTokenMiddleware, update);
export default productRoute;