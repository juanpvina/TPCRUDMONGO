import express from "express";
import {validate} from "../controllers/authController.js";

const authRoute = express.Router();

authRoute.post("/login", validate);

export default authRoute;

  /*

{
  "email": "jr@gmail.com",
  "password":"Javier000"
  }

  
  */