import { useAppDispatch } from "app/store/hooks";
import { snackbarsSlice } from "app/store/reducers/snackbar-slice";

interface ISnackbar {
    showSnackbar: (message: string) => void;
    closeSnackbar: () => void;
}
export const useSnackbar = (): ISnackbar => {

    const dispatch = useAppDispatch();

    const initSnackbar = (message:string) => {
        dispatch(snackbarsSlice.actions.addSnackToQueue(message))
    }

    const showSnackbar: ISnackbar["showSnackbar"] = (message) => {
        initSnackbar(message)
    }

    const closeSnackbar: ISnackbar["closeSnackbar"] = () => {

    }

    return {showSnackbar, closeSnackbar}
}