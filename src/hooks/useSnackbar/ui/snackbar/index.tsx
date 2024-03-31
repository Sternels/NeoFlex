import React, { FC, useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { useAppDispatch } from "app/store/hooks";
import { snackbarsSlice } from "app/store/reducers/snackbar-slice";

export interface ISnackbarProps {
    id:string,
	message: string;
}

export const Snackbar: FC<ISnackbarProps> = React.memo(({
    id,
	message,
}) => {
    const SNACKBAR_LIFE_TIME = 5000;
    
    const [ canRemove, setCanRemove ] = useState<boolean>(true);
    const [ canRemoveAnim, setCanRemoveAnim ] = useState<boolean>(false)
	
    const dispatch = useAppDispatch();

    useEffect(()=>{
        const snackbarLremoveAnimTimeout = setTimeout(()=>{
            setCanRemove(true);
            setCanRemoveAnim(true);
        },SNACKBAR_LIFE_TIME-1000);

        if(!canRemove){
            clearTimeout(snackbarLremoveAnimTimeout);
            return;
        }
        return ()=> clearTimeout(snackbarLremoveAnimTimeout);
    },[canRemove])
	
    useEffect(() => {
		const snackbarRemoveTimeout = setTimeout(() => {
            dispatch(snackbarsSlice.actions.removeSnackFromQueueById(id));
        }, SNACKBAR_LIFE_TIME);
        if(!canRemove){
            clearTimeout(snackbarRemoveTimeout);
            return;
        }
		return () => {
            clearTimeout(snackbarRemoveTimeout);
        };
	}, [canRemove]);


    const mouseEnterHandler = () => {
        setCanRemove(false);
        setCanRemoveAnim(false);
    }

    const mouseLeaveHandler = () => {
        setCanRemove(true);
    }

    return (
		<div
			id="snackbar"
			className={canRemoveAnim ? styles.snackbar_hide : styles.snackbar_show}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
		>
			{message}
		</div>
	);
});
