const express = require("express");
const app = express();
const router = express.Router();
const serverless = require("serverless-http");

router.get("/", (req, res) => {
  res.status(200).send({ message: "App is running.." });
});

app.use("/.netlify/functions/api", router);
module.exports.handler = serverless(app);
