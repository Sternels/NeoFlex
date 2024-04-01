import { getOrdersAction } from "app/store/actions/order";
import { useAppDispatch, useAppSelector } from "app/store/hooks";
import { ComponentType, useEffect } from "react";

export const CartHOC = (Component: ComponentType<any>) => (props: any) => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getOrdersAction());
	}, []);

	return <Component {...props} />;
};
