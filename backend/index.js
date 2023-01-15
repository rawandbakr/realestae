const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const projectsRoutes =require('./routes/projects') 
const app = express();
const cors = require("cors")

app.use(express.json())

app.use(cors())

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
// setup routes
app.use('/projects',projectsRoutes);

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
