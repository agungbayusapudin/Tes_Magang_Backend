import { OrderService } from "../service/order.service";
import { Request, Response } from "express";

export class OrderController {
    // digunakan untuk handeling res, req membuat order product
    static async createOrder(req: Request, res: Response) {
        try {
            
            // memanggil func di repo create order
            const orderData = await OrderService.createOrer(req.body);

            // cek apakah datanya ada apa tidak
            if (orderData === false) {
                res.status(404).json("Product Not Found")
            }
            res.status(201).json(orderData);

        } catch (error) {
            res.status(500).json({ message: "Error creating order", error });
        }
    }

    // digunakan untuk handeling res, req mendapatkan semua product
    static async getAllOrders(req: Request, res: Response) {
        try {
            const orderData = await OrderService.getAllOrders();
            res.status(200).json(orderData)
        } catch (error) {
            res.status(500).json({ message: "Error creating order", error });
        }
    }
}