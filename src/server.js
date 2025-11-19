import app from "./app.js";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 3000;

// Arrancar servidor
app.listen(PORT, () => {
  
  console.log(`🔗 Para ver todas las rutas: http://localhost:${PORT}/routes`);
});
