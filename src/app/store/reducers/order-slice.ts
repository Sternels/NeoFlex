import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IProduct } from 'models';

interface OrderState {
    count: number;
    mainPrice: number;
    products: IProduct[];
    isLoading: boolean;
    error: string;
}

const initialState: OrderState = {
    count: 0,
    mainPrice: 0,
    products: [],
    isLoading: true,
    error: '',
}

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        orderFetching(state) {
            state.isLoading = true;
        },
        orderFetchingSuccess(state, action: PayloadAction<IProduct[]>) {
            state.isLoading = false;
            state.error = '';
            state.count = action.payload.length;
            state.products = action.payload;
            state.mainPrice = action.payload.reduce((acc, curr) => acc + curr.price, 0);
        },
        orderFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.count = 0;
            state.error = action.payload;
        },
        incrementOrder(state, action: PayloadAction<IProduct>) {
            state.count += 1;
            state.products = [...state.products, action.payload];
            state.mainPrice += action.payload.currentPrice
        },
        decrementOrder: (state, action: PayloadAction<Pick<IProduct, "id">>) => {
            let currentItem = state.products.find(element => element.id === action.payload.id)
            if (currentItem) {
                state.mainPrice = state.mainPrice - currentItem.currentPrice
                state.count -= 1
                state.products = state.products.reduce((acc: IProduct[], element: IProduct) => {
                    if (element.id !== action.payload.id) acc.push(element);
                    return acc
                }, [])
            }
        },
        incrementPrice(state, action: PayloadAction<IProduct>) {
            state.products = state.products.map(element =>
            (element.id === action.payload.id ?
                { ...element, count: element.count + 1, currentPrice: (element.count + 1) * element.price }
                : element)
            )
            state.mainPrice = state.mainPrice + action.payload.price;
        },
        decrementPrice: (state, action: PayloadAction<IProduct>) => {
            state.products = state.products.map(element => {
                if (element.count > 1) {
                    if (element.id === action.payload.id) {
                        state.mainPrice = state.mainPrice - action.payload.price;
                        return { ...element, count: element.count - 1, currentPrice: (element.count - 1) * element.price }
                    } else {
                        return element
                    }
                }
                return element
            })
        },
        resetCart: (state) => {
            state.count = 0;
            state.mainPrice = 0;
            state.products = [];
            state.isLoading = true;
            state.error = '';
        }
    }
})

export default orderSlice.reducer;