// import { getOrdersAction } from "app/store/actions/order";
// import { useAppDispatch, useAppSelector } from "app/store/hooks";
// import { ComponentType, useEffect } from "react";

// export const CartHOC = (Component: ComponentType<any>) => (props: any) => {
// 	const dispatch = useAppDispatch();

// 	const { products, isLoading, error } = useAppSelector(
// 		(state) => state.orderReducer
// 	);
	
// 	useEffect(() => {
// 		if (products.length === 0) dispatch(getOrdersAction());
// 	}, []);

// 	return (
// 		<Component
// 			{...props}
// 			isLoading={isLoading}
// 			error={error}
// 			products={products}
// 		/>
// 	);
// };
