
import { Router } from "express";
import { OrderController } from "../controller/order.controller";

const router = Router();

// enpoint dari order
router.post('/', OrderController.createOrder);
router.get('/', OrderController.getAllOrders);

export default router;