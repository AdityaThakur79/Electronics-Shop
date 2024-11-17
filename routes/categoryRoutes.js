import express from "express";
import { isAdmin, requireSignin } from "../middlewares/authMiddleware.js";
import {
  createCategoryController,
  deleteCatgeoryController,
  getAllCategoryController,
  singleCategoryController,
  updateCategoryController,
} from "../controller/createCategoryController.js";

const router = express.Router();

//Create Category Routes
router.post(
  "/create-category",
  requireSignin,
  isAdmin,
  createCategoryController
);

//Update Category
router.put(
  "/update-category/:id",
  requireSignin,
  isAdmin,
  updateCategoryController
);

//Get all category
router.get("/all-category", getAllCategoryController);

//Single Catgeory
router.get("/single-category/:slug", singleCategoryController);

//Delete Category
router.delete("/delete-category/:id", deleteCatgeoryController);

export default router;
