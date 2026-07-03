import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService";
import { useAuth } from "../context/AuthContext";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  Rocket,
} from "lucide-react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await loginUser({
        email,
        password,
      });

      login(data.user, data.token);

      navigate("/dashboard");
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Login Failed"
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-blue-50 flex items-center justify-center px-4">

      {/* Background Blur */}

      <div className="absolute h-72 w-72 rounded-full bg-blue-400/20 blur-3xl top-20 left-20"></div>

      <div className="absolute h-72 w-72 rounded-full bg-indigo-400/20 blur-3xl bottom-20 right-20"></div>

      {/* Login Card */}

      <div className="relative w-full max-w-md">

        <div className="rounded-3xl border border-white/40 bg-white/80 backdrop-blur-xl shadow-2xl p-8">

          {/* Logo */}

          <div className="flex justify-center">

            <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg">

              <Rocket className="text-white" size={36} />

            </div>

          </div>

          <h1 className="mt-6 text-center text-4xl font-bold text-slate-900">
            Welcome Back
          </h1>

          <p className="mt-2 text-center text-slate-500">
            Sign in to continue
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-5"
          >

            {/* Email */}

            <div className="relative">

              <Mail
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="
                w-full
                rounded-2xl
                border
                border-slate-200
                bg-slate-50
                py-4
                pl-12
                pr-4
                text-slate-800
                outline-none
                transition-all
                duration-300
                focus:border-blue-500
                focus:bg-white
                focus:ring-4
                focus:ring-blue-100
              "
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                required
              />

            </div>

            {/* Password */}

            <div className="relative">

              <Lock
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                placeholder="Password"
                className="
                w-full
                rounded-2xl
                border
                border-slate-200
                bg-slate-50
                py-4
                pl-12
                pr-12
                text-slate-800
                outline-none
                transition-all
                duration-300
                focus:border-blue-500
                focus:bg-white
                focus:ring-4
                focus:ring-blue-100
              "
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                required
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-600"
              >
                {showPassword ? (
                  <EyeOff size={20} />
                ) : (
                  <Eye size={20} />
                )}
              </button>

            </div>

            {/* Login */}

            <button
              type="submit"
              className="
              w-full
              rounded-2xl
              bg-gradient-to-r
              from-blue-600
              to-indigo-600
              py-4
              font-semibold
              text-white
              shadow-lg
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-2xl
            "
            >
              Login
            </button>

          </form>

        </div>

      </div>
    </div>
  );
}

export default Login;