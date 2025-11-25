import app from "./app.js";

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  const hostUrl = process.env.BASE_URL || `http://localhost:${PORT}`;
  console.log(`Servidor ejecutándose en: ${hostUrl}`);
});
