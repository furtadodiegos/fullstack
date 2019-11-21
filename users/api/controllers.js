// const cryptoJS = require('crypto-js');
const { User } = require("./model");

const save = async ({ body }, res, next) => {
  try {
    const user = await new User(body).save();

    return res.status(201).send(await User.findById(user._id));
  } catch (e) {
    return next(e);
  }
};

const getAll = async (req, res, next) => {
  try {
    const users = await User.find({});

    return res.send(users);
  } catch (e) {
    return next(e);
  }
};

module.exports = { getAll, save };
