import express from "express";
import {
  loginController,
  registerController,
  testController,
} from "../controller/authController.js";
import { isAdmin, requireSignin } from "../middlewares/authMiddleware.js";

//router object
const router = express.Router();

//routing

//REGISTER || METHOD POST
router.post("/register", registerController);

//LOGIN || METHOD POST
router.post("/login", loginController);

//TEST ||METHOD GET
router.get("/test", requireSignin, isAdmin, testController);

export default router;
