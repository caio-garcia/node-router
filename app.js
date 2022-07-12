const express = require("express");

const app = express();

app.use(express.json());

//Users router

const userRouter = require("./routes/usersRouter");

app.use("/user", userRouter);

//Addresses router

const addressRouter = require("./routes/addressRouter");
app.use("/address", addressRouter);

app.listen(4000, () => {
  console.log("Running on port 4000");
});
