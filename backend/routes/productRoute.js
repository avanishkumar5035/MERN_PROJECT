const express = require("express");
const { getAllProducts, updateProduct, deleteProduct, getProductDetails } = require("../controllers/productController");


const { createProduct } = require("../controllers/productController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router.route("/product").get(getAllProducts);
router.post("/product/new", createProduct, isAuthenticatedUser, authorizeRoles("admin"),);

// router.route("/product/new").post(createProduct);

router
    .route("/product/:id")
    .put(isAuthenticatedUser, authorizeRoles("admin"), updateProduct)
    .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteProduct)
    .get(getProductDetails);



module.exports = router
