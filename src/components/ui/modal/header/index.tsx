import { FC } from "react";

import styles from "./styles.module.scss";

export interface IHeaderProps {
	title?: string;
	handlerClose: () => void;
}

export const Header: FC<IHeaderProps> = ({ title, handlerClose }) => {
	return (
		<div className={styles.modal__header}>
			<h2>{title}</h2>
			<div className={styles.modal__header_btn_close} onClick={handlerClose}>
				x
			</div>
		</div>
	);
};
