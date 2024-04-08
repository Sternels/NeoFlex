import styles from "./styles.module.scss";
import globus_icon from "assets/icons/globus.svg";
import telegram_icon from "assets/icons/Telegram.svg";
import vk_icon from "assets/icons/VK.svg";
import whatsapp_icon from "assets/icons/Whatsapp.svg";
import { Link } from "react-router-dom";

export const Footer = () => {
	return (
		<div className={styles.footer}>
			<Link to="/">
				<h1 className={styles.footer__logo}>QPICK</h1>
			</Link>
			<div className={styles.footer__item}>
				<a href="#">Избранное</a>
				<a href="#">Корзина</a>
				<a href="#">Контакты</a>
			</div>
			<div className={styles.footer__item}>
				<a href="#">Условия сервиса</a>
				<div className={styles.footer__panel}>
					<img src={globus_icon} alt="globus" />
					<a href="#">РУС</a>
					<a href="#">ENG</a>
				</div>
			</div>
			<div className={`${styles.network}`}>
				<img src={vk_icon} alt="vk_icon" />
				<img src={telegram_icon} alt="telegram_icon" />
				<img src={whatsapp_icon} alt="whatsapp_icon" />
			</div>
		</div>
	);
};
