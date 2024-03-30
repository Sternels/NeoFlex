import React, { FC } from "react";
import minusIcon from "assets/icons/minus.svg";
import plusIcon from "assets/icons/plus.svg";
import { useAppDispatch } from "app/store/hooks";
import { Order } from "app/store/reducers";

import styles from "./styles.module.scss";
import { IProduct } from "models";

export interface IQuantitySelectorProps {
	item: IProduct;
}

export const QuantitySelector: FC<IQuantitySelectorProps> = React.memo(
	({ item }) => {
		const dispatch = useAppDispatch();

		const handlerIncrement = () => {
			dispatch(Order.orderSlice.actions.incrementPrice(item));
		};

		const handlerDecrement = () => {
			dispatch(Order.orderSlice.actions.decrementPrice(item));
		};

		return (
			<>
				<div className={styles.quantity_selector}>
					<button
						onClick={handlerDecrement}
						className={styles.quantity_selector__icon}
					>
						<img src={minusIcon} alt="minusIcon" />
					</button>
					<h4>{item.count}</h4>
					<button
						onClick={handlerIncrement}
						className={styles.quantity_selector__icon}
					>
						<img src={plusIcon} alt="plusIcon" />
					</button>
				</div>
				<h4>{item.currentPrice} ₽</h4>
			</>
		);
	}
);
