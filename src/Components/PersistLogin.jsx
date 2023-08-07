import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import useRefreshToken from "../Hooks/useRefreshToken";
import useAuth from "../Hooks/useAuth";


const PersistLogin = ()=>{
    const [isLoading, setIsLoading] = useState(true);
    const refresh = useRefreshToken();
    const {auth} = useAuth();
    useEffect(()=>{
        const verfyRefreshToken = async()=>{
        try {
                // await refresh();
            } catch (error) {
                console.log(error);
            }finally{
                setIsLoading(false)
            }
        }
        !auth?.accessToken ? verfyRefreshToken() : setIsLoading(false);

    }, [auth.accessToken]);
    useEffect(()=>{
        console.log("isloading", isLoading);
        console.log(`at: ${JSON.stringify(auth?.accessToken)}`);
    }, [isLoading, auth?.accessToken])
    return (
        <>
            {isLoading 
                ?<>loading</>
                :<Outlet />
            }
        </>
    )
}
export default PersistLogin;