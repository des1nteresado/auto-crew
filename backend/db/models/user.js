const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const { USER_ROLES } = require('../../src/constants');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: USER_ROLES.USER },
  firstName: { type: String },
  lastName: { type: String },
});

userSchema.pre('save', async function () {
  try {
    this.password = await bcrypt.hash(this.password, 10);
  } catch (error) {
    console.log(error);
  }
});

userSchema.methods.checkPassword = function (password) {
  return bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('users', userSchema);
