const express = require("express");

require("dotenv").config();
require("./config/db.config")();

const app = express();

app.use(express.json());

//Users router

const userRouter = require("./routes/usersRouter");

app.use("/user", userRouter);

//Addresses router

const addressRouter = require("./routes/addressRouter");
app.use("/address", addressRouter);

//LISTEN
app.listen(Number(process.env.PORT), () => {
  console.log(`Running on port ${process.env.PORT}`);
});
