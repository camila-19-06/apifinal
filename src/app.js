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

// ====== MIDDLEWARE GLOBAL: RESPUESTA SIEMPRE ARRAY ======
app.use((req, res, next) => {
  const originalJson = res.json;
  res.json = (data) => {
    if (data && !Array.isArray(data)) {
      originalJson.call(res, [data]);
    } else {
      originalJson.call(res, data);
    }
  };
  next();
});

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

// ====== ENDPOINT PRINCIPAL ======
app.get("/", (req, res) => {
  res.json({ message: "Jirehmar API running" });
});

// ====== ENDPOINT SIMPLE DE RUTAS (Clicables, solo HTML) ======
app.get("/routes", (req, res) => {
  const rutas = listEndpoints(app);
  let html = `<h1>Rutas de la API</h1><ul>`;
  rutas.forEach(r => {
    html += `<li>${r.methods.join(", ")} - <a href="${r.path}" target="_blank">${r.path}</a></li>`;
  });
  html += `</ul>`;
  res.send(html);
});

export default app;
