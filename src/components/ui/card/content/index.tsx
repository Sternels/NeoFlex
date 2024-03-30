import { FC, PropsWithChildren } from "react";
import styles from "./styles.module.scss";

export interface IContentProps extends PropsWithChildren {}

export const Content: FC<IContentProps> = ({ children }) => {
	return (
		<div className={styles.card__content}>
			<div className={styles.card__caption}>{children}</div>
		</div>
	);
};
