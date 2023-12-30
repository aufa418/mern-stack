import express from "express"
import { getProducts, getProductById, createProducts, updateProduct, deleteProduct } from "../controller/ProductController.js"

const router = express.Router()

router.get('/products', getProducts)
router.get('/products/:id', getProductById)
router.post('/products/', createProducts)
router.patch('/products/:id', updateProduct)
router.delete('/products/:id', deleteProduct)

export default router