import { FC } from "react";
import { useAppSelector } from "app/store/hooks";

import styles from "./styles.module.scss";

export interface IDetailPaymentInformationProps {
}

export const DetailPaymentInformation: FC<IDetailPaymentInformationProps> = ({
}) => {
	const { mainPrice } = useAppSelector((state) => state.orderReducer);

	return (
		<div className={styles.payment_information__detail}>
			<h3>ИТОГО</h3>
			<h3>₽ {mainPrice}</h3>
		</div>
	);
};
