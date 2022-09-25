const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const auth = require("./routes/auth");
const mongoURI =
  "mongodb+srv://Dhruv:9998924136@cluster0.pw104mm.mongodb.net/login?retryWrites=true&w=majority";

const PORT = 3000;
app.use(bodyparser.json());
app.use(express.urlencoded({ extended: true }));
app.use("/auth", auth);
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("open", () => {
  console.log("Database connected successfully");
});

app.listen(PORT, (err) => {
  if (!err) {
    console.log(`App is listening to port no ${PORT}`);
  }
});
