  import { Tooltip } from "@material-ui/core";
  import { Box, TextField, Toolbar, Typography } from "@mui/material";
  import { useState } from "react";
  import { useTranslation } from "react-i18next";
  import { Link } from "react-router-dom";

const AddCategory = () => {
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

  return (
    <form method="POST" onSubmit={handleSubmit}>
      <Typography variant="h5" sx={{ m:2 }}>{t("addCategory")}</Typography>
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
          onChange={handleChage}
        />
        <TextField
          variant="outlined"
          label={t("desAr")}
          sx={{ width: "45%", mx: 2, mt: { lg: 0, sm: 1 } }}
          name="descriptionAr"
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
            to={"/categories"}
            className="border rounded-md p-2 mx-1 bg-red-100 hover:bg-red-300">
            {t("cancel")}
          </Link>
        </Tooltip>
      </Toolbar>
    </form>
  );
};

export default AddCategory;
