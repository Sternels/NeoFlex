import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ICategoryProduct } from 'models';

interface ProductsState {
    products:ICategoryProduct[];
    isLoading:boolean;
    error:string;
}

const initialState: ProductsState = {
    products:[],
    isLoading:false,
    error:''
}

export const productsSlice = createSlice({
    name:'products',
    initialState,
    reducers:{
        productsFetching(state){
            state.isLoading = true;
        },
        productsFetchingSuccess(state, action:PayloadAction<ICategoryProduct[]>){
            state.isLoading = false;
            state.error = '';
            state.products = action.payload;
        },
        productsFetchingError(state, action:PayloadAction<string>){
            state.isLoading = false;
            state.error = action.payload;
        },
    }
})

export default productsSlice.reducer;