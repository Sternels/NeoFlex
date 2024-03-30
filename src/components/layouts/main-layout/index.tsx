import { Container } from "../container";
import { Header } from "../header";
import { Footer } from "../footer";
import { Outlet } from "react-router-dom";

import styles from "./styles.module.scss";

export const MainLayout = () => {
	return (
		<>
			<Container>
				<Header />
				<div className={styles.content}>
					<Outlet />
				</div>
				<Footer />
			</Container>
		</>
	);
};
