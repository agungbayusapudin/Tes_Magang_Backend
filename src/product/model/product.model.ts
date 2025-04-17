import type { InferSelectModel, InferInsertModel } from 'drizzle-orm';
import { products } from '../../db/schema/product.schema';

// model dari drizzle schema sesuai dengan database
export type Product = InferSelectModel<typeof products>;
export type NewProduct = InferInsertModel<typeof products>;