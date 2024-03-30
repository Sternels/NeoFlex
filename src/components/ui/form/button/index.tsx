import { FC, PropsWithChildren, ButtonHTMLAttributes } from "react";
import styles from "./styles.module.scss";

interface ButtonProps
	extends PropsWithChildren,
		ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
}


export const Button: FC<ButtonProps> = ({
	className = "",
	children,
	...restProps
}) => {
	return (
		<button
			{...restProps}
			className={styles.button}
		>
			{children}
		</button>
	);
};
