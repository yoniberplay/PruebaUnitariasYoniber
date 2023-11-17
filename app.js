const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Peliculas y series");
});

const server = app.listen(57675, () => {
  console.log(`Servidor online --> http://localhost:57675`);
});

app.close = (callback) => {
  server.close(callback);
};

module.exports = app;
