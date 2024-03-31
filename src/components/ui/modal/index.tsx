import React, { FC, PropsWithChildren, ReactElement } from "react";
import { Content, IContentProps } from "./content";
import { Footer, IFooterProps } from "./footer";
import { Header } from "./header";

import styles from "./styles.module.scss";

export type ModalItemType = IContentProps | IFooterProps;

type ModalExtentions = {
	Content: typeof Content;
	Footer: typeof Footer;
};

interface ModalProps extends PropsWithChildren {
	classNames?: string[];
	children?: ReactElement<ModalItemType> | ReactElement<ModalItemType>[];
	handlerClose: () => void;
	title?: string;
}

export const Modal: FC<ModalProps> = React.memo(({
	classNames = [],
	children,
	handlerClose,
	title,
}) => {
	return (
		<div className={styles.modal__back}>
			<div className={[...classNames, styles.modal].join(" ")}>
				<Header handlerClose={handlerClose} title={title} />
				{children}
			</div>
		</div>
	);
});

// Modal.Content = Content;
// Modal.Footer = Footer;
