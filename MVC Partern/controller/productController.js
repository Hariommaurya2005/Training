const Product = require('../models/productModels')

// Business Logic

const getProducts = async (req, res) => {
    try {
        const allProducts= await Product.find();
        if(!allProducts || allProducts.length===0){
            res.json({
                message:"There is no Product"
            })
        }
        //if we have product >=1
        res.status(200).json({
            success:true,
            Product:allProducts
        })


    }
    catch (err) {
        {
            res.status(500).json({
                sucess: false,
                message: "Internal server error"
            })
        }

    }
}

const createProducts = async (req, res) => {
    try {
       const {name,price,Description,category}=req.body;
       const newProduct=new Product({name,price,category,Description});
       await newProduct.save();
       res.status(200).json({
        Product:newProduct
       })


    }
    catch (err) {
        {
            res.status(500).json({
                sucess: false,
                message: "Internal server error"
            })
        }

    }
}

const updateProduct=async(req,res)=>{
    try{
        const {id}=req.params;
        const {name,price,category,Description}=req.body
        const updatedProduct=await Product.findByIdAndUpdate
        (id,{name,price,Description,category},{new:true});
        res.status(200).json({
            success:true,
            product:updateProduct


        })
        


    }
    catch(err){
        res.status(500).json({
            sucess: false,
            message: "Internal server error"
        })

    }
}
const deleteProduct=async(req,res)=>{
    try{
        const {id}=req.params;
        const deleteProduct=await Product.findByIdAndDelete(id);

        if(!deleteProduct){
            res.json({
                message:"Product not found,cannot delete"
            })
        }
        res.status(200).json({
            message:"Product not delete",
            product:deleteProduct


        })
        


    }
    catch(err){
        res.status(500).json({
            sucess: false,
            message: "Internal server error"
        })

    }
}


module.exports={getProducts,updateProduct,createProducts,deleteProduct}