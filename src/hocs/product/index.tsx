import { getProductsAction } from "app/store/actions";
import { useAppDispatch, useAppSelector } from "app/store/hooks";
import { ComponentType, useEffect } from "react";

export const ProductHOC = (Component: ComponentType<any>) => (props: any) => {
	const dispatch = useAppDispatch();
	
	const { products, isLoading, error } = useAppSelector(
		(state) => state.productsReducer
	);

	useEffect(() => {
		if (products.length === 0) dispatch(getProductsAction());
	}, []);


	return (
		<Component
			{...props}
			isLoading={isLoading}
			error={error}
			products={products}
		/>
	);
};
