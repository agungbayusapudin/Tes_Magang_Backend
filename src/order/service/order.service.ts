import { ProductRepository } from "../../product/repository/product.repo";
import { OrderRepository } from "../repository/order.repo";
import { NewOrders } from "../model/order.model";

export class OrderService {
    // membuat order product berdasarkan product_id
    static async createOrer(orderData: any) {
        // mendapatkan price dari repository product
        const priceData = await ProductRepository.getPrice(orderData.product_id)

        // cek apadah price berhasil diambil
        if (!priceData) {
            return false
        }

        // operasi untuk menghitung total price
        const totalPrice = priceData * orderData.quantity;

        const orderData_dict = {
            'product_id' : orderData.product_id,
            'quantity': orderData.quantity,
            'total_price': totalPrice
        }

        // melakukan penyimpanan ke data lewat repo
        const order = await OrderRepository.createOrder(orderData_dict);

        // cek apakah terhadi error atau tidak
        if (!order) {
            throw new Error("Order not created");
        }

        return order;
    }

    // mendapatkan seluruh orders yang ada
    static async getAllOrders() {
        const orders = await OrderRepository.getAllOrders();
        // cek apakah berhasil mendapatkan data atau tidak
        if (!orders) {
            throw new Error("No orders found");
        }
        return orders;
    }
}