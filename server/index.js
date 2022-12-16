const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ test: "hello world" });
});

app.listen(4000);
