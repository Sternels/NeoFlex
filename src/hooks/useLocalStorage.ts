import { IProduct } from "models";

const useLocalStorage = (key: string): {
  addItem: (item: IProduct) => IProduct;
  getData: () => IProduct[];
  deleteItemById: (id: number) => IProduct;
  getItemById: (id: number) => IProduct;
  resetCart: () => void;
} => {
  const getData = (): IProduct[] => {
    const storedArray = localStorage.getItem(key);
    const array = storedArray ? JSON.parse(storedArray) : [];
    return array;
  };

  const addItem = (item: IProduct) => {
    const data = getData();
    const selectedItem = data.find((dataItem) => dataItem.id === item.id)!;
    if (selectedItem) {
      throw new Error(`Вы уже добавили ${item.title} в корзину`)
    } else {
      localStorage.setItem(key, JSON.stringify([...data, item]));
      return item;
    }
  };

  const deleteItemById = (id: number): IProduct => {
    const data = getData();
    const result = data.filter((item) => item.id !== id);
    localStorage.setItem(key, JSON.stringify(result));
    const deletedItem = data.find((item) => item.id === id)!;
    return deletedItem!;
  };

  const resetCart = () => {
    localStorage.removeItem(key);
  }

  const getItemById = (id: number): IProduct => {
    const data = getData();
    const result = data.find((item) => item.id === id)!;
    return result;
  }

  return { getData: getData, addItem: addItem, deleteItemById: deleteItemById, getItemById: getItemById, resetCart: resetCart };
};

export default useLocalStorage;
