import { FC } from "react";
import { Card } from "components/ui";
import { Button } from "components/ui/form/button";
import { DetailPaymentInformation } from "./detail";

import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

export interface IPaymentInformationProps {}

export const PaymentInformation: FC<IPaymentInformationProps> = ({}) => {
	return (
		<div className={styles.payment_information__container}>
			<Card classNames={[styles.payment_information__card]}>
				<Card.Content>
					<DetailPaymentInformation />
				</Card.Content>
				<Card.Footer>
					<div className={styles.payment_information__footer}>
						<Link to={"/making-order"}>
							<Button>Перейти к оформлению</Button>
						</Link>
					</div>
				</Card.Footer>
			</Card>
		</div>
	);
};
