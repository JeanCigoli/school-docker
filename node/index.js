const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  return res.send("<h1>Full Cycle</h1>");
});

app.listen(port, () => {
  console.log(`API is running in port: ${port}`);
});
