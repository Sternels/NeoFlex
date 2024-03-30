import { FC, PropsWithChildren, ReactElement } from "react";
import { Content, IContentProps } from "./content";
import { Footer, IFooterProps } from "./footer";

import styles from "./styles.module.scss";

export type CardItemType = IContentProps | IFooterProps;

type CardExtentions = {
	Content: typeof Content;
	Footer: typeof Footer;
};

interface CardProps extends PropsWithChildren {
	classNames?: string[];
	maxWidth?: number; 
	children?: ReactElement<CardItemType> | ReactElement<CardItemType>[];
}

export const Card: FC<CardProps> & CardExtentions = ({
	maxWidth,
	classNames = [],
	children,
	...restProps
}) => {
	return (
		<div {...restProps} style={{maxWidth: `${maxWidth}px`}} className={[...classNames, styles.card].join(" ")}>
			{children}
		</div>
	);
};

Card.Content = Content;
Card.Footer = Footer;
