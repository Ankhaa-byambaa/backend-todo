const express = require("express");
const app = express();
const port = 4000;
const arr = app.get("/", (req, res) => {
  res.send("Hi~ !");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
