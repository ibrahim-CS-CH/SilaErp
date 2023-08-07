import axios from '../config/config'
import useAuth from './useAuth'
const useRefreshToken = () => {
  const {setAuth} = useAuth();
  const refresh = async () =>{
    const response = await axios.get("/refresh",{
        headers:{
            "Content-Type":"application/json",
            "Access-Control-Allow-Origin": "http://localhost:3000",
        },
        xsrfCookieName:"refreshToken",
        withCredentials:false,
    });
    setAuth(prev=>{
        console.log(JSON.stringify(prev));
        console.log(response.data.accessToken);
        return {...prev, accessToken: response.data.accessToken}
    })
    return response.data.accessToken;
  }
  
    return refresh
}

export default useRefreshToken