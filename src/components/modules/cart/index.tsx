import { FC } from "react";
import { ProductList } from "./list";
import { PaymentInformation } from "./payment_information";

import styles from "./styles.module.scss";

export interface ICartBaseProps {}

export const Cart: FC<ICartBaseProps> = ({}) => {
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
