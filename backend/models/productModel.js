const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name:{
        type: String,
        required:[true, "Please enter product name"],
        trim:true
    },
    description:{
        type:String,
        required:[true, "Please Enter Product Description"]
    },
    price:{
        type:Number,
        required:[true, "Please Enter Product Price"],
        maxLength:[8, "price cannot exceed 8 characters"]
    },
    rating:{
        type:Number,
        default:0
    },
    images:[
        {
            public_id:{
                type: String,
                required:true
            },
            url:{
                type: String,
                required:true
            },
        },
    ],
    category:{

    }
})