const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!, Welcome to my Web App");
});

app.listen(port, () => {
  console.log(`Application listening on port ${port}`);
});