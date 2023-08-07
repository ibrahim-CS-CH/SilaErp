import { Tooltip } from "@material-ui/core";
import { Box, TextField, Toolbar, Typography } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import axios from '../../config/config'
import useAxiosPrivate from "../../Hooks/useAxiosPrivate";
import useAuth from "../../Hooks/useAuth";
const AddClient = () => {
  const {auth} = useAuth();
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [location, setLocation] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  // const axiosPrivate = useAxiosPrivate();

    const { t } = useTranslation();
    // const [formData, setFormData] = useState(null);
    // const handleChage = (e)=>{
    //   const {name, value} = e.target;
    //   setFormData((prevData) => ({
    //     ...prevData,
    //     [name]: value,
    //   }));
    // };
    const handleSubmit = (e)=>{
      e.preventDefault();
      if(!email || !username || !location || !phoneNumber) {
        console.log("not data");
      }else {
        const getUsers = async () =>{
    
          try {
            const response = await axios.post('/client/',{
              body:JSON.stringify({
                username,
                location,
                phoneNumber,
                // email
              }),
              Headers:{
                'Content-Type':"application/json",
                'Authorization': `Bearer ${auth?.accessToken}`
              },
              withCredentials: false
            });
            console.log(response.data);
            // isMounted && setClients(response.data)
          } catch (error) {
            console.log(error);
            // navigate("/login", { state: {from: location}, replace: true})
          }
        }
        getUsers().then((data)=>data)
        console.log("data exist!");
      }

    // const getUsers = async () =>{
    //   let isMounted = true;

    //   try {
    //     const response = await axiosPrivate.post('/client/',{
    //       signal: control.signal,
    //       body:{
    //         username:FormData.username,
    //         location:FormData.address,
    //         phoneNumber:FormData.phone,
    //       },
    //       Headers:{
    //         'Content-Type':"application/json"
    //       },
    //       withCredentials: false
    //     });
    //     console.log(response.data);
    //     // isMounted && setClients(response.data)
    //   } catch (error) {
    //     console.log(error);
    //     // navigate("/login", { state: {from: location}, replace: true})
    //   }
    // }
    
    //   if(formData != null) {
    //     getUsers();
    //     console.log(formData);
    //     setFormData(null)
    //     console.log("submit");
    //   }else {
    //     console.log("didn't have any data ");
    //   }
    }
  
    return (
      <form method="POST" onSubmit={handleSubmit}>
        <Typography variant="h5" sx={{ m:2 }}>{t("addClient")}</Typography>
        <Box sx={{ display: "flex", width: "75%", pt: 3, flexWrap: "wrap" }}>
          <TextField
            variant="outlined"
            label={t("name")}
            sx={{ width: "45%", mx: 2 }}
            name="name"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
          />
          <TextField
            variant="outlined"
            label={t("email")}
            sx={{ width: "45%", mx: 2, mt: { lg: 0, sm: 1 } }}
            name="email"
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
        </Box>
        <Box sx={{ display: "flex", pt: 3, width: "75%", flexWrap: "wrap" }}>
          <TextField
            variant="outlined"
            label={t("phone")}
            sx={{ width: "45%", mx: 2 }}
            name="phone"
            value={phoneNumber}
            onChange={(e)=>setPhoneNumber(e.target.value)}
            
          />
          <TextField
            variant="outlined"
            label={t("address")}
            sx={{ width: "45%", mx: 2, mt: { lg: 0, sm: 1 } }}
            name="address"
            value={location}
            onChange={(e)=>setLocation(e.target.value)}/>
        </Box>
        <Toolbar className="text-xl">
          <Tooltip title={t("save")}>
            <button type="submit" className="border rounded-md p-2 mx-1 bg-blue-100 hover:bg-blue-300 ">
              {t("save")}
            </button>
          </Tooltip>
          <Tooltip title={t("cancel")}>
            <Link
              to={-1}
              className="border rounded-md p-2 mx-1 bg-red-100 hover:bg-red-300">
              {t("cancel")}
            </Link>
          </Tooltip>
        </Toolbar>
      </form>
    );
  };
  

export default AddClient