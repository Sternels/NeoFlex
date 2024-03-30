export interface IProduct {
    id: number
    img: string;
    title: string;
    price: number;
    rate: number;
    count: number;
    currentPrice: number;
}

export interface ICategoryProduct {
    id: number;
    title: string;
    products: IProduct[];
}