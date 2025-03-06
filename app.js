require("dotenv").config();
const express = require("express");
const app = express();
const routes = require("./api/routes");
const { status } = require("./api/utils/status");

const PORT = process.env.PORT || 5000;

app.use("/", routes);

// if route not found
app.use((req, res) => {
  res.status(status.NOT_FOUND).send("Route not found!");
});

app.listen(PORT, () => {
  console.log(`Backend listening on port ${PORT}`);
});
