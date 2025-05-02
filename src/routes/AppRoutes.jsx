import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout/Layout.jsx";
import Home from "../pages/Home.jsx";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";
import ProtectedRoute from "../components/ProtectedRoute.jsx";
import Profile from "../pages/Profile.jsx";
import ProjectDetail from "../pages/ProjectDetail.jsx";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Public Routes */}
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                {/* Protected Routes with Layout */}
                <Route
                    element={
                        <ProtectedRoute>
                            {" "}
                            <Layout />{" "}
                        </ProtectedRoute>
                    }
                >
                    <Route path="/" element={<Home />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route
                        path="/project/:projectId"
                        element={<ProjectDetail />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
