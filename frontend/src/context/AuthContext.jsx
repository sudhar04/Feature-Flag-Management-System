import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const [token, setToken] = useState(
        localStorage.getItem("token") || ""
    );

    useEffect(() => {

        if (token) {
            localStorage.setItem("token", token);
        }

    }, [token]);

    const login = (userData, jwtToken) => {

        setUser(userData);

        setToken(jwtToken);

    };

    const logout = () => {

        setUser(null);

        setToken("");

        localStorage.removeItem("token");

    };

    return (

        <AuthContext.Provider
            value={{
                user,
                token,
                login,
                logout
            }}
        >

            {children}

        </AuthContext.Provider>

    );

};

export const useAuth = () => {

    return useContext(AuthContext);

};