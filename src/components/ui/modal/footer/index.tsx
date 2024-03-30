import { FC, PropsWithChildren } from "react";

import styles from "./styles.module.scss";

export interface IFooterProps extends PropsWithChildren {}

export const Footer: FC<IFooterProps> = ({ children }) => {
	return <div className={styles.modal__footer}>{children}</div>;
};
