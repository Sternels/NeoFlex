import useLocalStorage from "hooks/useLocalStorage"
import { IProduct } from "models"
import { delay } from "utils"

export const getOrdersList = async (): Promise<IProduct[]> => {
    const { getData } = useLocalStorage("orders")
    const result = await Promise.resolve(getData())
    await delay(1000)
    return result
}

export const deleteOrderById = async (id: number): Promise<IProduct> => {
    const { deleteItemById } = useLocalStorage("orders")
    const result = await Promise.resolve(deleteItemById(id))
    // await delay(1000)
    return result
}

export const postOrder = async (item: IProduct): Promise<IProduct> => {
    const { addItem } = useLocalStorage("orders")
    const result = await Promise.resolve(addItem(item))
    // await delay(1000)
    return result
}

export const getOrderById = async (id: number): Promise<IProduct> => {
    const { getItemById } = useLocalStorage("orders")
    const result = await Promise.resolve(getItemById(id))
    // await delay(1000)
    return result
}