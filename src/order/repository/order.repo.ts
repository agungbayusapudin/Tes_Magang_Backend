import { db } from "../../db/clients";
import { orders } from "../../db/schema/order.schema";
import { NewOrders } from "../model/order.model";


export class OrderRepository {
    // digunakan untuk membuat product 
    static async createOrder(orderData: any) {
        const [order] = await db.insert(orders).values(orderData).returning();
        return order;
    }

    // digunaakn untuk mendapatkan seluruh product
    static async getAllOrders() {
        const ordersList = await db.select().from(orders)
        return ordersList;
    }
}