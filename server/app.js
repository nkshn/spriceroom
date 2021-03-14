const express = require("express");
const config = require("config");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json({ extended: true }));

const PORT = config.get('port') || 5000;

async function start() {
  try {
    app.listen(PORT, () => console.log(`Server was runned at port: ${PORT}...`));
  } catch (err) {
    console.log('Server Error' + err.message);
    process.exit();
  }
}
start();