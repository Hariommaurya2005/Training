const express=require('express')
const router=express.Router()
const{getProducts,updateProduct,createProducts,deleteProduct}=require('../controller/productController')



router.get('/products',getProducts)
router.put('/products/:id',updateProduct)
router.put('/products',createProducts)
router.put('/products/:id',deleteProduct);



module.exports=router