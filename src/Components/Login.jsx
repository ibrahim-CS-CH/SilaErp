import { useState } from "react";
import { useTranslation } from "react-i18next";
import axios from "../config/config"
import useAuth from "../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
function Login() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/"  
  const BASE_URL= "/user/login";
  const {setAuth} = useAuth();
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginSubmit = async (e) => {
    e.preventDefault();
    if (!email.length || !password.length) {
      console.log("err");
          }else{
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
                    "Access-Control-Allow-Credentials": true

                  },
                  withCredentials: false,
                }
              );
              if (response.data.status === 200) {
                const accessToken = response?.data?.accessToken;
                  setAuth({
                    accessToken:accessToken, 
                    email
                  });
                  console.log(response);
                  navigate(from, {replace: true})
              } else {
                console.log(response.data)
              }
            } catch (error) {
              return error
            }

          }      
          
  };
  return (
    <div className="grid grid-cols-12">
      <div className="col-start-4 col-span-6 bg-gray-50 rounded my-20 ">
        <h1 className="text-2xl font-semibold text-center m-5 text-gray-600 pt-2">
          {t("login")}
        </h1>
        <form
          className="grid grid-cols-1 text-gray-600 text-center "
          onSubmit={loginSubmit}>
          <div className="m-7">
            <label className="block text-gray-700  text-start  mb-2">
              {t("email")}
              <input
                type="email"
                placeholder={t("email")}
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="shadow appearance-none mt-2 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </label>
          </div>
          <div className="m-7">
            <label className="block text-gray-700 text-start font-bold mb-2">
              {t("password")}
              <input
                type="password"
                name="password"
                placeholder={t("password")}
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </label>
          </div>
          <button
            type="submit"
            onClick={loginSubmit}
            className=" bg-blue-300 hover:bg-blue-400  text-white font-bold m-7  py-2 px-4 rounded">
            {t("login")}
          </button>
        </form>
      </div>
    </div>
  );
}
export default Login;
