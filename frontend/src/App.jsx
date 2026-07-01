import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import CreateFeature from "./pages/CreateFeature";
import ProtectedRoute from "./components/ProtectedRoute";
import FeatureFlags from "./pages/FeatureFlags";
import Organizations from "./pages/Organizations";

function App() {

    return (

        <BrowserRouter>

            <Routes>

                {/* Public Route */}

                <Route
                    path="/"
                    element={<Login />}
                />

                {/* Protected Routes */}

                <Route element={<ProtectedRoute />}>

                    <Route element={<DashboardLayout />}>

                        <Route
                            path="/dashboard"
                            element={<Dashboard />}
                        />

                        <Route
                            path="/create-feature"
                            element={<CreateFeature />}
                        />

                        <Route
                            path="/feature-flags"
                            element={<FeatureFlags />}
                        />

                        <Route
                            path="/organizations"
                            element={<Organizations />}
                        />

                    </Route>

                </Route>

                {/* 404 */}

                <Route
                    path="*"
                    element={<NotFound />}
                />

            </Routes>

        </BrowserRouter>

    );

}

export default App;
