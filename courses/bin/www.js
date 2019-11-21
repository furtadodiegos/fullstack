const { app } = require("../");

const { PORT } = process.env;

const mongoose = require("mongoose");

mongoose.connection.once("open", () => {
  console.log("connected to database");

  app.listen(PORT, () => console.log(`Api running on port: ${PORT}`));
});
