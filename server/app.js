const express = require("express");
const config = require("config");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000"],
    optionsSuccessStatus: 200
  })
); // enable cors policy
app.use(express.json({ extended: true })); // like "body-parser"

app.use("/api/info", require("./routes/coffee.routes"));
app.use("/api/buy", require("./routes/buy.routes"));

const PORT = config.get("port") || 5000;

async function start() {
  try {
    await mongoose
      .connect(config.get("mongodbUrl"), {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
      })
      .then(() => console.log("successfully connected to db"))
      .catch((error) => console.log(`conecting to db error: ${error}`))

    /* bot.onText(/\/start/, function onPhotoText(msg) {
        bot.sendGame(msg.chat.id, gameName);
    });*/

    app.listen(PORT, () => console.log(`Server was runned at port: ${PORT}...`));
  } catch (err) {
    console.log('Server Error' + err.message);
    process.exit();
  }
}
start();