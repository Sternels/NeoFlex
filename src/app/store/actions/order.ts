import { OrderAPI } from "services";
import { AppDispatch } from "../store";
import { Order } from "../reducers";

export const getOrdersAction = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(Order.orderSlice.actions.orderFetching());
        const orders = await OrderAPI.getOrdersList();
        dispatch(
            Order
                .orderSlice
                .actions
                .orderFetchingSuccess(orders)
        );
    } catch (error) {
        dispatch(
            Order
                .orderSlice
                .actions
                .orderFetchingError(
                    (error as Error)
                        .message
                )
        );
    }
};