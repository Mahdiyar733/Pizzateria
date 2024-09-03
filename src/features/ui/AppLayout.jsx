import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import SpinnerFullpage from "./Spinner";
import { useNavigation } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
function AppLayout() {
	const navigation = useNavigation();
	const isLoading = navigation.state === "loading";

	return (
		<div className="font-Poppins">
			{isLoading && <SpinnerFullpage />}
			<Navbar />
			<main>
				<div className="background">
					<div></div>
					<div></div>
				</div>
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}

export default AppLayout;
