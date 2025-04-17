import express from 'express'
import productRouter from '././src/product/router/product.router'
import orderRouter from '././src/order/router/order.router'
import swaggerUi from "swagger-ui-express";
import swaggerOutput from "./src/docs/swagger.json";

const app = express()

// enpoint router untuk service
app.use(express.json())
app.use('/products', productRouter)
app.use('/orders', orderRouter)

// enpoint untuk api documentation swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerOutput))

export default app