import express from "express"
import { getProducts,createProducts,deleteProduct,updateProduct} from "../controllers/product.controller.js";

const router = express.Router();

router.get("/",getProducts)
router.post("/",createProducts)
router.put("/:id",updateProduct)
router.delete("/:id",deleteProduct)

export default router