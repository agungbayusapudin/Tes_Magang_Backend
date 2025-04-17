import { db } from "../../db/clients";

import { eq } from "drizzle-orm";
import { products } from "../../db/schema/product.schema";
import { NewProduct } from "../model/product.model";

export class ProductRepository {
    // digunakan untuk membuat product baru
    static async createProduct(productData: NewProduct) {
        const [product] = await db.insert(products).values(productData).returning();
        return product;
    }

    // digunakan untuk memngambil data seluh product
    static async getAllProducts() {
        const productsList = await db.select().from(products);
        return productsList;
    }

    // digunakan untuk melakukan update product berdasarkan id
    static async updateProduct(id: number, productData: Partial<NewProduct>) {
        const [product] = await db.update(products).set(productData).where(eq(products.id, id)).returning();
        return product;
    }

    // digunakan untuk melakukan delete product berdasarkan id
    static async deleteProduct(id: number) {
        const product = await db.delete(products).where(eq(products.id, id));
        return product.count;

    }

    // digunakan untuk mendapatkan value dari harga product berdasarkan id
    static async getPrice(id: number){
        const priceData = await db.select({field1: products.price}).from(products).where(eq(products.id, id));
        // mengecek bahwa harga tidak boleh 0
        if (!priceData || priceData.length === 0) {
            return false
        }

        const priceStr = priceData[0].field1;
        const price = parseFloat(priceStr);
        return price;
    }
}