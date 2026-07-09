import { Menu, X, LogOut, Rocket } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Navbar = ({ sidebarOpen, setSidebarOpen }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="bg-blue-600 shadow-md sticky top-0 z-40">

      <div className="flex items-center justify-between px-4 md:px-6 h-16">

        {/* Left */}

        <div className="flex items-center gap-3">

          {/* Mobile Menu */}

          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden text-white"
          >
            {sidebarOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          <div className="flex items-center gap-2">

            <Rocket
              className="text-white"
              size={28}
            />

            <h1 className="text-white font-bold text-lg md:text-xl">

              Feature Flag Management

            </h1>

          </div>

        </div>

        {/* Right */}

        <div className="flex items-center gap-4">

          <span className="hidden sm:block text-white">

            Welcome,

            <strong className="ml-1">

              {user?.name || "Admin"}

            </strong>

          </span>

          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 transition px-4 py-2 rounded-lg text-white flex items-center gap-2"
          >
            <LogOut size={18} />

            Logout

          </button>

        </div>

      </div>

    </nav>
  );
};

export default Navbar;