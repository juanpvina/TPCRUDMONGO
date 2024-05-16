import express from "express";
import bodyParser from "body-parser";
import { connectDB } from "./db/connection.js";
import { PORT } from "./config.js";
import userRoute from "./routes/userRoute.js";
import productRoute from "./routes/productRoute.js";
import categoryRoute from "./routes/categoryRoute.js";
import { engine } from 'express-handlebars';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views","./src/views")

connectDB();

app.get("/", (req, res) => {
  res.render("home");
});

app.use("/api/user", userRoute);
app.use("/api/product", productRoute);
app.use("/api/category", categoryRoute);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
  });