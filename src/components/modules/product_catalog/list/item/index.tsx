import { Card } from "components/ui";
import { IProduct } from "models";
import { FC } from "react";
import { useAppDispatch } from "app/store/hooks";
import { Order } from "app/store/reducers";
import vector from "assets/icons/Vector.svg";
import styles from "./styles.module.scss";
import { OrderAPI } from "services";

interface ProductItemProps {
	item: IProduct;
}

const ProductItem: FC<ProductItemProps> = ({ item }) => {
	const dispatch = useAppDispatch();

	const handlerClick = async () => {
		await OrderAPI.postOrder(item)
			.then((_) => {
				alert(`Товар ${item.title} добавлен в корзину!`)
				dispatch(Order.orderSlice.actions.incrementOrder(item));
			})
			.catch((reject) => alert(reject.message));
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
