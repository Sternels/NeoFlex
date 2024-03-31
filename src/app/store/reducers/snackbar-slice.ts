import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { generateKey } from "utils";

interface ISnackbar {
    id: string;
    message: string;
    canRemove:boolean
}

interface SnackbarsSlice {
    snackbars: ISnackbar[]
}

const initialState: SnackbarsSlice = {
    snackbars: []
}

export const snackbarsSlice = createSlice({
    name: 'snackbars',
    initialState,
    reducers: {
        addSnackToQueue(state, action: PayloadAction<string>) {
            const id = generateKey(action.payload);
            
            if(state.snackbars.length>5){
                state.snackbars.shift();
            }
            state.snackbars.push(
                {
                    id: id,
                    message: action.payload,
                    canRemove:false
                }
            );
        },
        removeSnackFromQueueById(state, action: PayloadAction<string>) {
            const id = action.payload;
            state.snackbars = state.snackbars.filter(s => s.id !== id);
        }
    }
})

export default snackbarsSlice.reducer