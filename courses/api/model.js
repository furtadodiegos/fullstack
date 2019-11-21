const mongoose = require("mongoose");

// Validation helpers
// require('mongoose-type-email');

const { Schema } = mongoose;

const courseSchema = new Schema({
  name: { type: String, required: true }
  // firstName: { type: String, required: true },
  // lastName: { type: String, required: true },
  // email: { type: mongoose.SchemaTypes.Email, required: true, unique: true },
  // password: { type: String, required: true, trim: true },
  // phone: { type: Number },
  // createdAt: { type: Date, default: new Date() },
  // updatedAt: { type: Date, default: new Date(), required: true },
  // token: { type: String, required: true },
  // _courses: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: 'Course',
  //   },
  // ],
});

const Course = mongoose.model("Course", courseSchema);

module.exports = { Course };
