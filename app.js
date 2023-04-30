import express from "express";
import AlumnosRoute from "./routes/alumnos.routes.js";
import AlumnosRouteApi from "./api/routes/alumnos.api.routes.js";

const app = express(); // el server

app.use(express.urlencoded({ extended: true })); // para leer los datos del body
app.use(express.json()); // para leer los datos del body
app.use("/", express.static("public")); // para servir archivos estáticos

app.use(AlumnosRoute); // para usar las rutas de la web alumnos
app.use('/api', AlumnosRouteApi); // para usar las rutas de la api alumnos

app.listen(2023, function () {
  // levantar el servidor
  console.log("Servidor levantado! http://localhost:2023");
});
