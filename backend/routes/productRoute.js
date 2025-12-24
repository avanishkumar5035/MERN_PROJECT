const express = require("express");
const { getAllProducts, updateProduct, deleteProduct } = require("../controllers/productController");


const { createProduct } = require("../controllers/productController");

const router = express.Router();

router.route("/product").get(getAllProducts);
router.post("/product/new", createProduct);

// router.route("/product/new").post(createProduct);

router.route("/product/:id").put(updateProduct);

router.delete("/product/:id", deleteProduct);




module.exports = router
