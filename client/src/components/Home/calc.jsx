import React, { useState } from "react";
import {
  Card,
  CardContent,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

const Calc = () => {
  let [aproxim, setAprox] = useState("");

  let [tiempoDeEj, setTiempoDeE] = useState("");
  let [actividad, setActividad] = useState("");

  let age;

  const handleAge = (e) => {
    age = e.target.value;
  };

  const handleCalc = (e) => {
    if (age === "1" || age === "2") {
      aproxim = "16-18 horas al día";
      tiempoDeEj = "60 minutos diarios";
      actividad = "Estimulación temprana";
    }
    if (age >= 3 && age <= 16) {
      aproxim = "11-12 horas al día";
      tiempoDeEj = "60 minutos diarios";
      actividad = "Correr, saltar, natacion";
    }
    if (age >= 17 && age <= 29) {
      aproxim = "9-10 horas al día";
      tiempoDeEj = "60 minutos diarios";
      actividad = "Deportes en equipo, baile, natacion, futbol";
    }
    if (age >= 30 && age <= 39) {
      aproxim = "7-8 horas al día";
      tiempoDeEj = "225 minutos a la semana";
      actividad = "Boxeo, bicicleta, ir al gimnasio, deportes en equipo";
    }
    if (age >= 40 && age <= 49) {
      aproxim = "7-8 horas al día";
      tiempoDeEj = "225 minutos a la semana";
      actividad = "ir al gimnasio, natación, yoga, pilates";
    }
    if (age >= 50 && age <= 65) {
      aproxim = "7-8 horas al día";
      tiempoDeEj = "225 minutos a la semana";
      actividad = "Bicicleta, natación, caminar, yoga, pilates";
    }

    if (age > 65) {
      aproxim = "7-8 horas al día";
      tiempoDeEj = "Entre media hora y cuarenta y cinco minutos al día";
      actividad = "Aeróbicos acuáticos, bailar, caminar";
    }
    if (age === 0) {
      aproxim = "";
      tiempoDeEj = "";
      actividad = "";
    }

    setTiempoDeE(tiempoDeEj);
    setAprox(aproxim);
    setActividad(actividad);
  };

  function SueñoI({ aproxim, tiempoDeEj, actividad }) {
    return (
      <div>
        <Typography sx={{ fontSize: 18, fontWeight: "medium" }}>
          Dormir:
        </Typography>
        {aproxim}
        <Typography sx={{ fontSize: 18, fontWeight: "medium" }}>
          Tiempo de actividad:
        </Typography>
        {tiempoDeEj}
        <Typography sx={{ fontSize: 18, fontWeight: "medium" }}>
          Actividad física:
        </Typography>
        {actividad}
        <Divider
          sx={{
            marginTop: 1,
            marginBottom: 1,
          }}
        />

        <Typography
          sx={{ fontSize: 20, fontWeight: "medium" }}
          className="recomend"
        >
          Recuerda que no importa la actividad, lo importante es estar en
          movimiento 😊
        </Typography>
      </div>
    );
  }

  return (
    <Card sx={{ height: 442, boxShadow: 2 }}>
      <CardContent>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          direction="column"
          heigh={250}
          flex={4}
          p={2}
        >
          <Grid item sx={{ padding: 0 }}>
            <Typography
              className="titlerecomen"
              sx={{ fontSize: 24, fontWeight: "bold" }}
            >
              Recomendaciones por edad
            </Typography>
          </Grid>

          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <TextField
              id="outlined-number"
              label="Edad"
              type="number"
              size="small"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={handleAge}
              defaultValue="0"
              sx={{ m: 1, width: "10ch" }}
            />
            <SearchRoundedIcon
              type="submit"
              value="Ver"
              onClick={handleCalc}
              variant="outlined"
            >
              Ver
            </SearchRoundedIcon>
          </Grid>

          <Grid item>
            <SueñoI
              aproxim={aproxim ? aproxim : <br />}
              tiempoDeEj={tiempoDeEj ? tiempoDeEj : <br />}
              actividad={actividad ? actividad : <br />}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
export default Calc;
