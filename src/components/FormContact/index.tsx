import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  Input,
  InputLabel,
  Typography,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./style.css";

export default function FormContact() {
  const [t, i18n] = useTranslation("global");
  const [value, setValue] = useState({
    nombre: "",
    email: "",
    mensaje: "",
    terminos: false,
  });

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
      <Typography variant="h6" color="initial">
        Formulario de contacto
      </Typography>

      <form onSubmit={handleFormSubmit}>
        <Grid container spacing={6}>
          <Grid item sm={12}>
            <FormControl>
              <InputLabel htmlFor="nombre">Nombre</InputLabel>
              <Input
                name="nombre"
                id="nombre"
                value={value.nombre}
                onChange={handleChange}
                required={true}
              />
            </FormControl>
          </Grid>
          <Grid item sm={12}>
            <FormControl>
              <InputLabel htmlFor="email">Email</InputLabel>
              <Input
                name="email"
                id="email"
                value={value.email}
                onChange={handleChange}
                required={true}
              />
            </FormControl>
          </Grid>
          <Grid item sm={12}>
            <FormControl>
              <Typography variant="h6" color="initial">
              Mensaje
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
          <Grid item sm={12}>
            <FormControlLabel
              label="Aceptar terminos"
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
          <Grid item sm={12}>
            <Button type="submit">Enviar</Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
}
