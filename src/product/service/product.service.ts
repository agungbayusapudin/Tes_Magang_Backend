import { numeric } from "drizzle-orm/pg-core";
import { NewProduct } from "../model/product.model";
import { ProductRepository } from "../repository/product.repo";

export class ProductService {
    // digunakan utnuk create product baru
    static async createProduct(productData: NewProduct) {
        return await ProductRepository.createProduct(productData);
    }

    // digunakan untuk mengambil seluruh product
    static async getAllProducts() {
        const product = await ProductRepository.getAllProducts();
        if(!product){
            throw new Error("Product not found");
        }
        return product;
    }

    // digunakan untuk update product berdasarkan id
    static async updateProduct(id: number, productData: Partial<NewProduct>) {
        if (typeof id !== 'number'){
            return false
        }

        const product = await ProductRepository.updateProduct(id, productData);
        if (!product) {
            return false
        }
        return product;
    }

    // digunakan untuk melakukan delete product berdasarkan id
    static async deleteProduct(id: number) {
        const status_delete = await ProductRepository.deleteProduct(id);
        if (status_delete > 0){
            return true
        } else {
            return false
        }
    }

}