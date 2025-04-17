import { Router } from "express";
import { ProductController } from "../product/controller/product.controller";
import { OrderController } from "@/order/controller/order.controller";

const router = Router();

/**
 * @swagger
 * tags:
 *   - name: Products
 *     description: Product management endpoints
 *   - name: Orders
 *     description: Order management endpoints
 */

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *   schemas:
 *     Product:
 *       type: object
 *       required:
 *         - name
 *         - price
 *       properties:
 *         id:
 *           type: integer
 *           minimum: 1
 *           example: 2
 *         name:
 *           type: string
 *           example: Smartphone
 *         description:
 *           type: string
 *           example: Latest model with advanced features
 *         price:
 *           type: number
 *           format: double
 *           minimum: 0
 *           example: 999.99
 *     OrderInput:
 *       type: object
 *       required:
 *         - product_id
 *         - quantity
 *       properties:
 *         product_id:
 *           type: integer
 *           minimum: 1
 *           example: 2
 *         quantity:
 *           type: integer
 *           minimum: 1
 *           example: 2
 *     Order:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           minimum: 1
 *           example: 2
 *         product_id:
 *           type: integer
 *           minimum: 1
 *           example: 2
 *         quantity:
 *           type: integer
 *         total_price:
 *           type: number
 *           format: double
 *         createdAt:
 *           type: string
 *           format: date-time
 *           readOnly: true
 */

/**
 * @swagger
 * /products:
 *   post:
 *     summary: Create a new product
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       201:
 *         description: Product created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       400:
 *         description: Bad request - invalid input
 *       500:
 *         description: Internal Server Error
 */
router.post('/products', ProductController.createProduct);

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Get all products
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: List of products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 *       500:
 *         description: Internal Server Error
 */
router.get('/products', ProductController.getAllProducts);

/**
 * @swagger
 * /products/{id}:
 *   put:
 *     summary: Update a product
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Product ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       200:
 *         description: Product updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       404:
 *         description: Product not found
 *       500:
 *         description: Internal Server Error
 */
router.put('/products/:id', ProductController.updateProduct);

/**
 * @swagger
 * /products/{id}:
 *   delete:
 *     summary: Delete a product
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Product ID
 *     responses:
 *       204:
 *         description: Product deleted successfully
 *       404:
 *         description: Product not found
 *       500:
 *         description: Internal Server Error
 */
router.delete('/products/:id', ProductController.deleteProduct);

/**
 * @swagger
 * /orders:
 *   post:
 *     summary: Create a new order
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/OrderInput'
 *     responses:
 *       201:
 *         description: Order created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Order'
 *       404:
 *         description: Product not found
 *       500:
 *         description: Internal Server Error
 */
router.post('/orders', OrderController.createOrder);

/**
 * @swagger
 * /orders:
 *   get:
 *     summary: Get all orders
 *     tags: [Orders]
 *     responses:
 *       200:
 *         description: List of orders
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Order'
 *       500:
 *         description: Internal Server Error
 */
router.get('/orders', OrderController.getAllOrders);

export default router;