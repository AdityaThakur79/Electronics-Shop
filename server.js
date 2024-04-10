import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";

//Configure Dotenv
dotenv.config();

//Database Connection
connectDB();

//Rest Object
const app = express();

//middlewares
app.use(express.json());
app.use(morgan("dev"));

//rotues
app.use("/api/auth/", authRoutes);

//Rest API
app.get("/", (req, res) => {
  res.send("<h1>Hi You Are On Home Page</h1>");
});

//PORT
const PORT = process.env.PORT || 8080;

//Run Listen
app.listen(PORT, () => {
  console.log(`Server ${PORT} par chal raha hain`.bgWhite.black);
});
