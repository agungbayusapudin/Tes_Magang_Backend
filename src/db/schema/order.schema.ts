import { pgTable, serial, text, varchar, decimal, integer, timestamp } from "drizzle-orm/pg-core";
import { products } from "./product.schema";


// Tabel Orders
export const orders = pgTable("orders", {
  id: serial("id").primaryKey(),
  product_id: integer("product_id")
    .notNull()
    .references(() => products.id, { onDelete: "cascade" }),
  quantity: integer("quantity").notNull(),
  total_price: decimal("total_price", { precision: 10, scale: 2 }).notNull(),
  created_at: timestamp("created_at").defaultNow(),
});