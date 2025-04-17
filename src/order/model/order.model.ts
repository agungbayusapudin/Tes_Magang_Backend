import type { InferSelectModel, InferInsertModel } from 'drizzle-orm';
import { orders } from '@/db/schema/order.schema';

export type Orders = InferSelectModel<typeof orders>;
export type NewOrders = InferInsertModel<typeof orders>;