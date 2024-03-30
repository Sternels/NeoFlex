import { ICategoryProduct, IProduct } from "models";
import headphone_1 from "assets/images/headphone_1.png"
import headphone_2 from "assets/images/headphone_2.png"
import headphone_3 from "assets/images/headphone_3.png"
import headphone_4 from "assets/images/headphone_4.png"
import headphone_5 from "assets/images/headphone_5.png"
import headphone_6 from "assets/images/headphone_6.png"

const products: IProduct[] = [
    {
        id: 1,
        img: headphone_1,
        title: "Apple BYZ S852I",
        price: 2353,
        rate: 4.7,
        count: 1,
        currentPrice: 2353,
    },
    {
        id: 2,
        img: headphone_2,
        title: "Apple EarPods",
        price: 2278,
        rate: 4.5,
        count: 1,
        currentPrice: 2278,
    },
    {
        id: 3,
        img: headphone_3,
        title: "Apple AirPods Pro",
        price: 2821,
        rate: 4.2,
        count: 1,
        currentPrice: 2821,
    },
    {
        id: 4,
        img: headphone_1,
        title: "Apple AirPods Mini",
        price: 2278,
        rate: 4.5,
        count: 1,
        currentPrice: 2278,
    },
    {
        id: 5,
        img: headphone_2,
        title: "Apple AirPods Max",
        price: 1233,
        rate: 4.2,
        count: 1,
        currentPrice: 1233,
    },
    {
        id: 6,
        img: headphone_4,
        title: "GERLAX GH",
        price: 2192,
        rate: 4.2,
        count: 1,
        currentPrice: 2192,
    },
    {
        id: 7,
        img: headphone_5,
        title: "GERLAX GH",
        price: 938,
        rate: 4.2,
        count: 1,
        currentPrice: 938,
    },
    {
        id: 8,
        img: headphone_6,
        title: "GERLAX GH",
        price: 1253,
        rate: 4.2,
        count: 1,
        currentPrice: 1253,
    }
]


const categoryProduct: ICategoryProduct[] = [
    {
        id: 1,
        title: "Наушники",
        products: [
            products[0], products[1], products[2], products[3], products[4]
        ]
    },
    {
        id: 2,
        title: "Беспроводные наушники",
        products: [
            products[5], products[6], products[7],
        ]
    }
]


const getProductById = (id: number): IProduct | null => {
    const dbProduct: IProduct | null = products.find(product => product.id === id) || null
    return dbProduct;
}

export default {
    list: categoryProduct,
    getProductById,
}