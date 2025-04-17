import { Request, Response } from 'express';
import { ProductService } from '../service/product.service';


export class ProductController {

    // digunakan untuk hendeling res, req membuat product
    static async createProduct(req: Request, res: Response){
        try {
            const productData = await ProductService.createProduct(req.body);
            res.status(201).json(productData);
        } catch (error) {
            res.status(500).json({ message: "Error creating product", error });
        }
    }

    // digunakan untuk handeling res, req mendapatkan seluruh product
    static async getAllProducts(req: Request, res: Response){
        try {
            
            const products = await ProductService.getAllProducts();
            res.status(200).json(products);
        } catch (error) {
            res.status(500).json({ message: "Error fetching products", error });
        } 
    }

    // digunakan untuk handeling res, req melakukan update product
    static async updateProduct(req: Request, res: Response){
        try {
            const product = await ProductService.updateProduct(Number(req.params.id), req.body);

            // cek apakah product ada atau tidak
            if (!product) {
                res.status(404).json("Product Not Found")
            } else {
                res.status(200).json(product);
            }
        } catch (error) {
            res.status(500).json({ message: "Error updating product", error });
        }
    }

    // digunakan untuk handeling res, req melakukan delete product 
    static async deleteProduct(req: Request, res: Response){
        try {
            const product = await ProductService.deleteProduct(Number(req.params.id));
            
            // cek apakah product ada atau tidak
            if (!product){
                res.status(404).json("Product Not Found")
            } else {
                res.status(204).json("berhasil")
            }

        } catch (error) {
            res.status(500).json({ message: "Error deleting product", error });
        }
    }

}