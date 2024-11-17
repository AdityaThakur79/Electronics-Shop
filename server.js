import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import cors from "cors";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import path from "path";

//Configure Dotenv
dotenv.config();

//Database Connection
connectDB();

//Rest Object
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//rotues
app.use("/api/auth/", authRoutes);
app.use("/api/category/", categoryRoutes);
app.use("/api/product/", productRoutes);

//static files
app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

//Rest API
// app.get("/", (req, res) => {
//   res.send("<h1>Hi You Are On Home Page</h1>");
// });

//PORT
const PORT = process.env.PORT || 8080;

//Run Listen
app.listen(PORT, () => {
  console.log(`Server chal raha h bhai ${PORT} pe`.bgWhite.black);
});
