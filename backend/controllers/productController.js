const Product = require("../models/productModel");







// Create Product -- Admin
exports.createProduct = async(req,res,next)=>{


    const product = await Product.create(req.body);

    res.status(201).json({
        success: true,
        product,
    });
}


// Get All Product -- Admin

exports.getAllProducts = async(req,res)=>{

    const products = await Product.find();


    res.status(200).json({
        success: true,
        products,
    })
};


// Update Product 

exports.updateProduct = async (req,res,next) =>{

    let product = Product.findById(req.params.id);
    
}