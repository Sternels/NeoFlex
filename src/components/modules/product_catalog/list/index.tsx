import { FC } from "react";
import { IProduct } from "models";
import ProductItem from "./item";
import { generateKey } from "utils";

import styles from "./styles.module.scss";
import { useAutoAnimate } from "@formkit/auto-animate/react";

interface ProductListProps {
	products?: IProduct[];
	categoryTitle?: string;
}

export const ProductList: FC<ProductListProps> = ({
	products,
	categoryTitle,
}) => {
	const [parent] = useAutoAnimate({ duration: 500 });

	return (
		<>
			<h2>{categoryTitle}</h2>
			<div ref={parent} className={styles.products_list__table}>
				{products?.map((item) => {
					return (
						<ProductItem key={generateKey(item.id.toString())} item={item} />
					);
				})}
			</div>
		</>
	);
};
