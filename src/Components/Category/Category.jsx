import { Link } from "react-router-dom";
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
const Category = () => {
  const { t } = useTranslation();

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];
  return (
    <Box className="px-6 space-y-3 capitalize ">
      <Typography variant="h4">{t("categories")}</Typography>
      <Tooltip title={t("addCategory")}>
        <Link
          to={"/add-category"}
          className="block border w-fit p-2 text-xl rounded-md hover:bg-blue-200">
          {t("addCategory")}
        </Link>

      </Tooltip>
      <TextField
        
        id="outlined-basic"
        label={t("search")}
        variant="outlined"
        className="w-1/2 text-lg"
      />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead className="bg-slate-300 text-lg ">
            <TableRow>
              <TableCell>{t("nameEn")}</TableCell>
              <TableCell>{t("nameAr")}</TableCell>
              <TableCell>{t("desEn")}</TableCell>
              <TableCell>{t("desAr")}</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="">
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell>{row.calories}</TableCell>
                <TableCell>{row.fat}</TableCell>
                <TableCell>{row.carbs}</TableCell>
                <TableCell >
                  <Tooltip title={t("editCategory")}>
                        <IconButton >
                          <AiFillEdit size={"1.2em"}/>
                        </IconButton>
                  </Tooltip>
                    
                      <Tooltip title={t("deleteCategory")}>
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
};

export default Category;
