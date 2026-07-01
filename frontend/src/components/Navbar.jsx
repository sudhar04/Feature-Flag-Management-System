import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

    const { user, logout } = useAuth();

    const navigate = useNavigate();

    const handleLogout = () => {

        logout();

        navigate("/");

    }; 

    return (

        <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center shadow">

            <h1 className="text-xl font-bold">

                🚀 Feature Flag Management

            </h1>

            <div className="flex items-center gap-4">

                <span>

                    Welcome,

                    {user?.name || "Admin"}

                </span>

                <button

                    onClick={handleLogout}

                    className="bg-red-500 px-4 py-2 rounded hover:bg-red-600"

                >

                    Logout

                </button>

            </div>

        </nav>

    );

};

export default Navbar;