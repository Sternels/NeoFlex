import { Card } from "components/ui";
import { IProduct } from "models";
import { FC } from "react";
import { useAppDispatch } from "app/store/hooks";
import { Order } from "app/store/reducers";
import vector from "assets/icons/Vector.svg";
import { OrderAPI } from "services";
import { useSnackbar } from "hooks/useSnackbar";

import styles from "./styles.module.scss";

interface ProductItemProps {
	item: IProduct;
}

const ProductItem: FC<ProductItemProps> = ({ item }) => {
	const dispatch = useAppDispatch();
	const { showSnackbar } = useSnackbar();

	const handlerClick = async () => {
		await OrderAPI.postOrder(item)
			.then((_) => {
				dispatch(Order.orderSlice.actions.incrementOrder(item));
				showSnackbar(`Товар ${item.title} добавлен в корзину!`);
			})
			.catch((reject) => showSnackbar(reject.message));
		};
		
	return (
		<Card>
			<Card.Content>
				<div className={styles.product_catalog_item___content}>
					<div className={styles.product_catalog_item___image}>
						<img src={item.img} alt={item.img} />
					</div>
					<div className={styles.product_catalog_item___caption}>
						<h4>{item.title}</h4>
						<h4 className={styles.secondary_text}>{item.price} ₽</h4>
					</div>
				</div>
			</Card.Content>
			<Card.Footer>
				<div className={styles.product_catalog_item___footer}>
					<div>
						<img src={vector} alt="vector" />
						<h4>{item.rate}</h4>
					</div>
					<h4 onClick={handlerClick} className={styles.pointer}>
						Купить
					</h4>
				</div>
			</Card.Footer>
		</Card>
	);
};

export default ProductItem;
