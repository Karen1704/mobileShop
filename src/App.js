import { useLocation } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Product from "../src/Product/Product";
import "./App.css";
import Contact from "./NavItem/Contact";
import Main from "./Main/Main";
import AboutUs from "./NavItem/AboutUs";
import Services from "./NavItem/Services";
import Credit from "./NavItem/Credit";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Cart from "./Cart/Cart";
import Heart from "./Heart/Heart";
function App() {
	const { pathname } = useLocation();

	return (
		<div className="App">
			<Header />
			<Routes>
				<Route
					path="/"
					element={<Main />}
				/>
				<Route
					path="/contact"
					element={<Contact />}
				/>
				<Route
					path="/aboutus"
					element={<AboutUs />}
				/>
				<Route
					path="/services"
					element={<Services />}
				/>
				<Route
					path="/credit"
					element={<Credit />}
				/>
				<Route
					path="/cart"
					element={<Cart />}
				/>
				<Route
					path="/heart"
					element={<Heart />}
				/>
				<Route
					path={pathname}
					element={<Product pathname={pathname} />}
				/>
			</Routes>
			<Footer />
		</div>
	);
}
export default App;
