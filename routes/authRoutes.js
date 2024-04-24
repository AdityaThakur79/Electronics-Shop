import express from "express";
import {
  forgotPasswordController,
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

//FORGOT PASSWORD || POST
router.post('/forgot-password' , forgotPasswordController)

//TEST ||METHOD GET
router.get("/test", requireSignin, isAdmin, testController);

//Protected Route
router.get("/user-auth", requireSignin, (req, res) => {
  res.status(200).send({ ok: true });
});

export default router;
