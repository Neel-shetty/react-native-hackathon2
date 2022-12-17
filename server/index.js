const { default: axios } = require("axios");
const express = require("express");
require("dotenv").config();
const fs = require("fs");

const app = express();

const SAPLING_API_URL = "https://api.sapling.ai/api/v1/edits";
const apiKey = process.env.SAPLING_API_KEY;

app.use(express.json());
// console.log(process.env.SAPLING_API_KEY);

app.post("/api/v1/edits", (req, res, next) => {
  // req.body.key = apiKey; // Set the API key
  const data = {
    "key": apiKey,
    "text": "i are neel",
    "session_id": "test Document UUID",
  };
  req.body = JSON.stringify(data);
  axios({
    url: SAPLING_API_URL, // Pass request onto Sapling servers
    data: req.body,
    method: "post",
  }).then(function (response) {
    // Return the response to frontend
    const textres = response;
    fs.writeFile("test.txt", textres, (err) => {
      if (err) {
        console.log(err);
      }
    });
    console.log("🚀 ~ file: index.js:21 ~ app.post ~ textres", textres);
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(response.data));
  });
});

app.get("/", (req, res) => {
  res.json({ test: "hello world" });
});

app.listen(4000);
