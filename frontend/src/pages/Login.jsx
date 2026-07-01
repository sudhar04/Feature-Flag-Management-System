import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { loginUser } from "../services/authService";

import { useAuth } from "../context/AuthContext";

function Login() {

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleSubmit = async (e) => {

        e.preventDefault();

    try {

        const data = await loginUser({

            email,

            password

        });

        login(

            data.user,

            data.token

        );

        navigate("/dashboard");

    }

    catch (error) {

    console.log(error);

    console.log(error.response);

    console.log(error.response?.data);

    alert(
        error.response?.data?.message ||
        "Login Failed"
    );

}

};

    return (

        <div className="min-h-screen flex items-center justify-center bg-gray-100">

            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-lg shadow-lg w-96"
            >

                <h1 className="text-3xl font-bold text-center mb-6">

                    Login

                </h1>

                <input
                    type="email"
                    placeholder="Email"
                    className="w-full border p-3 rounded mb-4"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    className="w-full border p-3 rounded mb-6"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button
                    className="bg-blue-600 text-white w-full py-3 rounded hover:bg-blue-700"
                >

                    Login

                </button>

            </form>

        </div>

    );

}

export default Login;