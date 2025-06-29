import { BrowserRouter, Routes, Route } from "react-router";
import Home from "../pages/Home";
import Login from "../pages/Login";
import { AuthProvider } from "../context/AuthContext";
import Dashboard from "../pages/Dashboard";

const AppRoutes = () => {
	return (
		<BrowserRouter>
			<AuthProvider>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/dashboard" element={<Dashboard />} />

					<Route path="*" element={<h2>Página não encontrada</h2>} />
				</Routes>
			</AuthProvider>
		</BrowserRouter>
	);
};

export default AppRoutes;
