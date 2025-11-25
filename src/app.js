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

// ====== PREFIJO GLOBAL /api ======
const API_PREFIX = "/api";

// ====== RUTAS CON PREFIJO ======
app.use(`${API_PREFIX}/roles`, rolesRoutes);
app.use(`${API_PREFIX}/permisos`, permisosRoutes);
app.use(`${API_PREFIX}/usuarios`, usuariosRoutes);
app.use(`${API_PREFIX}/ver-detalle-rol`, verDetalleRolRoutes);
app.use(`${API_PREFIX}/referencias`, referenciasRoutes);
app.use(`${API_PREFIX}/ordenes`, ordenProduccionRoutes);
app.use(`${API_PREFIX}/ver-detalle-orden`, verDetalleOrdenRoutes);
app.use(`${API_PREFIX}/maquinas`, maquinasRoutes);
app.use(`${API_PREFIX}/operaciones`, operacionesRoutes);
app.use(`${API_PREFIX}/avances`, avancesRoutes);
app.use(`${API_PREFIX}/operarias`, operariasRoutes);
app.use(`${API_PREFIX}/desempeno`, desempenoRoutes);
app.use(`${API_PREFIX}/ver-detalle-desempeno`, verDetalleDesempenoRoutes);
app.use(`${API_PREFIX}/reportes-desempeno`, reportesDesempenoRoutes);
app.use(`${API_PREFIX}/clientes`, clientesRoutes);

// ====== ENDPOINT PRINCIPAL / con links clicables ======
app.get("/", (req, res) => {
  const baseUrl = `${req.protocol}://${req.get("host")}`;

  const rutas = listEndpoints(app)
    .map(r => r.path)
    .filter(path => !path.includes(":"))
    .map(path => `${baseUrl}${path}`);

  const html = `
    <html>
      <head>
        <title>API de Jirehmar</title>
      </head>
      <body>
        <h1>API de Jirehmar en ejecución</h1>
        <ul>
          ${rutas.map(r => `<li><a href="${r}" target="_blank">${r}</a></li>`).join("")}
        </ul>
      </body>
    </html>
  `;

  res.setHeader("Content-Type", "text/html");
  res.send(html);
});

// ====== ENDPOINT JSON DE TODAS LAS RUTAS ======
app.get("/routes", (req, res) => {
  res.json(listEndpoints(app));
});

export default app;
