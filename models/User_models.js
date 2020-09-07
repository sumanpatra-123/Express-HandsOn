const mongoose = require('mongoose');
const validator = require('validator');

const UserSchema = new mongoose.Schema({

      name: {
            type: String,
            required: [true, 'Name has to be there'],
      },
      email: {
            type: String,
            required: [true, 'Email has to be there'],
            unique: true,
            validate: [validator.isEmail, 'Please Provide a Validate Email Id. ']
      },
      password: {
            type: String,
            required: [true, 'Password must have.'],
            maxlength: 10,
            minlength: 6
      },
      confirmPassowrd: {
            required: [true, 'Please confirm your password! '],
            type: String
      },
      photo: String,

});
const User = mongoose.model('User', UserSchema);
module.exports = User;