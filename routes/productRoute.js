const express = require("express");
const router = express.Router();
const protect = require("../middlewares/authMiddleware");
const { createProduct, getProducts, getProduct, deleteProduct, updateProduct, getProductDetail } = require("../controllers/productController");
const { upload } = require("../utils/fileUploads");




router.post("/", protect, upload.single("image"), createProduct);
router.patch("/:id", protect, upload.single("image"), updateProduct);
router.get("/", protect, getProducts);
router.get("/:id", protect, getProduct);
router.get("/details/:id", getProductDetail);
router.delete("/:id", protect, deleteProduct);





module.exports = router;   