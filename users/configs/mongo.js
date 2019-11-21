const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.set('useCreateIndex', true);

module.exports = mongoose
  .connect(
    process.env.MONGODB_URI,
    { useNewUrlParser: true },
  )
  .catch((error) => console.log(`MongoDB error: ${error}`));
