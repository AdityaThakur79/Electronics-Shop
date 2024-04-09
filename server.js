import express from "express";
import colors from "colors";
import dotenv from "dotenv";

//Configure Dotenv
dotenv.config();

//Rest Object
const app = express();

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
