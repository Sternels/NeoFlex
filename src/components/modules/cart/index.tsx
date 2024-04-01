import { FC } from "react";
import { ProductList } from "./list";
import { PaymentInformation } from "./payment_information";
import { CartHOC } from "hocs";

import styles from "./styles.module.scss";

export interface ICartBaseProps {}

export const CartBase: FC<ICartBaseProps> = ({}) => {
	return (
		<>
			<h2>Корзина</h2>
			<div className={styles.cart_container}>
				<ProductList />
				<PaymentInformation />
			</div>
		</>
	);
};


export const Cart = CartHOC(CartBase) as typeof CartBase;