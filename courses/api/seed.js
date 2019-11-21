const { Course } = require('./model');

const prepareDatabase = (done) => {
  Course.deleteMany({})
    .then(() => done())
    .catch((err) => done(err));
};

module.exports = { prepareDatabase };
