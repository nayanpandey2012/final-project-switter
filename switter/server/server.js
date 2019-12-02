const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8000;

const routes = require("../routes/api");

mongoose.connect("mongodb://localhost:27017/testConnection", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on("connected", () => {
  console.log("MongoDB is now connected");
});

// Data parsing - makes data available in req.body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(morgan("tiny"));
app.use("/api", routes);

app.listen(PORT, console.log(`listening on: ${PORT}`));
