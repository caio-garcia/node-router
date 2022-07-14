const mongoose = require("mongoose");

async function connect() {
  try {
    const dbConnect = await mongoose.connect(process.env.DBMONGO_URI);
    console.log("Connected to DB: ", dbConnect.connection.name);
  } catch (error) {
    console.error(error);
  }
}

module.exports = connect;
