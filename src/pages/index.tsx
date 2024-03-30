import { MainLayout } from "components/layouts";
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const HomePage = lazy(() =>
	import("./home").then(({ HomePage }) => ({ default: HomePage }))
);
const CartPage = lazy(() =>
	import("./cart").then(({ CartPage }) => ({ default: CartPage }))
);
const MakingOrderPage = lazy(() =>
	import("./making-order").then(({ MakingOrderPage }) => ({ default: MakingOrderPage }))
);

export const Routing = () => {
	return (
		<Routes>
			<Route element={<MainLayout />}>
				<Route path="/" element={<HomePage />} />
				<Route path="/cart" element={<CartPage />} />
				<Route path="/making-order" element={<MakingOrderPage />} />
			</Route>
		</Routes>
	);
};
