import { Link, useLocation, useNavigate } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, IconButton, TextField } from "@material-ui/core";
import {Tooltip, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import useAxiosPrivate from "../../Hooks/useAxiosPrivate";

import { useEffect, useState } from "react";
import useRefreshToken from "../../Hooks/useRefreshToken";
const Clients = () => {
 const refresh = useRefreshToken();

  const { t } = useTranslation();
  const [clients, setClients] = useState();
  const [search, setSearch] = useState("");
  const axiosPrivate = useAxiosPrivate();
  useEffect(()=>{
    let isMounted = true;
    const control = new AbortController();
    const getUsers = async () =>{
      try {
        const response = await axiosPrivate.get('/client/all',{
          // signal: control.signal,
          Headers:{
            'Content-Type':"application/json"
          },
          withCredentials: false
        });
        isMounted && setClients(response.data)
      } catch (error) {
        console.log(error);
        // navigate("/login", { state: {from: location}, replace: true})
      }
    }
    getUsers();
      return () =>{
        isMounted = false;
        control.abort();
      }
  }, [])
  // const filterClients = clients && clients.filter((e)=>e.username.includes(search));
  return (
    <Box className="px-6 space-y-3 capitalize ">
      <button onClick={()=>refresh()}>refresh</button>
      <Typography variant="h4">{t("clients")}</Typography>
      <Link
        to={"/add-client"}
        title={t("addClient")}
        className="block border w-fit p-2 text-xl rounded-md hover:bg-blue-200">
        {t("addClient")}
      </Link>
      <TextField
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        id="outlined-basic"
        label={t("search")}
        variant="outlined"
        className="w-1/2 text-lg"
      />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead className="bg-slate-300 text-lg ">
            <TableRow>
              <TableCell>{t("id")}</TableCell>
              <TableCell>{t("name")}</TableCell>
              <TableCell>{t("phone")}</TableCell>
              <TableCell>{t("address")}</TableCell>
              <TableCell>{t("createdAt")}</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="">
            {clients && clients.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell>{row.username}</TableCell>
                <TableCell>{row.phoneNumber}</TableCell>
                <TableCell>{row.location}</TableCell>
                <TableCell>{row.createdAt}</TableCell>
                <TableCell >
                  <Tooltip title={t("editClient")}>
                        <IconButton >
                          <AiFillEdit size={"1.2em"}/>
                        </IconButton>
                  </Tooltip>
                    
                      <Tooltip title={t("deleteClient")}>
                        <IconButton>
                          <AiFillDelete size={"1.2em"} />
                        </IconButton>
                      </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer> 
    </Box>
  );
}

export default Clients