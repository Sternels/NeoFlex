import { FC, useEffect, useState } from "react";
import cart from "assets/icons/cart.svg";
import favourites from "assets/icons/favourites.svg";
import { useAppDispatch, useAppSelector } from "app/store/hooks";
import { ProductList } from "components/modules/cart/list";
import { Link } from "react-router-dom";
import { Button } from "components/ui/form/button";
import { getOrdersAction } from "app/store/actions/order";

import styles from "./styles.module.scss";

export interface IHeaderProps {}

export const Header: FC<IHeaderProps> = ({}) => {
	const dispatch = useAppDispatch();
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const { count, mainPrice } = useAppSelector((state) => state.orderReducer);

	useEffect(() => {
		dispatch(getOrdersAction());
	}, []);

	return (
		<div className={styles.header}>
			<Link to={"/"}>
				<h1 className={styles.header__logo}>QPICK</h1>
			</Link>
			<div className={styles.header__panel}>
				<div className={styles.header__panel_item}>
					<img src={favourites} alt="favourites" className={styles.pointer} />
					<div className={styles.badge}>2</div>
				</div>
				<div className={styles.header__panel_item}>
					<img
						onClick={() => setIsOpen(!isOpen)}
						src={cart}
						alt="cart"
						className={styles.pointer}
					/>
					<div className={styles.badge}>{count}</div>
					{isOpen && (
						<div className={styles.dropdown}>
							<div className={styles.dropdown__content}>
								<ProductList />
							</div>
							<div>
								<div className={styles.dropdown__content_detail}>
									<h4>Итого</h4>
									<h4>{mainPrice} ₽</h4>
								</div>
							</div>
							<Link to={"/cart"} onClick={() => setIsOpen(false)}>
								<Button>Перейти к покупкам</Button>
							</Link>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};
