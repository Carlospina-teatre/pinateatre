const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.static(__dirname)); // sirve los archivos HTML, CSS, JS

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});