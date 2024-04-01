import { FC } from "react";
import { ProductItem } from "./item";
import { generateKey } from "utils";
import { Loading } from "components/ui";
import { useAppSelector } from "app/store/hooks";

import styles from "./styles.module.scss";

export interface IProductListProps {}

export const ProductList: FC<IProductListProps> = ({}) => {
	const { isLoading, error, products } = useAppSelector(
		(state) => state.orderReducer
	);

	return (
		<>
			{isLoading && <Loading />}
			{error && <h4>{error}</h4>}
			<div className={styles.cart_list__container}>
				{products?.map((product) => (
					<ProductItem
						key={generateKey(product.id.toString())}
						item={product}
					/>
				))}
			</div>
		</>
	);
};
