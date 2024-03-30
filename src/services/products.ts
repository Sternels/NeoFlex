import { ICategoryProduct, IProduct } from "models";
import { db } from "db";
import { delay } from "utils";

export const getProductsList = async (): Promise<ICategoryProduct[]> => {
    const result = await Promise.resolve(db.products.list);
    await delay(1000)
    return result
}

export const getProductById = async (id: number): Promise<IProduct | null> => {
    const result = await Promise.resolve(db.products.getProductById(id) || null);
    // await delay(1000)
    return result
}

