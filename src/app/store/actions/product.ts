import { ProductAPI } from "services";
import { Product } from "../reducers";
import { AppDispatch } from "../store";

export const getProductsAction = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(Product.productsSlice.actions.productsFetching());
        const data = await ProductAPI.getProductsList();
        dispatch(
            Product
                .productsSlice
                .actions
                .productsFetchingSuccess(data)
        );
    } catch (error) {
        dispatch(
            Product
                .productsSlice
                .actions
                .productsFetchingError(
                    (error as Error)
                        .message
                )
        );
    }
};