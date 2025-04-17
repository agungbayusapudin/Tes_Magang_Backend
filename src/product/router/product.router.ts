import { ProductController } from "../controller/product.controller";
import { Router } from "express";

const router = Router();

// router dari service product
router.post('/', ProductController.createProduct);
router.get('/', ProductController.getAllProducts);
router.put('/:id', ProductController.updateProduct);
router.delete('/:id', ProductController.deleteProduct);

export default router;