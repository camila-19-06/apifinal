import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import listEndpoints from "express-list-endpoints";

dotenv.config();

// ====== IMPORTAR RUTAS ======
import rolesRoutes from "./routes/roles.routes.js";
import permisosRoutes from "./routes/permisos.routes.js";
import usuariosRoutes from "./routes/usuarios.routes.js";
import verDetalleRolRoutes from "./routes/verDetalleRol.routes.js";
import referenciasRoutes from "./routes/referencias.routes.js";
import verDetalleOrdenRoutes from "./routes/verDetalleOrden.routes.js";
import ordenProduccionRoutes from "./routes/ordenProduccion.routes.js";
import clientesRoutes from "./routes/clientes.routes.js";
import maquinasRoutes from "./routes/maquinas.routes.js";
import operacionesRoutes from "./routes/operaciones.routes.js";
import avancesRoutes from "./routes/avances.routes.js";
import operariasRoutes from "./routes/operarias.routes.js";
import desempenoRoutes from "./routes/desempeno.routes.js";
import verDetalleDesempenoRoutes from "./routes/verDetalleDesempeno.routes.js";
import reportesDesempenoRoutes from "./routes/reportesDesempeno.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

// ====== RUTAS ======
app.use("/roles", rolesRoutes);
app.use("/permisos", permisosRoutes);
app.use("/usuarios", usuariosRoutes);
app.use("/ver-detalle-rol", verDetalleRolRoutes);
app.use("/referencias", referenciasRoutes);
app.use("/ordenes", ordenProduccionRoutes);
app.use("/ver-detalle-orden", verDetalleOrdenRoutes);
app.use("/maquinas", maquinasRoutes);
app.use("/operaciones", operacionesRoutes);
app.use("/avances", avancesRoutes);
app.use("/operarias", operariasRoutes);
app.use("/desempeno", desempenoRoutes);
app.use("/ver-detalle-desempeno", verDetalleDesempenoRoutes);
app.use("/reportes-desempeno", reportesDesempenoRoutes);
app.use("/clientes", clientesRoutes);




app.get("/", (req, res) => {
  // Obtener todas las rutas y filtrar las que NO contienen ':'
  const rutas = listEndpoints(app)
    .map(r => r.path)          // solo extrae el path
    .filter(path => !path.includes(":")); // filtra rutas con parámetros

  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify({
    mensaje: "API de Jirehmar en ejecución",
    rutas_disponibles: rutas
  }, null, 2)); // '2' espacios para indentación
});


// ====== ENDPOINT JSON DE TODAS LAS RUTAS ======
app.get("/routes", (req, res) => {
  const rutas = listEndpoints(app);
  res.json(rutas); // Array JSON puro con toda la info de rutas
});


export default app;
