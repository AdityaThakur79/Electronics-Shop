import express from "express";
import { isAdmin, requireSignin } from "../middlewares/authMiddleware.js";
import {
  createProductController,
  deleteProductController,
  getProductController,
  getSingleProduct,
  productCountController,
  productFilterController,
  productListController,
  productPhotoController,
  updateProductController,
} from "../controller/productController.js";
import formidable from "express-formidable";

const router = express.Router();

//Create Product
router.post(
  "/create-product",
  requireSignin,
  isAdmin,
  formidable(),
  createProductController
);

//Read-products
router.get("/get-products", getProductController);

//Update Product
router.put(
  "/update-product/:pid",
  requireSignin,
  isAdmin,
  formidable(),
  updateProductController
);

//Delete Product
router.delete(
  "/delete-product/:id",
  requireSignin,
  isAdmin,
  formidable(),
  deleteProductController
);

//get Single Product
router.get("/single-product/:slug", getSingleProduct);

//Fetch Photo
router.get("/product-photo/:pid", productPhotoController);

//Filter Route
router.post("/product-filter", productFilterController);

//Product Count Route
router.get("/product-count", productCountController);

//Product Per Page
router.get("/product-list/:page", productListController);

export default router;
