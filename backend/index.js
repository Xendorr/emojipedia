const express = require("express");
const pg = require("pg");
const dotenv = require("dotenv");

dotenv.config();

const db = new pg.Client({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});

const app = express();
const port = 3001;

db.connect();

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  next();
});

app.get("/", async (req, res) => {
  res.status(200).send("Hello World");
});

app.get("/emojis", async (req, res) => {
  const result = await db.query("SELECT * FROM emojilist");
  if (result) {
    res.status(200).json(result.rows);
  } else {
    res.status(404).send("No Emojis Found");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
// Path: emojipedia/backend/package.json
