import { pgTable, serial, varchar, text, decimal } from "drizzle-orm/pg-core";

// Tabel Products
export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  description: text("description").notNull(),
  price: decimal("price", { precision: 10, scale: 2 }).notNull(),
});