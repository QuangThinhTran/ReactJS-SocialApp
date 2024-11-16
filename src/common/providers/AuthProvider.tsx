import axios from "axios";
import React, { createContext, useEffect, useMemo, useState } from "react"

interface MyComponentProps {
    children: React.ReactNode;
}

interface AuthContextType {
    token: string | null;
    setToken: (newToken: string) => void;
    username: string | null;
    setUsername: (newUsername: string) => void;
    removeToken: () => void;
}

export const AuthContext = createContext<AuthContextType>({
    token: localStorage.getItem("token") || null,
    setToken: () => { },
    username: localStorage.getItem("username") || null,
    setUsername: () => { },
    removeToken: () => { },
});

const AuthProvider: React.FC<MyComponentProps> = ({ children }) => {
    const [token, setToken_] = useState<string | null>(localStorage.getItem("token"));
    const [username, setUsername_] = useState<string | null>(localStorage.getItem("username"));

    const setToken = (newToken: string) => {
        setToken_(newToken);
    };

    const setUsername = (newUsername: string) => {
        setUsername_(newUsername);
    };

    const removeToken = () => {
        setToken_(null);
    };

    useEffect(() => {
        if (token) {
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
            localStorage.setItem("token", token);
            localStorage.setItem("username", username || "");
        } else {
            delete axios.defaults.headers.common["Authorization"];
            localStorage.removeItem("token");
            localStorage.removeItem("username");
        }
    }, [token, username]);

    const contextValue = useMemo(() => ({
        token,
        setToken,
        username,
        setUsername,
        removeToken
    }), [token, username]);

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;