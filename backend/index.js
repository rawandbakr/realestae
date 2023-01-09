const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//connetc to db
mongoose
  .connect(process.env.MONG_URI)
  .then(() => {
    //listen for requests
    app.listen(process.env.PORT, () => {
      console.log(
        "connected to the database  & listenenig on port",
        process.env.PORT
      );
    });
  })
  .catch((error) => {
    console.log(error);
  });
