import { Card, QuantitySelector } from "components/ui";
import { IProduct } from "models";
import React, { FC } from "react";
import { useAppDispatch } from "app/store/hooks";
import { Order } from "app/store/reducers";
import { OrderAPI } from "services";
import delete_icon from "assets/icons/delete.svg";
import { useSnackbar } from "hooks/useSnackbar";

import styles from "./styles.module.scss";

export interface IProductItemProps {
	item: IProduct;
}

export const ProductItem: FC<IProductItemProps> = React.memo(({ item }) => {
	const dispatch = useAppDispatch();
	const { showSnackbar } = useSnackbar();


	const handlerClick = async () => {
		if (confirm("Вы действительно хотите удалить этот товар из корзины?")) {
			await OrderAPI.deleteOrderById(item.id).then((resolve) => {
				showSnackbar(`Товар ${resolve.title} удален из Вашей корзины!`);
				dispatch(Order.orderSlice.actions.decrementOrder(item));
			});
		}
	};

	return (
		<Card classNames={[styles.cart_item__card]}>
			<Card.Content>
				<div className={styles.p_relative}>
					<div className={styles.cart_item__content}>
						<div className={styles.cart_item__image}>
							<img src={item.img} alt={item.img} />
						</div>
						<div className={styles.cart_item__caption}>
							<h3>{item.title}</h3>
							<h4>{item.price} ₽</h4>
						</div>
					</div>
					<img
						src={delete_icon}
						className={styles.cart_item__delete_icon}
						alt="delete_icon"
						onClick={handlerClick}
					/>
				</div>
			</Card.Content>
			<Card.Footer>
				<div className={styles.cart_item__footer}>
					<QuantitySelector item={item} />
				</div>
			</Card.Footer>
		</Card>
	);
});
