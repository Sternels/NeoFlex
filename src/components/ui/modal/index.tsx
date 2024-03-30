import React, { FC, PropsWithChildren, ReactElement } from "react";
import { Content, IContentProps } from "./content";
import { Footer, IFooterProps } from "./footer";

import styles from "./styles.module.scss";

export type ModalItemType = IContentProps | IFooterProps;

type ModalExtentions = {
	Content: typeof Content;
	Footer: typeof Footer;
};

interface ModalProps extends PropsWithChildren {
	classNames?: string[];
	children?: ReactElement<ModalItemType> | ReactElement<ModalItemType>[];
    active?: boolean;
    setActive(active: boolean): void;
}

export const Modal: FC<ModalProps> & ModalExtentions = ({
	classNames = [],
	children,
}) => {
	return (
		<div className={[...classNames, styles.modal].join(" ")}>{children}</div>
	);
};

Modal.Content = Content;
Modal.Footer = Footer;
