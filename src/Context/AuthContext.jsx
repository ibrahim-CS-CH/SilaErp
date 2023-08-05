import { createContext, useContext, useEffect, useState } from "react";
import axios from "../config/config";
export const AuthContext = createContext({});
const AuthProvider = ({ children }) => {
  const BASE_URL = "/user/login";
  const login = async (email, password) => {
    if (!email.length || !password.length) {
      console.log("err");
    } else {
      try {
        const response =  await axios.post(
          BASE_URL,
          JSON.stringify({
            email,
            password,
          }),
          {
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "http://localhost:3000",
            },
            withCredentials: false,
          }
        );
        if (response.data.status === 200) {
            localStorage.setItem("accessToken", response?.data?.accessToken);
            return response.data
        } else {
            return response.data.error
        }
      } catch (error) {
        return error
      }
    }
  };
  return <AuthContext.Provider value={{login}}>{children}</AuthContext.Provider>;
};
export default AuthProvider;
export const useAuth = () => {
  return useContext(AuthContext);
};
