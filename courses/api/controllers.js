// const cryptoJS = require('crypto-js');
const { Course } = require("./model");

const save = async ({ body }, res, next) => {
  try {
    const course = await new Course(body).save();

    return res.status(201).send(await Course.findById(course._id));
  } catch (e) {
    return next(e);
  }
};

const getAll = async (req, res, next) => {
  try {
    const courses = await Course.find({});

    return res.send(courses);
  } catch (e) {
    return next(e);
  }
};

module.exports = { getAll, save };
