import { Button, Input } from "components/ui";
import React, { FC } from "react";
import { useAppDispatch } from "app/store/hooks";
import { Order } from "app/store/reducers";
import useLocalStorage from "hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";

import styles from "./styles.module.scss";
import { useSnackbar } from "hooks/useSnackbar";

export interface FormMakingOrderProps {}

export const FormMakingOrder: FC<FormMakingOrderProps> = ({}) => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const {showSnackbar} = useSnackbar()
	const { resetCart } = useLocalStorage("orders");

	const handlerForm = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		resetCart();
		dispatch(Order.orderSlice.actions.resetCart());
		showSnackbar('Ваш заказ успешно оформлен!')
		setTimeout(() => {
			navigate("/", { replace: true });
		}, 1000);
	};

	return (
		<form className={styles.making_order__form} onSubmit={handlerForm}>
			<Input placeholder="Введите имя" required />
			<Input placeholder="Введите фамилию" required />
			<Input placeholder="Введите отчество" />
			<Input
				placeholder="Введите адрес электронной почты"
				type="email"
				required
			/>
			<Button type="submit">Отправить заявку</Button>
		</form>
	);
};
