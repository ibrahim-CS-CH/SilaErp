import { Box, MenuItem, TextField, Toolbar, Tooltip, Typography } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const AddProduct = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState(null);
  const handleChage = (e)=>{
    const {name, value} = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log("submit");
  }
  const currencies = [
    {
      value: 'USD',
      label: '$',
    },
    {
      value: 'EUR',
      label: '€',
    },
    {
      value: 'BTC',
      label: '฿',
    },
    {
      value: 'JPY',
      label: '¥',
    },
  ];
  

  return (
    <form method="POST" onSubmit={handleSubmit} className="capitalize">
      <Typography variant="h5" sx={{ m:2 }}>{t("addProduct")}</Typography>
      <Box sx={{ display: "flex", width: "75%", pt: 3, flexWrap: "wrap" }}>
        <TextField
          variant="outlined"
          label={t("nameEn")}
          sx={{ width: "45%", mx: 2 }}
          name="nameEn"
          onChange={handleChage}
        />
        <TextField
          variant="outlined"
          label={t("nameAr")}
          sx={{ width: "45%", mx: 2, mt: { lg: 0, sm: 1 } }}
          name="nameAr"
          onChange={handleChage}
        />
      </Box>
      <Box sx={{ display: "flex", pt: 3, width: "75%", flexWrap: "wrap" }}>
        <TextField
          variant="outlined"
          label={t("desEn")}
          sx={{ width: "45%", mx: 2 }}
          name="descriptionEn"
          multiline
          onChange={handleChage}
        />
        <TextField
          variant="outlined"
          label={t("desAr")}
          sx={{ width: "45%", mx: 2, mt: { lg: 0, sm: 1 } }}
          name="descriptionAr"
          multiline
          onChange={handleChage}
        />
      </Box>
      <Box>
        <TextField 
          id="outlined-select-currency"
          select  
          variant="outlined"
          label={t("categories")}
          sx={{ width: "45%", m: 2 }}
          name="categories"
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Box>
      <Box sx={{ display: "flex", width: "75%", flexWrap: "wrap" }}>
        <TextField
             id="outlined-number"
             label={t("price-piece")} 
             type="number"
            sx={{ width: "25%", mx: 2 }}
            name="price"
            onChange={handleChage}
          />
        <TextField
          id="outlined-number"
          label={t("price-shrink")} 
          type="number"
          sx={{ width: "25%", mx: 2 }}
          name="price"
          onChange={handleChage}
        />
        <TextField
          id="outlined-number"
          label={t("price-carton")} 
          type="number"
          sx={{ width: "25%", mx: 2 }}
          name="price"
          onChange={handleChage}
        />
      </Box>
      <Toolbar className="text-xl">
        <Tooltip title={t("save")}>
          <button type="submit" className="border rounded-md p-2 mx-1 bg-blue-100 hover:bg-blue-300 ">
            {t("save")}
          </button>
        </Tooltip>
        <Tooltip title={t("cancel")}>
          <Link
            to={"/products"}
            className="border rounded-md p-2 mx-1 bg-red-100 hover:bg-red-300">
            {t("cancel")}
          </Link>
        </Tooltip>
      </Toolbar>
    </form>
  );
}

export default AddProduct