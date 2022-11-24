import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  Input,
  InputLabel,
  Typography,
  TextField
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Send } from "@mui/icons-material";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
// import "./style.css"; //¿Esto funcionaría?
require('./style.css')

const useStyle = makeStyles((theme: any) => ({
  form: {
    // backgroundColor: '#0a182d',
    // backgroundColor: '#fff',
    // margin: '0 !important',
    // padding:'0 !important',
    '& *': {
      color: '#ffffff !important'
    },
    '& .MuiInput-root::after, & .MuiInput-root::before, & fieldset': {
      borderColor: '#ffffff !important'
    }
  },
  buttonSend: {
    margin: 8,
    backgroundColor: "#ffffff !important",
    color: '#0a182d !important',
    '& .MuiSvgIcon-root': {
      fill: '#0a182d !important'
    }
  }
})) as any;

export default function FormContact() {
  const [t, i18n] = useTranslation("global");
  const [value, setValue] = useState({
    nombre: "",
    email: "",
    mensaje: "",
    terminos: false,
  });
  const classes = useStyle();

  const handleChange = (e: any) => {
    const target = e.target as HTMLInputElement;
    const isCheckbox = e.target.type === 'checkbox';

    setValue((state) => ({
      ...state,
      [target.name]: isCheckbox ? !!e.target.checked :target.value,
    }));
  };

  const handleFormSubmit = (e: any) => {
    (e as Event).preventDefault();

    const form = e.target as HTMLFormElement;

    if (!form.checkValidity()) {
      // Form invalid
      alert('Formulario Invalido');
      return;
    }
  };

  return (
    <>
      <Typography variant="h6" color="#ffffff">
        {t("formContact.title")}
      </Typography>

      <form onSubmit={handleFormSubmit} style={{ padding: 0, margin: 0 }}>
        <Grid container spacing={6} className="textShadow">
          <Grid item xs={12}>
            <FormControl>
              <InputLabel htmlFor="nombre" >{t("formContact.name")}</InputLabel>
              <Input
                name="nombre"
                id="nombre"
                value={value.nombre}
                onChange={handleChange}
                required={true}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl>
              <InputLabel htmlFor="email" >{t("formContact.email")}</InputLabel>
              <Input
                name="email"
                id="email"
                value={value.email}
                onChange={handleChange}
                required={true}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl>
              <Typography variant="h6" color="initial">
              {t("formContact.message")}
              </Typography>
              <TextField
                placeholder="insert here your message"
                name="mensaje"
                id="mensaje"
                value={value.mensaje}
                onChange={handleChange}
                required={true}
                minRows={7}
                multiline={true}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              className="textShadow"
              label= {t("formContact.message")}
              control={
                <Checkbox
                  name="terminos"
                  checked={value.terminos}
                  onChange={handleChange}
                  required={true}
                />
              }
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" endIcon={<Send />} sx={{ margin: 8 }} className={classes.buttonSend}>
              {t("formContact.send")}
              </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
}
